import React, { FC } from 'react'
import { Redirect } from 'react-router-dom'
import { DefaultField } from 'atoms/textFields'
import { ButtonForm } from 'atoms/buttons'
import { useAddForm } from './hooks/useAddForm'
import { useStyle } from './styled'
import { Currency } from './multiSelect/currency'
import { ProductType } from 'molecules/addProduct/multiSelect/productType'
import { CircularProgress } from '@material-ui/core'

export const AddProduct: FC = () => {
  const { productAddForm } = useStyle()
  const {
    productNameError,
    priceError,
    quantityError,
    saveName,
    savePrice,
    saveQuantity,
    sendAddedProduct,
    error,
    jwtToken,
    loading,
    addProduct,
  } = useAddForm()
  if (addProduct) {
    return <Redirect to="/products" />
  }
  if (error === 'Unauthorized' || !jwtToken) {
    return <Redirect to="/unauthorized" />
  }
  return (
    <div className={productAddForm}>
      {loading ? (
        <CircularProgress size={114} color="primary" />
      ) : (
        <>
          <DefaultField
            label="name of product"
            validation={productNameError}
            saveValue={saveName}
          />
          <DefaultField label="price" validation={priceError} saveValue={savePrice} />
          <DefaultField
            label="amount of product"
            validation={quantityError}
            saveValue={saveQuantity}
          />
          <Currency />
          <ProductType />
          <ButtonForm label="add product" sendFormData={sendAddedProduct} />
        </>
      )}
    </div>
  )
}

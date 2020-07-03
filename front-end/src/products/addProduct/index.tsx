import React, { FC } from 'react'
import { Redirect } from 'react-router-dom'
import { Field } from '../../textFields'
import { useAddForm } from './hooks/useAddForm'
import { useStyle } from './styled'
import { ButtonForm } from '../../buttons'
import { Currency } from './selects/currency'
import { TypeOfProduct } from './selects/typeOfProduct'
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
          <Field
            label="name of product"
            validation={productNameError}
            saveValue={saveName}
          />
          <Field label="price" validation={priceError} saveValue={savePrice} />
          <Field
            label="amount of product"
            validation={quantityError}
            saveValue={saveQuantity}
          />
          <Currency />
          <TypeOfProduct />
          <ButtonForm label="add product" sendFormData={sendAddedProduct} />
        </>
      )}
    </div>
  )
}

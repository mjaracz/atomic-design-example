import React, { FC } from 'react';
import { Redirect } from 'react-router-dom';

import { CircularProgress } from '@material-ui/core';
import { ButtonForm } from 'atoms/buttons';
import { DefaultField } from 'atoms/textFields';
import { ProductType } from 'molecules/addProduct/multiSelect/productType';

import { useAddForm } from './hooks/useAddForm';
import { Currency } from './multiSelect/currency';
import { useStyle } from './styled';

export const AddProduct: FC = () => {
  const { productAddForm } = useStyle();
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
  } = useAddForm();
  if (addProduct) {
    return <Redirect to="/products" />;
  }
  if (error === 'Unauthorized' || !jwtToken) {
    return <Redirect to="/unauthorized" />;
  }
  return (
    <div className={productAddForm}>
      {loading ? (
        <CircularProgress color="primary" size={114} />
      ) : (
        <>
          <DefaultField
            label="name of product"
            saveValue={saveName}
            validation={productNameError}
          />
          <DefaultField
            label="price"
            saveValue={savePrice}
            validation={priceError}
          />
          <DefaultField
            label="amount of product"
            saveValue={saveQuantity}
            validation={quantityError}
          />
          <Currency />
          <ProductType />
          <ButtonForm label="add product" sendFormData={sendAddedProduct} />
        </>
      )}
    </div>
  );
};

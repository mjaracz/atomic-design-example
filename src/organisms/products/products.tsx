import React from 'react';
import { Redirect } from 'react-router-dom';

import { CircularProgress, List } from '@material-ui/core';
import { ButtonHome } from 'atoms/buttons';

import { useProductsList } from './hooks/useProductsList';
import { Item } from './item';
import { useStyle } from './styled';

export const ProductsList = () => {
  const { root } = useStyle();
  const { list, loading, error, jwtToken, deleteItem, productDelete } =
    useProductsList();
  if (error === 'Unauthorized' || !jwtToken) {
    return <Redirect to="/unauthorized" />;
  }
  return (
    <div className={root}>
      {loading || productDelete.loading ? (
        <CircularProgress color="primary" size={114} />
      ) : (
        <List dense>
          {list.map((product, key) => {
            const keyItem = `key${key}`;
            return <Item deleteItem={deleteItem} key={keyItem} product={product} />;
          })}
        </List>
      )}
      <ButtonHome label="add product" path="/add-product" />
    </div>
  );
};

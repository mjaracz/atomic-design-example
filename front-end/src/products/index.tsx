import React from 'react'
import { CircularProgress, List } from '@material-ui/core'
import { useStyle } from './styled'
import { Item } from './item'
import { useProductsList } from './hooks/useProductsList'
import { Redirect } from 'react-router-dom'
import { ButtonHome } from '../buttons'

export const ProductsList = () => {
  const { root } = useStyle()
  const { list, loading, error, jwtToken, deleteItem, productDelete } = useProductsList()
  if (error === 'Unauthorized' || !jwtToken) {
    return <Redirect to="/unauthorized" />
  }
  return (
    <div className={root}>
      {loading || productDelete.loading ? (
        <CircularProgress size={114} color="primary" />
      ) : (
        <List dense={true}>
          {list.map((product, key) => (
            <Item key={key} product={product} deleteItem={deleteItem} />
          ))}
        </List>
      )}
      <ButtonHome label="add product" path="/add-product" />
    </div>
  )
}

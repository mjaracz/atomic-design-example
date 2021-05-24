import React, { FC } from 'react';

import {
  Avatar,
  IconButton,
  ListItem,
  ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText,
} from '@material-ui/core';
import { Deck } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';

import { useStyle } from './styled';
import { ItemProps } from './types';

export const Item: FC<ItemProps> = ({
  deleteItem,
  product: { name, description, price, currency, productId },
}) => {
  const { item, itemText, itemDescText, itemDeleteAction } = useStyle();
  return (
    <ListItem className={item}>
      <ListItemAvatar>
        <Avatar>
          <Deck />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        className={itemText}
        primary={name}
        secondary={`${price} ${currency.baseCurrency}`}
      />
      {description && (
        <ListItemText className={itemDescText} primary={description} />
      )}
      <ListItemSecondaryAction className={itemDeleteAction}>
        <IconButton
          aria-label="delete-product"
          edge="end"
          onClick={() => deleteItem(productId)}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

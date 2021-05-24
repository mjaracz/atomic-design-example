import React from 'react';

import { render } from '@testing-library/react';

import { Item } from '../item';
import { productMock } from '../mocks/productItem.mock';

describe('<Item/>', () => {
  describe('when got correct props', () => {
    it('should be defined and match snapshot ', () => {
      const deleteItemAction = jest.fn(() => {});
      const { baseElement } = render(
        <Item deleteItem={deleteItemAction} key={0} product={productMock} />
      );
      expect(baseElement).toBeDefined();
      expect(baseElement).toMatchSnapshot();
    });
  });
});

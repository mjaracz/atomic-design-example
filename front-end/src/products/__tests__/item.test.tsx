import React from 'react'
import { Item } from '../item'
import { render } from '@testing-library/react'
import { productMock } from '../mocks/productItem.mock'

describe('<Item/>', () => {
  describe('when got correct props', () => {
    it('should be defined and match snapshot ', () => {
      const deleteItemAction = jest.fn((id: number) => {})
      const { baseElement } = render(<Item key={0} deleteItem={deleteItemAction} product={productMock}/>)
      expect(baseElement).toBeDefined()
      expect(baseElement).toMatchSnapshot()
    })
  })
})

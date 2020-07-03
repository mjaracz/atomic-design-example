import React from 'react'
import { render } from '@testing-library/react'
import { AddProduct } from '../index'
import * as hook from '../hooks/useAddForm'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from '../../../utils.unitTest/storeProvider'

describe('<AddProduct/>', () => {
  let testedHook;
  beforeEach(() => {
    testedHook = jest.spyOn(hook, 'useAddForm')
  })
  it('should be defined, call useAddForm and match snapshot', function() {
    const { baseElement } = render(
      <BrowserRouter>
        <StoreProvider>
          <AddProduct/>
        </StoreProvider>
      </BrowserRouter>
    )
    expect(baseElement).toBeDefined()
    expect(testedHook).toHaveBeenCalled()
    expect(baseElement).toMatchSnapshot()
  })
})
import React from 'react'
import { render } from '@testing-library/react'
import { ProductsList } from '../index'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from '../../../utils/unitTest/storeProvider'
import * as hook from '../hooks/useProductsList'

describe('<ProductsList/>', () => {
  let testedHook
  beforeEach(() => {
    testedHook = jest.spyOn(hook, 'useProductsList')
  })
  afterAll(() => {
    jest.clearAllMocks()
  })
  it('should be defined, call useProductsList, and match snapshot', function() {
    const { baseElement } = render(
      <BrowserRouter>
        <StoreProvider>
          <ProductsList/>
        </StoreProvider>
      </BrowserRouter>
    )
    expect(baseElement).toBeDefined()
    expect(testedHook).toHaveBeenCalled()
    expect(baseElement).toMatchSnapshot()
  })
})
import React from 'react'
import { render } from '@testing-library/react'
import { UserInfo } from '../'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from '../../utils.unitTest/storeProvider'

describe('<UserInfo />', () => {
  it('should be defined and match snapshot', () => {
    const { baseElement } = render(
      <StoreProvider>
        <BrowserRouter>
          <UserInfo/>
        </BrowserRouter>
      </StoreProvider>
    )
    expect(baseElement).toBeDefined()
    expect(baseElement).toMatchSnapshot()
  })
})
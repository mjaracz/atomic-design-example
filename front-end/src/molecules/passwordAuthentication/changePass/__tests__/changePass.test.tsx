import React from 'react'
import { render } from '@testing-library/react'
import { ChangePass } from 'molecules/passwordAuthentication/changePass/index'
import { BrowserRouter } from 'react-router-dom'
import { StoreProvider } from '../../utils/unitTest/storeProvider'
import * as hook from 'molecules/passwordAuthentication/changePass/hooks/useChangePass'

describe('<ChangePass/>', () => {
  let testedHook;
  beforeEach(() => {
    testedHook = jest.spyOn(hook, 'useChangePass')
  })
  it('should be defined, call useChangePass hook and match snapshot', function() {
    const { baseElement } = render(
      <BrowserRouter>
        <StoreProvider>
          <ChangePass match={{params: { token: 'mock' }}}/>
        </StoreProvider>
      </BrowserRouter>
    )
    expect(baseElement).toBeDefined()
    expect(testedHook).toHaveBeenCalled()
    expect(baseElement).toMatchSnapshot()
  })
})
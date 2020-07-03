import { renderHook, act } from '@testing-library/react-hooks'
import { useProductsList } from '../../hooks/useProductsList'
import { StoreProvider } from '../../../utils.unitTest/storeProvider'
import * as ReactRedux from 'react-redux'
import React from 'react'

describe('hooks/useProductsList', () => {
  let spyOnDispatch
  let spyOnUseEffect
  beforeEach(() => {
    spyOnUseEffect = jest.spyOn(React, 'useEffect')
    spyOnDispatch = jest.spyOn(ReactRedux, 'useDispatch')
  })
  afterAll(() => {
    jest.clearAllMocks()
  })
  describe('when is rerender', () => {
    it('should call useEffect and useDispatch', () => {
      const { rerender } = renderHook(() => useProductsList(), { wrapper: StoreProvider })
      act(() => {
        rerender()
      })
      expect(spyOnDispatch).toHaveBeenCalled()
      expect(spyOnUseEffect).toHaveBeenCalled()
    })
  })
})
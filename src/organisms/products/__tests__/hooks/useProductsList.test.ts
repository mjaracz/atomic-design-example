import React from 'react';
import * as ReactRedux from 'react-redux';

import { act, renderHook } from '@testing-library/react-hooks';

import { StoreProvider } from '../../../../utils/unitTest/storeProvider';
import { useProductsList } from '../../hooks/useProductsList';

describe('hooks/useProductsList', () => {
  let spyOnDispatch;
  let spyOnUseEffect;
  beforeEach(() => {
    spyOnUseEffect = jest.spyOn(React, 'useEffect');
    spyOnDispatch = jest.spyOn(ReactRedux, 'useDispatch');
  });
  afterAll(() => {
    jest.clearAllMocks();
  });
  describe('when is rerender', () => {
    it('should call useEffect and useDispatch', () => {
      const { rerender } = renderHook(() => useProductsList(), {
        wrapper: StoreProvider,
      });
      act(() => {
        rerender();
      });
      expect(spyOnDispatch).toHaveBeenCalled();
      expect(spyOnUseEffect).toHaveBeenCalled();
    });
  });
});

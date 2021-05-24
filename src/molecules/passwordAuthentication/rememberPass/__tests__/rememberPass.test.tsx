import React from 'react';

import { render } from '@testing-library/react';
import * as hooks from 'molecules/passwordAuthentication/rememberPass/hooks/useRememberPass';
import { RememberPass } from 'molecules/passwordAuthentication/rememberPass/index';
import { StoreProvider } from 'utils/unitTest/storeProvider';

describe('<RememberPass/>', () => {
  let spyOnHook;
  beforeEach(() => {
    spyOnHook = jest.spyOn(hooks, 'useRememberPass');
  });
  it('should be defined and match Snapshot', () => {
    const { baseElement } = render(
      <StoreProvider>
        <RememberPass />
      </StoreProvider>
    );

    expect(baseElement).toBeDefined();
    expect(spyOnHook).toHaveBeenCalled();
    expect(baseElement).toMatchSnapshot();
  });
});

import React from 'react';

import { render } from '@testing-library/react';
import { Home } from 'organisms/home/home';
import { UnitTestWrapper } from 'utils/unitTest/unitTestWrapper';


describe('<Home/>', () => {
  it('should be defined and match snapshot', () => {
    const { baseElement } = render(
      <UnitTestWrapper>
        <Home/>
      </UnitTestWrapper>
    );

    expect(baseElement).toBeDefined();
    expect(baseElement).toMatchSnapshot();
  });
});

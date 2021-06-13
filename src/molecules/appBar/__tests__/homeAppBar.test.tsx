import React from 'react';

import { render } from '@testing-library/react';
import { HomeAppBar } from 'molecules/appBar/appBar';
import { UnitTestWrapper } from 'utils/unitTest/unitTestWrapper';

describe('<HomeAppBar />', () => {
  it('should correctly render and match the snapshot', () => {
    const { baseElement } = render(
      <UnitTestWrapper>
        <HomeAppBar />
      </UnitTestWrapper>
    );

    expect(baseElement).toMatchSnapshot();
  });
});

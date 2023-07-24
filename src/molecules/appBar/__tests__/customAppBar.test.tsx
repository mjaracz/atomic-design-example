import React from 'react';

import { render } from '@testing-library/react';
import { CustomAppBar } from 'molecules/appBar/customAppBar';
import { UnitTestWrapper } from 'utils/unitTest/unitTestWrapper';

describe('<HomeAppBar />', () => {
  it('should correctly render and match the snapshot', () => {
    const { baseElement } = render(
      <UnitTestWrapper>
        <CustomAppBar />
      </UnitTestWrapper>
    );

    expect(baseElement).toMatchSnapshot();
  });
});

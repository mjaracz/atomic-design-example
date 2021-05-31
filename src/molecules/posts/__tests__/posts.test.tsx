import React from 'react';
import { render } from '@testing-library/react';
import { UnitTestWrapper } from 'utils/unitTest/unitTestWrapper';
import { Posts } from '../posts';

describe('<Posts />', () => {
  it('should match snapshot', () => {
    const { baseElement } = render(
      <UnitTestWrapper>
        <Posts />
      </UnitTestWrapper>
    );
    expect(baseElement).toMatchSnapshot();
  });
});

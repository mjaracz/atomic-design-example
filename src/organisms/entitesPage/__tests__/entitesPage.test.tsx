import React from 'react';
import { render } from '@testing-library/react';
import { UnitTestWrapper } from 'utils/unitTest/unitTestWrapper';
import { EntitesPage } from '../entitesPage';

describe('<EntitesPage />', () => {
  describe('where wrap component with redux and theme provider', () => {
    it('should correctly match the snapshot', () => {
      const { baseElement } = render(
        <UnitTestWrapper>
          <EntitesPage />
        </UnitTestWrapper>
      );
      expect(baseElement).toMatchSnapshot();      
    });
  });
});

import React from 'react';

import { render } from '@testing-library/react';

import { UploadFile } from '../uploadFile';

describe('<UploadFile/>', () => {
  describe('when got loading props true', () => {
    it('should match snapshot', () => {
      const { baseElement } = render(
        <UploadFile
          onChangeUpload={jest.fn()}
          upload={{ loading: true, file: new FormData(), error: '' }}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  });
  describe('when got loading props false', () => {
    it('should match snapshot', () => {
      const { baseElement } = render(
        <UploadFile
          onChangeUpload={jest.fn()}
          upload={{ loading: false, file: new FormData(), error: '' }}
        />
      );
      expect(baseElement).toMatchSnapshot();
    });
  });
});

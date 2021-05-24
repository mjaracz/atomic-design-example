import React from 'react';

import { fireEvent, render } from '@testing-library/react';

import { PasswordField } from '../passwordField';

describe('<PasswordField/>', () => {
  describe('when pass correct props', () => {
    describe('and props validation.isError is true', () => {
      let GetByTestId;
      let BaseElement;
      beforeEach(() => {
        const { getByTestId, baseElement } = render(
          <PasswordField
            savePassword={jest.fn()}
            validation={{ isError: true }}
          />
        );
        GetByTestId = getByTestId;
        BaseElement = baseElement;
      });

      it('should render <TextField error/>', () => {
        fireEvent.change(GetByTestId('textField'));
        expect(GetByTestId('textField')).toBeDefined();
      });
      it('wrapper should match snapshot', () => {
        expect(BaseElement).toMatchSnapshot();
      });
    });
    describe('and props validation.isError is false', () => {
      let GetByTestId;
      let BaseElement;
      beforeAll(() => {
        const { getByTestId, baseElement } = render(
          <PasswordField
            savePassword={jest.fn()}
            validation={{ isError: false }}
          />
        );
        GetByTestId = getByTestId;
        BaseElement = baseElement;
      });
      it('should render <TextField/>', () => {
        fireEvent.change(GetByTestId('textField'));
        expect(GetByTestId('textField')).toBeDefined();
      });
      it('wrapper should match snapshot', () => {
        expect(BaseElement).toMatchSnapshot();
      });
    });
  });
});

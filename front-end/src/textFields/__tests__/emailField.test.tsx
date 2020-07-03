import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Field } from '../field'

describe('<Field/>', () => {
  describe('when pass correct props', () => {
    describe('and props validation.isError is true', () => {
      let GetByTestId
      let BaseElement
      beforeEach(() => {
        const { getByTestId, baseElement } = render(<Field validation={{ isError: true }} saveEmail={jest.fn()} />)
        GetByTestId = getByTestId
        BaseElement = baseElement
      })

      it('should render <TextField error/>', () => {
        fireEvent.change(GetByTestId('textField'))
        expect(GetByTestId('textField')).toBeDefined()
      })
      it('wrapper should match snapshot', () => {
        expect(BaseElement).toMatchSnapshot()
      })
    })
    describe('and props validation.isError is false', () => {
      let GetByTestId
      let BaseElement
      beforeAll(() => {
        const { getByTestId, baseElement } = render(<Field validation={{ isError: false }} saveEmail={jest.fn()} />)
        GetByTestId = getByTestId
        BaseElement = baseElement
      })
      it('should render <TextField/>', () => {
        fireEvent.change(GetByTestId('textField'))
        expect(GetByTestId('textField')).toBeDefined()
      })
      it('wrapper should match snapshot', () => {
        expect(BaseElement).toMatchSnapshot()
      })
    })
  })
})

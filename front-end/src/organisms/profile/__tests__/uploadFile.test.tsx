import React from 'react'
import { UploadFile } from '../uploadFile'
import { render } from '@testing-library/react'

describe('<UploadFile/>', () => {
  describe('when got loading props true', () => {
    it('should match snapshot', function() {
      const { baseElement } = render(
        <UploadFile upload={{loading: true, file: new FormData(), error: ''}} onChangeUpload={jest.fn()}/>
      )
      expect(baseElement).toMatchSnapshot()
    })
  })
  describe('when got loading props false', () => {
    it('should match snapshot', function() {
      const { baseElement } = render(
        <UploadFile upload={{loading: false, file: new FormData(), error: ''}} onChangeUpload={jest.fn()}/>
      )
      expect(baseElement).toMatchSnapshot()
    })
  })
})
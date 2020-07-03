import { checkProductName } from '../checkProductName'

describe('addProduct/utils.add.validation, checkProductName function', () => {
  describe('when got incorrect name', () => {
    it('should return isError true', function() {
      expect(checkProductName('cm')).toEqual({isError: true, message: 'incorrect, min. 3 char, without white space'})
    })
  })
  describe('when got correct name', () => {
    it('should return isError false', function() {
      expect(checkProductName('enoughLengthName')).toEqual({ isError: false })
    })
  })
})
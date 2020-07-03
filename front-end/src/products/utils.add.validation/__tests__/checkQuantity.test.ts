import { checkQuantity } from '../checkQuantity'

describe('addProduct/utils.add.validation, checkQuantity function', () => {
  describe('when got incorrect value', () => {
    it('should return isError true', function() {
      expect(checkQuantity('ckkmcd')).toEqual({ isError: true, message: 'incorrect, only number, min 1, max 8 char' })
    })
  })
  describe('when got correct value', () => {
    it('should return isError false', function() {
      expect(checkQuantity('2432')).toEqual({ isError: false })
    })
  })
})
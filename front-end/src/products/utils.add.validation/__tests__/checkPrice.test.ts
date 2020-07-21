import { checkPrice } from '../checkPrice'

describe('addProduct/utils.add.validation, checkPrice function', () => {
  describe('when got incorrect price', () => {
    it('should return isError true', function() {
      expect(checkPrice('mock')).toEqual({isError: true, message: 'incorrect, only number, min 1, max 6'} )
    })
  })
  describe('when got correct price', () => {
    it('should return isError false', function() {
      expect(checkPrice('932')).toEqual({isError: false})
    })
  })
})
import { checkPrice } from 'utils/validation/checkPrice';

describe('addProduct/addValidation, checkPrice function', () => {
  describe('when got incorrect price', () => {
    it('should return isError true', () => {
      expect(checkPrice('mock')).toEqual({
        isError: true,
        message: 'incorrect, only number, min 1, max 6',
      });
    });
  });
  describe('when got correct price', () => {
    it('should return isError false', () => {
      expect(checkPrice('932')).toEqual({ isError: false });
    });
  });
});

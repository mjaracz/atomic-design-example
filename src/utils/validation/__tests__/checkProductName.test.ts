import { checkProductName } from 'utils/validation/checkProductName';

describe('addProduct/addValidation, checkProductName function', () => {
  describe('when got incorrect name', () => {
    it('should return isError true', () => {
      expect(checkProductName('cm')).toEqual({
        isError: true,
        message: 'incorrect, min. 3 char, without white space',
      });
    });
  });
  describe('when got correct name', () => {
    it('should return isError false', () => {
      expect(checkProductName('enoughLengthName')).toEqual({ isError: false });
    });
  });
});

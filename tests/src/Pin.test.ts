import Pin from '../../src/Pin';

describe('Pin', () => {
  const pin = new Pin(1000);
  describe('isPinInvalid', () => {
    describe('when pin has same consecutive digits', () => {
      it('should return true', () => {
        expect(pin.isPinInvalid(1156)).toBeTruthy()
      })
    })
    describe('when pin has no consecutive digits', () => {
      it('should return false', () => {
        expect(pin.isPinInvalid(1856)).toBeFalsy()
      })
    })
    describe('when pin has incremental digits', () => {
      it('should return true', () => {
        expect(pin.isPinInvalid(1236)).toBeTruthy()
      })
    })
    describe('when pin has no incremental digits', () => {
      it('should return false', () => {
        expect(pin.isPinInvalid(9538)).toBeFalsy()
      })
    })
  })
});

export class Pin {
  private quantity: number;

  constructor(quantity: number) {
    this.quantity = quantity;
  }

  createPinsBatch() {
    const set = new Set();
    while(set.size !== this.quantity) {
      set.add(this.validPin())
    }
    return [...set]
  }

  private validPin() {
    let pin = this.randmoPinGenerator()
    while(this.isPinInvalid(pin)){
      pin = this.randmoPinGenerator()
    }
    return pin
  }
  private randmoPinGenerator() {
    return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
  }
  
  private isPinInvalid(pin: number) {
    const hasSameConsecetiveDigits = (/(\d)\1/).test(pin.toString())
    return hasSameConsecetiveDigits || this.hasIncrementalDigits(pin)
  }
  
  private hasIncrementalDigits(pin: number) {
    let pinArray = this.numberToArray(pin)
    const firstThreeDigits = pinArray.slice(0,3) 
    const lastThreeDigits = pinArray.slice(-3)
  
    this.areThreeDigitsIncremental(firstThreeDigits) ||
    this.areThreeDigitsIncremental(lastThreeDigits)
  }
  
  private areThreeDigitsIncremental(pinArray: number[]) {
    let difference = pinArray.map((item, index) =>
      index === 0 ? 0 : pinArray[index - 1] - item
    );
  
    // [0, -1, -1] invalid format
    if (difference[1] === -1 && difference[2] === -1) {
      return true
    }
    return false
  }
  
  private numberToArray(number: number) {
    let array = number.toString().split("")
    return array.map(x => parseInt(x))
  }
}

const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('floating point whole numbers', () => {
      assert.strictEqual(calculateNumber(2.0, 3.0), 5);
    });
  
    it('rounding down floating point fractional number', () => {
      assert.strictEqual(calculateNumber(1.0, 3.4), 4);
    });
  
    it('rounding down a and b\'s floating point fractional number', () => {
      assert.strictEqual(calculateNumber(2.4, 2.4), 4);
    });
  
    it('rounding down a\'s floating point fractional number', () => {
      assert.strictEqual(calculateNumber(2.4, 2.0), 4);
    });
  
    it('rounding up b\'s floating point fractional numbers', () => {
      assert.strictEqual(calculateNumber(1.0, 2.5), 4);
    });
  
    it('rounding up a and b\'s floating point fractional numbers', () => {
      assert.strictEqual(calculateNumber(3.6, 2.5), 7);
    });
  
    it('rounding up a\'s floating point fractional numbers', () => {
      assert.strictEqual(calculateNumber(2.6, 3.0), 6);
    });
  
    it('rounding down a and b floating point fractional numbers with trailing 9\'s', () => {
      assert.strictEqual(calculateNumber(3.499999, 3.499999), 6);
    });
  });
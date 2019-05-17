const { db } = require('../db');

describe('database', () => {
  test('should be named "trekbikes"', () => {
    expect(db.name).toBe('trekbikes');
  });

  test('should have product and color models', () => {
    expect(db.modelNames()).toContain('Product');
    expect(db.modelNames()).toContain('Color');
  });
});

const { Product } = require('../db');

const {
  random,
  selectRandomFrom,
  randomProductName,
  randomProductDescription,
  randomReviews,
  randomReleaseDate,
  randomColors,
  mockColor,
  mockProduct,
  seed,
} = require('../mock/utils');

describe('utility methods for mocking', () => {
  describe('random(ceil, floor)', () => {
    let randoms;
    const createRandoms = (qty, ceil, floor) => {
      const created = [];
      for (let i = 0; i < qty; i++) {
        created.push(random(ceil, floor));
      }

      return created;
    };

    test('should have a default floor of zero', () => {
      randoms = createRandoms(100, 5);
      randoms.forEach(number => expect(number).not.toBeLessThan(0));
    });

    test('should return a number between ceil and floor, inclusive', () => {
      randoms = createRandoms(100, 10, 2);
      randoms.forEach((number) => {
        expect(number).not.toBeLessThan(2);
        expect(number).toBeGreaterThanOrEqual(2);
        expect(number).toBeLessThanOrEqual(10);
        expect(number).not.toBeGreaterThan(10);
      });

      expect(randoms).toContain(2);
      expect(randoms).toContain(10);
    });
  });

  describe('selectRandomFrom(array)', () => {
    const array = ['test', 'with', 'jest'];
    test('should return one element from an array', () => {
      expect(array).toContain(selectRandomFrom(array));
    });

    test('should select an element at (pseudo)random from the input array', () => {
      let selectedDifferent = false;
      const firstSelected = selectRandomFrom(array);
      for (let i = 0; i < 15; i++) {
        selectedDifferent = firstSelected !== selectRandomFrom(array) ? true : selectedDifferent;
      }

      expect(selectedDifferent).toBe(true);
    });
  });

  describe('randomProductName()', () => {
    test('should return a string', () => {
      expect(typeof randomProductName()).toBe('string');
    });

    test('should not return an empty string', () => {
      for (let i = 0; i < 100; i++) {
        expect(randomProductName().length).toBeGreaterThan(0);
      }
    });

    test('should return a (pseudo)random string', () => {
      const productName = randomProductName();
      expect(productName).not.toBe(randomProductName());
    });
  });

  describe('randomProductDescription()', () => {
    test('should return a string', () => {
      expect(typeof randomProductName()).toBe('string');
    });

    test('should not return an empty string', () => {
      for (let i = 0; i < 100; i++) {
        expect(randomProductDescription().length).toBeGreaterThan(0);
      }
    });

    test('should return a (pseudo)random string', () => {
      const productDescription = randomProductDescription();
      expect(productDescription).not.toBe(randomProductDescription());
    });
  });

  describe('randomReviews()', () => {
    test('should return an array', () => {
      expect(Array.isArray(randomReviews())).toBe(true);
    });

    test('should return an array of numbers between 1–5', () => {
      randomReviews().forEach((review) => {
        expect(typeof review).toBe('number');
        expect(review).toBeGreaterThanOrEqual(1);
        expect(review).toBeLessThanOrEqual(5);
      });
    });
  });

  describe('randomReleaseDate()', () => {
    test('should return a date', () => {
      expect(randomReleaseDate() instanceof Date).toBe(true);
    });

    test('should return a (pseudo)random date', () => {
      let hadDifferent = false;
      const date = randomReleaseDate();
      for (let i = 0; i < 5; i++) {
        hadDifferent = date !== randomReleaseDate() ? true : hadDifferent;
      }

      expect(hadDifferent).toBe(true);
    });
  });

  describe('randomColors()', () => {
    test('should return an array', () => {
      expect(Array.isArray(randomColors())).toBe(true);
    });

    test('should return an array with at least one element', () => {
      for (let i = 0; i < 15; i++) {
        expect(randomColors().length).toBeGreaterThan(0);
      }
    });
  });
});

describe('mock data creation methods', () => {
  const check = (document, prop) => {
    expect(document[prop]).not.toBeNull();
    expect(document[prop]).toBeDefined();
  };

  describe('mockColor()', () => {
    test('should return a mongoose document conforming to the color schema', () => {
      const color = mockColor();

      check(color, 'name');
      expect(typeof color.name).toBe('string');

      check(color, 'finish');
      expect(typeof color.finish).toBe('string');

      check(color, 'rgb');
      expect(typeof color.rgb).toBe('string');

      check(color, 'quantityInInventory');
      expect(typeof color.quantityInInventory).toBe('object');
    });
  });

  describe('mockProduct(id)', () => {
    test('should return a mongoose document conforming to the product schema', () => {
      const product = mockProduct(1);

      check(product, 'id');
      expect(typeof product.id).toBe('number');

      check(product, 'name');
      expect(typeof product.name).toBe('string');

      check(product, 'colors');
      expect(Array.isArray(product.colors)).toBe(true);

      check(product, 'releaseDate');
      expect(product.releaseDate instanceof Date).toBe(true);

      check(product, 'reviews');
      expect(Array.isArray(product.reviews)).toBe(true);

      check(product, 'price');
      expect(typeof product.price).toBe('number');

      check(product, 'description');
      expect(typeof product.description).toBe('string');
    });
  });
});

describe('seeding', () => {
  beforeEach(async () => {
    await seed();
  });

  test('should seed the database with 100 primary records', async () => {
    const count = await Product.estimatedDocumentCount().exec();
    expect(count).toBe(100);
  });
});

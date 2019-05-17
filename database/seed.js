const util = require('./mockUtils');

const { Product } = require('./db');

const mockProduct = (id) => {
  const product = { id };

  product.name = util.randomProductName();
  product.description = util.randomProductDescription();
  product.price = util.random(250, 10);
  product.colors = util.randomColors();
  product.reviewAverage = util.random(5, 1);
  product.releaseDate = util.randomReleaseDate();

  return new Product(product);
};

const seed = async () => {
  await Product.deleteMany({});
  for (let i = 0; i < 100; i++) {
    const product = mockProduct();
    product.save();
  }
};

seed();

module.exports = { mockProduct, seed };

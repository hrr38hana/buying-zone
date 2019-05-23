const mockData = require('./data');

const { Product, Color } = require('../db');

const random = (ceil, floor = 0) => Math.max(Math.floor(Math.random() * (ceil + 1)), floor);

const selectRandomFrom = array => array[random(array.length - 1)];

const randomProductName = () => selectRandomFrom(mockData.brandNames)
  .concat(' ', selectRandomFrom(mockData.productFamilies))
  .concat(' ', selectRandomFrom(mockData.productLevels))
  .concat(' ', selectRandomFrom(mockData.productTypes));

const randomProductDescription = () => {
  let description = '';
  for (let i = 0; i < random(4, 1); i++) {
    description = description.concat(selectRandomFrom(mockData.descriptions), ' ');
  }

  return description.trim();
};

const randomReviews = () => {
  const reviews = [];
  for (let i = 0; i < random(15); i++) {
    reviews.push(random(5, 1));
  }

  return reviews;
};

const randomReleaseDate = () => new Date(2019, random(5, 1));

const mockColor = () => {
  const color = {};

  color.name = selectRandomFrom(mockData.colorNames);
  color.finish = selectRandomFrom(mockData.colorFinishes);
  color.rgb = `rgb(${random(255)},${random(255)},${random(255)})`;
  color.quantityInInventory = {};
  mockData.sizes.forEach((size) => {
    color.quantityInInventory[size] = random(5);
  });

  return new Color(color);
};

const randomColors = () => {
  const colors = [];
  for (let i = 0; i < random(6, 1); i++) {
    colors.push(mockColor());
  }

  return colors;
};

const mockProduct = (id) => {
  const product = { id };

  product.name = randomProductName();
  product.description = randomProductDescription();
  product.price = random(250, 10);
  product.reviews = randomReviews();
  product.releaseDate = randomReleaseDate();
  product.colors = randomColors();

  return new Product(product);
};

const seed = async () => {
  await Product.deleteMany({});
  for (let i = 1; i < 100; i++) {
    const product = mockProduct(i);
    product.save();
  }

  return mockProduct(100).save();
};

module.exports = {
  random,
  selectRandomFrom,
  randomProductName,
  randomProductDescription,
  randomReleaseDate,
  randomReviews,
  randomColors,
  mockColor,
  mockProduct,
  seed,
};

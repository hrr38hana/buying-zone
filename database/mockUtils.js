const mockData = require('./mockData');

const { Color } = require('./db');

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

const randomReleaseDate = () => new Date(2019, random(5, 1));

const mockColor = () => {
  const color = {};

  color.name = selectRandomFrom(mockData.colorNames);
  color.finish = selectRandomFrom(mockData.colorFinishes);
  color.rgb = [random(255), random(255), random(255)];
  color.quantityInInventory = {};
  mockData.sizes.forEach((size) => {
    color.quantityInInventory[size] = random(5);
  });

  return new Color(color);
};

const randomColors = () => {
  const colors = [];
  for (let i = 0; i < random(5, 1); i++) {
    colors.push(mockColor());
  }

  return colors;
};

module.exports = {
  random,
  selectRandomFrom,
  randomProductName,
  randomProductDescription,
  randomReleaseDate,
  randomColors,
  mockColor,
};

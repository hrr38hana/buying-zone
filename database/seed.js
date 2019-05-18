const { seed } = require('./mock/utils');

(async () => {
  await seed();
  process.exit();
})();

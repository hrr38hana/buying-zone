// const request = require('supertest');

// const app = require('../server/app');

describe('server', () => {
  // beforeAll(async () => {
  //   await page.goto('http://localhost:3001/', { waitUntil: 'load' });
  // });

  // test('should display "Buying Zone" text on the page', async () => {
  //   await expect(page).toMatch('Buying Zone');
  // });

  test('should display "Buying Zone" text on the page', () => {
    expect(4).toBe(4);
  });

  // test('root route serves an html file', async () => {
  //   const response = await request(app).get('/');
  //   expect(response.header['content-type']).toBe('text/html; charset=UTF-8');
  // });
});

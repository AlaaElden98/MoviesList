import {getConfiguration, getMoviesList} from '../src/api/api';

global.fetch = require('node-fetch');

describe('getConfiguration returns imageBaseUrl', () => {
  it('Make successful request', async () => {
    const res = await getConfiguration(true);
    expect(res).toBe(200);
  });
});

describe('getMoviesList returns movies list', () => {
  it('Make successful request', async () => {
    const res = await getMoviesList(1, true);
    expect(res).toBe(200);
  });
  it('Make request with invalid page number', async () => {
    const res = await getMoviesList(0, true);
    expect(res).toBeGreaterThan(200);
  });
});

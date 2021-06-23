import {getConfiguration, getMoviesList} from '../src/api/api';

global.fetch = require('node-fetch');

describe('getConfiguration returns imageBaseUrl', () => {
  it('Make successful request', async () => {
    const res = await getConfiguration(true);
    expect(res).toBe('https://image.tmdb.org/t/p/');
  });
});

describe('getMoviesList returns movies list', () => {
  it('Make successful request', async () => {
    const res = await getMoviesList(1);
    expect(res).toHaveProperty('page')
    expect(res).toHaveProperty('total_pages')
    expect(res).toHaveProperty('results')
    expect(res).toHaveProperty('total_results')
  });
});

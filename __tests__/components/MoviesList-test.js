import React from 'react';
import renderer from 'react-test-renderer';

import {MoviesList} from '../../src/components/MoviesList';
import {movies} from '../../src/constants/mockData';

const imageBaseUrl = 'https://image.tmdb.org/t/p/';
test('MoviesList renders correctly', () => {
  const tree = renderer
    .create(<MoviesList movies={movies} imageBaseUrl={imageBaseUrl} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

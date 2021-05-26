import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {MoviesList} from '../../src/components/MoviesList';
import {movies} from '../../src/constants/mockData';

test('MoviesList renders correctly', () => {
  const tree = renderer.create(<MoviesList movies={movies} />).toJSON();
  expect(tree).toMatchSnapshot();
});

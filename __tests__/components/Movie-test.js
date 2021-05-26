import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import {Movie} from '../../src/components/Movie';
import {movie} from '../../src/constants/mockData';

test('Movie renders correctly', () => {
  const tree = renderer.create(<Movie movie={movie} />).toJSON();
  expect(tree).toMatchSnapshot();
});

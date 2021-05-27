import React from 'react';
import renderer from 'react-test-renderer';

import {Movie} from '../../src/components/Movie';
import {movie} from '../../src/constants/mockData';

test('it renders movie item', () => {
  const tree = renderer.create(<Movie movie={movie} />).toJSON();
  expect(tree).toMatchSnapshot();
});

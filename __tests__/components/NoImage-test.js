import React from 'react';
import renderer from 'react-test-renderer';

import {NoImage} from '../../src/components/NoImage';

test('it renders an error message', () => {
  const tree = renderer.create(<NoImage />).toJSON();
  expect(tree).toMatchSnapshot();
});

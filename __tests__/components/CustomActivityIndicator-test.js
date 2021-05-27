import React from 'react';
import renderer from 'react-test-renderer';

import {CustomActivityIndicator} from '../../src/components/CustomActivityIndicator';

test('it renders an activiy indicator', () => {
  const tree = renderer.create(<CustomActivityIndicator />).toJSON();
  expect(tree).toMatchSnapshot();
});

/**
 * Copyright (c) 2017-present, Lean Iterations LLC.
 * All rights reserved.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Footer from './index';
import enzymeconf from '../../utils/enzyme';

describe('Footer', () => {
  it('renders correctly', () => {
    const tree = shallow(<Footer />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});

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
import Mobile from './mobile';
import enzymeconf from '../../utils/enzyme';

describe('Navigation - mobile', () => {
  it('renders', () => {
    const onToggleNav = jest.fn();
    const wrapper = shallow(
      <Mobile mobileStyle="" toggleNav={onToggleNav}>
        <div>Test</div>
      </Mobile>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('toggles the nav correctly', () => {
    const onToggleNav = jest.fn();
    const wrapper = shallow(
      <Mobile mobileStyle="" toggleNav={onToggleNav}>
        <div>Test</div>
      </Mobile>
    );

    wrapper.find('div[role="button"]').simulate('click');
    expect(onToggleNav).toHaveBeenCalled();
  });
  it('removes the portal on unmount', () => {
    const onToggleNav = jest.fn();
    const wrapper = shallow(
      <Mobile mobileStyle="" toggleNav={onToggleNav}>
        <div>Test</div>
      </Mobile>
    );

    wrapper.unmount();
  });
});

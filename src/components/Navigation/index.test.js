import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Navigation from './';
import enzymeconf from '../../utils/enzyme';

describe('Navigation', () => {
  it('renders', () => {
    const wrapper = shallow(<Navigation />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders the mobile nav', () => {
    const wrapper = shallow(<Navigation />);
    wrapper.setState({ mobileActive: true });

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('toggles the mobile nav', () => {
    const wrapper = shallow(<Navigation />);

    wrapper.find('div[role="button"]').simulate('click');
    expect(wrapper.state('mobileActive')).toBeTruthy();
  });
});

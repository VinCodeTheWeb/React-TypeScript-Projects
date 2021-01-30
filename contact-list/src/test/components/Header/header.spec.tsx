import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import { Header } from 'components/Header/header.component';

configure({ adapter: new Adapter() });

const setup = (props = {}, state = null) => {
  return shallow(<Header {...props} />)
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test('should render without crashing', () => {
  const wrapper = setup();
  const headerComponent = findByTestAttr(wrapper, 'component-header');
  expect(headerComponent.length).toBe(1);
});

test('should render Header with title = CONTACT LIST', () => {
  const wrapper = setup({ title: 'title'});
  const headerComponent = findByTestAttr(wrapper, 'component-header');
  console.log(headerComponent.props('title').children.toEqual({ children: 'title'}));

});
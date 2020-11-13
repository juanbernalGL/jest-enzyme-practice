/**
 * Test React App Component with jest and Enzyme, using udemy like guide
 * 
 * @version 1.0
 * @author [Juan Jose Bernal Villamarin] (https://github.com/juanbernalGL)
 */
import React from 'react';
import Enzyme, { shallow, ShallowWrapper } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
 * Factory function to create a shallowWrapper for the App Component
 * @function setup
 * @returns { ShallowWrapper }
 */
const setup = () => shallow(<App/>);

const findByTestAttr = (wrapper, val) => (wrapper.find(`[data-test='${val}']`));
test('renders without errors', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
} );

test('renders a button', () => {

});
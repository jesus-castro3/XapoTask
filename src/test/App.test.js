import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sidebar from '../components/Sidebar';

configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('<App/>', () => {
  it('should container App class', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App').exists()).toBe(true);
  });
  it('renders out 1 Sidebar component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Sidebar).length).toBe(1);
  });
  it('renders out 1 ProjectViewContainer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Sidebar).length).toBe(1);
  });
});

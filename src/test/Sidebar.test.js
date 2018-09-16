import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sidebar from '../components/Sidebar';
import ProjectListContainer from '../containers/ProjectListContainer';

configure({ adapter: new Adapter() });

describe('<Sidebar/>', () => {
  it('should containt the .sidebar class', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper.find('.sidebar').exists()).toBe(true);
  });
  it('h1 tag contains conrrect text', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper.find('h1').text()).toBe('Facebook Projects');
  });
  it('should render out 1 ProjectListContainer component', () => {
    const wrapper = shallow(<Sidebar />);
    expect(wrapper.find(ProjectListContainer).length).toBe(1);
  });
});

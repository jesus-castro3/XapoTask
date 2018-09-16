import React from 'react';
import { shallow , configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProjectItem from './ProjectItem';
import ProjectList from './ProjectList';

configure({ adapter: new Adapter() });

describe('<ProjectList />', () => {
    const props = {
        onClick: jest.fn(),
        loadProjectList: jest.fn(),
        projects: [{ name: 'project1', id: 1 }, { name: 'project2', id: 2 }]

    }
    it('ProjectList props to be defined', () => {
        const wrapper = shallow(<ProjectList {...props}/>);
        expect(wrapper.instance().props.projects.length).toBeDefined();
        expect(wrapper.instance().props.onClick).toBeDefined();
        expect(wrapper.instance().props.loadProjectList).toBeDefined();
    });
    it('Project list projects props should be 2', () => {
        const wrapper = shallow(<ProjectList {...props}/>);
        expect(wrapper.instance().props.projects.length).toBe(2);
    });
    it('calls componentDidMount', () => {
        jest.spyOn(ProjectList.prototype, 'componentDidMount');
        shallow(<ProjectList {...props} />);
        expect(ProjectList.prototype.componentDidMount.mock.calls.length).toBe(1);
    });
    it('calls for loadProjectList on componentDidMount', () => {
      const componentDidMount = jest.spyOn(ProjectList.prototype, 'componentDidMount');
      const loadProjectList = jest.spyOn(props, 'loadProjectList');
      expect(loadProjectList).toHaveBeenCalled();
      expect(componentDidMount).toHaveBeenCalled();
    });
    it('renders out 2 ProjectItem components', () => {
        const wrapper = shallow(<ProjectList {...props}/>)
        expect(wrapper.find(ProjectItem).length).toBe(2);
    });
});
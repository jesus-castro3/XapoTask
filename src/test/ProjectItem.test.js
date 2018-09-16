import React from 'react';
import { shallow, configure } from 'enzyme';
import ProjectItem from '../components/ProjectItem';
import Adapter from 'enzyme-adapter-react-16';


configure({ adapter: new Adapter });

describe('<ProjectItem/>', () => {
    const props = {
        project: {
            name: 'project1',
            id: 1
        },
        onClick: jest.fn()
    }
    it('should contain 1 .project-list__item class', () => {
        const wrapper = shallow(<ProjectItem {...props}/>);
        expect(wrapper.find('.project-list__item').length).toBe(1);
    });
    it('should contain rendered text on li', () => {
        const wrapper = shallow(<ProjectItem {...props} />);
        expect(wrapper.find('li').text()).toBe('project1');
    });
    it('should contain received prop onClick', () => {
        const wrapper = shallow(<ProjectItem {...props} />);
        expect(wrapper.props().onClick).toBeDefined();
    });
    it('onClick action', () => {
        const onClick = jest.spyOn(props, 'onClick');
        const wrapper = shallow(<ProjectItem {...props}/>);
        wrapper.simulate('click');
        expect(onClick).toHaveBeenCalled();
    })
});
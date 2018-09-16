import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ContributorsCard from '../components/ContributorsCard';
import ProjectView from '../components/ProjectView';

configure({ adapter: new Adapter() });

describe('<ProjectView/>', () => {
  const props = {
    project: {
      name: 'project1',
      description: 'a description for 1',
      forks_count: 11,
      language: 'C++',
      open_issues_count: 22,
      stargazers_count: 33,
      watchers_count: 44
    },
    contributors: ['first contribution', 'second contribution']
  };

  it('contributors and projects should be defined', () => {
    const wrapper = shallow(<ProjectView {...props} />);
    expect(wrapper.instance().props.project).toBeDefined();
    expect(wrapper.props()).toBeDefined();
    expect(wrapper.instance().props.project).toEqual(props.project);
    expect(wrapper.instance().props.contributors).toEqual(props.contributors);
  });

  it('should render project-view and project-view__detail classes', () => {
    const wrapper = shallow(<ProjectView {...props} />);
    expect(wrapper.find('.project-view').length).toBe(1);
    expect(wrapper.find('.project-view__details').length).toBe(1);
  });

  it('should render project data', () => {
    const wrapper = shallow(<ProjectView {...props} />);
    expect(wrapper.find('.project-view__name').text()).toBe('project1');
    expect(wrapper.find('.project-view__description').text()).toBe('a description for 1');
    expect(wrapper.find('.project-view__fork').text()).toBe('Forks Count: 11');
    expect(wrapper.find('.project-view__language').text()).toBe('Language: C++');
    expect(wrapper.find('.project-view__open-issues').text()).toBe('Open Issues: 22');
    expect(wrapper.find('.project-view__stars').text()).toBe('Stars: 33');
    expect(wrapper.find('.project-view__watchers').text()).toBe('Watchers: 44');
  });
  it('should contain 1 contributor card', () => {
    const wrapper = shallow(<ProjectView {...props} />);
    expect(wrapper.find(ContributorsCard).length).toBe(1);
  });
});

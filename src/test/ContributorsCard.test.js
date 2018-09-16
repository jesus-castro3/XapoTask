import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ContributorsCard from '../components/ContributorsCard';

configure({ adapter: new Adapter() });

describe('<ContributorsCard/>', () => {
  const props = {
    contributors: [
      {
        avatar_url: 'www.fakeurl.com/pic',
        url: 'www.fakeurl.com',
        login: 'anon_user',
        contributors: 23,
        repos_url: 'www.fakeurl.com/repos'
      },
      {
        avatar_url: 'www.fakeurl.com/pic2',
        url: 'www.fakeurl.com',
        login: 'anon_user2',
        contributors: 25,
        repos_url: 'www.fakeurl.com/repos2'
      }
    ]
  };

  it('should receive contributors prop', () => {
    const wrapper = shallow(<ContributorsCard {...props} />);
    expect(wrapper.instance().props.contributors).toBeDefined();
    expect(wrapper.instance().props.contributors.length).toBe(2);
  });

  it('project-card should have 2 classes', () => {
    const wrapper = shallow(<ContributorsCard {...props} />);
    expect(wrapper.find('.project-card').length).toBe(2);
  });

  it('should render avatar_url src', () => {
    const wrapper = shallow(<ContributorsCard {...props} />);
    expect(
      wrapper.find('.project-card__avatar img').map((node, idx) => {
        expect(node.props().src).toBe(props.contributors[idx].avatar_url);
      })
    );
  });

  it('should render user href', () => {
    const wrapper = shallow(<ContributorsCard {...props} />);
    expect(
      wrapper.find('.project-card__url').map((node, idx) => {
        expect(node.props().href).toBe(props.contributors[idx].url);
      })
    );
  });

  it('should render repos href', () => {
    const wrapper = shallow(<ContributorsCard {...props} />);
    expect(
      wrapper.find('.project-card_repos-url').map((node, idx) => {
        expect(node.props().href).toBe(props.contributors[idx].repos_url);
      })
    );
  });
});

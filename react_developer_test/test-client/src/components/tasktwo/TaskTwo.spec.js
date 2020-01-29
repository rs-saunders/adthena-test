import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import TaskTwo from './TaskTwo';

describe('TaskTwo', () => {
  it('renders a Loading... message', async (done) => {
    const mock = new MockAdapter(axios);
    mock.onGet('https://jsonplaceholder.typicode.com/todos?userId=1').reply(200, []);

    let wrapper;

    await act(async () => {
      wrapper = mount(<TaskTwo />);
    });

    expect(wrapper).toMatchSnapshot();
    done();
  });

  it('renders a todo list', async (done) => {
    const mock = new MockAdapter(axios);
    mock.onGet('https://jsonplaceholder.typicode.com/todos?userId=1').reply(200, [
      {
        userId: 1,
        id: 21,
        title: 'suscipit repellat esse quibusdam voluptatem incidunt',
        completed: false,
      },
      {
        userId: 1,
        id: 22,
        title: 'distinctio vitae autem nihil ut molestias quo',
        completed: true
      },
    ]);

    let wrapper;

    await act(async () => {
      wrapper = mount(<TaskTwo />);
    });

    wrapper.update();
    expect(wrapper).toMatchSnapshot();
    done();
  });
});

import React from 'react';
import { render, cleanup } from '@testing-library/react';
import HackerNewsHome from '../pages';

afterEach(cleanup);

it('matches snapshot', () => {
  const { asFragment } = render(<HackerNewsHome />);
  expect(asFragment()).toMatchSnapshot();
});

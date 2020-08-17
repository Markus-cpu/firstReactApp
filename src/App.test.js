import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import {Provider} from "react-redux";
import store from "./Redux/redux-store";
import {BrowserRouter} from "react-router-dom";

test('renders learn react link', () => {
  const { getByText } = render(<BrowserRouter>
    <Provider store={store}>
      <App store={store}/>
    </Provider>
  </BrowserRouter>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
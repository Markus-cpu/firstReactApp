import React from 'react';
import ReactDOM from 'react-dom'
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

test('render app without crashing', ()=> {
  const div = document.createElement('div')
  ReactDOM.render(<App/>, div)
  ReactDOM.unmountComponentAtNode(div)//очищаем тег, после того что отрисовывалось там при тесте
})
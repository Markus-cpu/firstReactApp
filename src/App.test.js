import React from 'react';
import ReactDOM from 'react-dom'
import MarkusCpuApp from "./App";

test('render app without crashing', ()=> {
  const div = document.createElement('div')
  ReactDOM.render(<MarkusCpuApp />, div)
  ReactDOM.unmountComponentAtNode(div)//очищаем тег, после того что отрисовывалось там при тесте
})
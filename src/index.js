import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const items = [
  {
    name: 'milfont'
  },
  {
    name: 'marcelo'
  },
  {
    name: 'wagner'
  },
]

ReactDOM.render(
  <App items={items} />,
  document.getElementById('root')
);

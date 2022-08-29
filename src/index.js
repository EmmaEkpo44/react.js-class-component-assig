import { render } from '@testing-library/react';
import React from 'react'
import  ReactDOM  from 'react-dom/client';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import FirstClassComponent from './Pages/FirstClassComponent';

const App = () => {
  return (
    <FirstClassComponent/>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);

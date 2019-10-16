import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

jest.mock("react-router-ga", () => "stub");
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

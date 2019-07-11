import React from 'react';
import ReactDOM from 'react-dom';
import EntryRoute from 'components';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EntryRoute />, div);
  ReactDOM.unmountComponentAtNode(div);
});

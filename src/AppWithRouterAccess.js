import React from 'react';
import { BrowserRouter as Router, Route, useHistory } from 'react-router-dom';


const AppWithRouterAccess = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouterAccesss;
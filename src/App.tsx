import React from 'react';
import { Switch, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact={true} path="/">
        <div>Hello Jupiter!</div>
      </Route>
      <Route path="*">
        <div>404</div>
      </Route>
    </Switch>
  );
};

export default App;

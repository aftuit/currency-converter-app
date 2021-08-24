import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from './redux/util/routes';
import Navbar from './components/Navbar';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        {
          routes.map(({ path, component }) => {
            return (
              <Route
                path={path}
                exact={true}
                key={path}
                component={component} />
            )
          })
        }
      </Switch>
    </BrowserRouter>
  );
}

export default App;

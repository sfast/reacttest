import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { Switch, Route  } from 'react-router-dom';
import indexRoutes from './routes/indexRoutes'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import typedefs from './typedefs';
import clientResolvers from './resolvers';
import * as serviceWorker from './serviceWorker';

const client = new ApolloClient({
  clientState: {
      typedefs,
      ...clientResolvers,
      cache: new InMemoryCache()
  }
});

const app = (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        {indexRoutes.map(route => <Route key={route.path} path={route.path} component={route.component} />)}
      </Switch> 
    </Router>
  </ApolloProvider>
)

ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

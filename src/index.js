import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import indexRoutes from './routes/indexRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import typeDefs from './graphQL/typedefs';
import { clientResolvers as resolvers } from './graphQL/resolvers';
import './index.scss';

const cache = new InMemoryCache(); 

const client = new ApolloClient({
  clientState: {
    resolvers,
    typeDefs
  },
  cache
});

const app = (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        {indexRoutes.map(route => <Route key={route.path} path={route.path} component={route.component} />)}
      </Switch> 
    </Router>
  </ApolloProvider>
);

ReactDOM.render(app, document.getElementById('root'));

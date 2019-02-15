import React from 'react';
import ReactDOM from 'react-dom';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
// import { withClientState } from 'apollo-link-state';
import { ApolloProvider } from 'react-apollo';
import { Switch, Route  } from 'react-router-dom';
// import { HttpLink } from 'apollo-link-http';
import indexRoutes from './routes/indexRoutes'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.scss';
import typeDefs from './graphQL/typedefs';
import { clientResolvers as resolvers } from './graphQL/resolvers';
// import courses from './graphQL/api/courses.json';
// import _newcourses from './graphQL/api/newcourses.json'; 

const cache = new InMemoryCache(); 


const client = new ApolloClient({
  clientState: {
    resolvers,
    typeDefs,
    defaults: {
      // courses
    }
  },
  cache,
  // cache,
});

// cache.writeData({
//   data:{
//     courses 
//   }
// });

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


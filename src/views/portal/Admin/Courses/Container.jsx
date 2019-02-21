import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Container = (props) => {
    return(
      <Switch>
        {props.paths.map((prop, key) => {
          return  <Route exact path={prop.path} render={(props) => <prop.component {...props}/>} key={key}/>
        })}
      </Switch>
    );
};

export default Container;

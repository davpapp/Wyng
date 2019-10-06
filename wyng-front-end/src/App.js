import React from 'react';
import Authentication from './Pages/Authentication'
import Home from './Pages/Home'
import Chat from './Pages/Chat'
import Profile from './Pages/Profile'

import { Switch, Route } from 'react-router-dom'

React.createClass = require('create-react-class');


const App = React.createClass({

  propTypes: {

  },

  getDefaultProps() {
    return {

    };
  },

  render() {
    return (
      <Switch>
        <Route exact path='/' component={Authentication} />
        <Route path='/home' component={Home} />
        <Route path='/chat' component={Chat} />
        <Route path='/profile' component={Profile} />
      </Switch>
    );
  }
})

export default App;

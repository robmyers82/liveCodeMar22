import React, { Component } from 'react'
import { Router, Route, Link, IndexRoute, hashHistory, HashRouter } from 'react-router-dom'
import App from './App';
import Categories from './components/Categories';
import CategoryForm from './components/CategoryForm';

class Routes extends Component {
  render () {
    return (
      <HashRouter>
        <div>
          <Route path='/' component={App} />
          <Route path='/addCategory' type='add' component={CategoryForm} />
          <Route path='/editCategory' type='edit' component={CategoryForm} />
        </div>
      </HashRouter>
    )
  }
}

export default Routes;
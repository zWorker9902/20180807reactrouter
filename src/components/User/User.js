import React, {Component} from 'react';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import List from './List';
import Add from './Add';
import Detail from './Detail';

export default class User extends Component {
  render () {
    return (
      <div className="row">
        <div className="col-md-2">
          <ul className="nav nav-stacked">
            <li><Link to="/user/list">用户列表</Link></li>
            <li><Link to="/user/add">新增用户</Link></li>
          </ul>
        </div>
        <div className="col-md-10">
          <Switch>
            <Route path="/user/list" component={List} />
            <Route path="/user/add" component={Add} />
            <Route path="/user/detail/:id" component={Detail} />
          </Switch>
        </div>
      </div>
    )
  }
}
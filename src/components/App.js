import React from 'react';
import {
  BrowserRouter as Router, //容器
  Route, // 单条路由
  Link,
  Switch,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css';

import Home from './Home'; // 主页
import User from './User/User'; // 用户
import Profile from './Profile'; // 个人设置
import ProtectedRoute from './ProtectedRoute'; // 受保护的路由
import Login from './Login';
import MenuLink from './MenuLink';
import NotFound from './NotFound';

export default (
  <Router>
    <div>
      <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <div className="navbar-brand">
              用户管理系统
            </div>
          </div>
          <ul className="nav navbar-nav">
            <MenuLink label="首页" to="/home" />
            <MenuLink label="用户管理" to="/user" />
            <MenuLink label="个人设置" to="/profile" />
          </ul>
        </div>
      </nav>

      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Switch>
              {/*<Route path="/" exact render={props=><div>首页</div>} />*/}
              {/*<Route path="/:name" exact render={props=><div>{props.match.params.name}</div>} />*/}

              <Route path="/home" component={Home} />
              <Route path="/user" component={User} />
              <Route path="/login" component={Login} />

              <ProtectedRoute path="/profile" component={Profile}></ProtectedRoute>
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    </div>
  </Router>
)
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
// 当组件不需要状态的时候，可以用函数声明
// 当组件必须需要状态的时候，必须使用类声明

// 受保护的路由：登录时才能正常访问
export default function({ component: Component, ...rest }){

  return <Route {...rest} render={(props) =>
    localStorage.getItem('login')?<Component/>:<Redirect to={{
      pathname: '/login',
      state: {
        from: props.location.pathname
      }
    }}/>
  }/>

}
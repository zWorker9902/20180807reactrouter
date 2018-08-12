// 非受控组件
// component 对应一个组件，当URL路径匹配时渲染
// render 对应一个匿名组件函数，当URL路径匹配时渲染

// 当选择路由是高亮显示
import React from 'react';
import { Route, Link } from 'react-router-dom';

export default function({to, label}) {
  return (
    <Route path={to} children={({match})=>{
      return <li className={match?'active':''}><Link to={to}>{label}</Link></li>
    }} />
  )
}
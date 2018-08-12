import React, {Component} from 'react';
// 弹出框组件
import  { Prompt }  from 'react-router-dom';

export default class Add extends Component {
  constructor() {
    super();

    this.state = {
      blocking: false,
    }
  }

  handleSubmit = () => {
    let name = this.name.value;
    let userStr = localStorage.getItem('users');
    let users = userStr?JSON.parse(userStr):[];
    users.push({id: Date.now(),name});
    localStorage.setItem('users', JSON.stringify(users));

    // 先配置状态，在路由跳转
    this.setState({
      blocking: false
    }, () => {
      this.props.history.push('/user/list');
    })
  }

  handleChange = (e) => {
    let value = e.target.value;
    this.setState({
      blocking: value && value.length > 0
    })
  }

  render () {
    return (
      <div>
        <Prompt
          when={this.state.blocking}
          message={()=>`你确定要跳转到${this.props.location.pathname}吗`}
        />
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">姓名</label>
            <input type="text" onChange={this.handleChange} className="form-control" ref={(ref) => this.name = ref}/>
          </div>
          <div className="from-group">
            <input type="submit" className="btn btn-primary"/>
          </div>
        </form>
      </div>
    )
  }
}
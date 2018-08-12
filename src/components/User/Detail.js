import React, {Component} from 'react';

export default class Detail extends Component {
  constructor() {
    super();

    this.state = {
      user: null

    }
  }

  componentWillMount() {
    let id = this.props.match.params.id;
    let userStr = localStorage.getItem('users');
    let users = userStr? JSON.parse(userStr): [];
    let user = users.find((user)=> user.id == id);
    this.setState({user})
  }

  render() {
    return (
      <table className="table table-responsive">
        <thead>
          <tr>
            <th>ID</th>
            <th>姓名</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{this.state.user.id}</td>
            <td>{this.state.user.name}</td>
          </tr>
        </tbody>
      </table>
    )
  }
}
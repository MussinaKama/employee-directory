import React, { Component } from "react";
import API from "../utils/API";

class Users extends Component {
  state = {
    users: [{}],
    sortColumn: { path: 'title', order: 'asc' }
  };

  componentDidMount() {
    API.getUsers()
      .then(res =>
        this.setState({
          users: res.data.results
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>State</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {this.state.users[0] !== undefined && this.state.users[0].name !== undefined ? (
            this.state.users.map(({ picture, name, location, cell, email }) => {
              return (
                <tr>
                  <td>
                    <img
                      src={picture.medium}
                      alt={name.first}
                    />
                  </td>
                  <td>{name.first} {name.last}</td>
                  <td>{location.state}</td>
                  <td>{email}</td>
                  <td>{cell}</td>
                </tr>
              )
            })
          ) : (
              <></>
            )}
        </tbody>
      </table>
    );
  }
}

export default Users;

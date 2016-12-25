const React = require('react');

const Component = React.createClass({
  handleClick: function() {
    alert('Login ' + this.props.foo);
  },
  render: function() {

    return (
      <div>
        <h1>Login: ({this.props.foo})</h1>
        <button onClick={this.handleClick}>Event Login</button>
        <hr />
        <a href="/">Go to home</a>
      </div>
    );
  }
});

module.exports = Component;

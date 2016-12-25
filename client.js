const React = require('react');
const { match, Router, Route, Link, browserHistory } = require('react-router');
const { render } = require('react-dom');
const App = require('./components/app');
const Login = require('./components/login');
const serverState = window.state;

//pass server state as props
function createElement(Component, props) {
  return <Component {...props} {...serverState}/>
}

render((
  <Router history={browserHistory} createElement={createElement}>
    <Route path='/' components={App}/>
    <Route path='/login' components={Login}/>
  </Router>
), document.getElementById('root'));

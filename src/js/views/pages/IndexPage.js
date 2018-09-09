const React = require('react');
const LoginSection = require('./components/LoginSection');
const SecureSection = require('./components/SecureSection');

class IndexPage extends React.Component {

  render() {
    return (
      <React.Fragment>
        <LoginSection/>
        <SecureSection/>
      </React.Fragment>
    );
  }

}

module.exports = IndexPage;
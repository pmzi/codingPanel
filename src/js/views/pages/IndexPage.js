const React = require('react');
const LoginSection = require('./components/LoginSection');

class IndexPage extends React.Component{

    render(){
        return (<React.Fragment>
            <LoginSection />
        </React.Fragment>
            );
    }

}

module.exports = IndexPage;
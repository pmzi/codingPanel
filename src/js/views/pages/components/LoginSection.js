const React = require('react');

const Form = require('./Form');
const Input = require('./Input');
const Button = require('./Button');

class LoginSection extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false
    }

  }

  login() {
    this.setState({loggedIn: true});
    setTimeout(() => {
      this.refs.loginSection.classList.add('none');
    }, 400)
  }

  render() {
    return (
      <div
        ref='loginSection'
        className={`loginSection ${this.state.loggedIn ? 'loginSection--fadeOut' : ''}`}>
        <div className='loginSection__box'>
          <div className='loginSection__header'>
            <h1>
              Login
            </h1>
          </div>
          <div className='loginSection__content'>
            <div className='loginSection__codeSymbolStart'>
              &lt;
            </div>
            <Form
              submitCB={this.login.bind(this)}
              className='loginSection__form'>
              <Input placeholder='Username' required={true}/>
              <Input placeholder='Password' required={true} type='password'/>
              <div className='loginSection__submitSection'>
                <Button isSubmit={true} value="Sign in"/>
              </div>
            </Form>
            <div className='loginSection__codeSymbolEnd'>
              /&gt;
            </div>
          </div>
        </div>
      </div>
    );
  }

}

module.exports = LoginSection;
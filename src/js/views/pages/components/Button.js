const React = require('react');

class Button extends React.Component{

    getButton(){
        if(this.props.isSubmit){
            return [<input className='button button--submit' type='submit' value={this.props.value} />]
        }else{
            return [<button className='button'>{this.props.value}</button>]
        }
    }

    render(){
        return (
            <React.Fragment>
                {this.getButton()}
            </React.Fragment>
        );
    }

}

module.exports = Button;
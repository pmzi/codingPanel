const React = require('react');

class Input extends React.Component{

    render(){
        return (
            <div className='input'>
                <input type={this.props.type ? this.props.type : 'text'} className='input__input' placeholder={this.props.placeholder} data-required={this.props.required ? true : false} />
                <div className='input__underLineWrapper'>
                    <div className='input__blurUnderLine' />
                    <div className='input__focusUnderLine' />
                </div>
            </div>
        );
    }

}

module.exports = Input;
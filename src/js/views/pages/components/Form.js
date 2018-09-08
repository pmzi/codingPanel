const React = require('react');

class Form extends React.Component{

    componentDidMount(){
        this.refs.form.onsubmit = (e)=>{
            e.preventDefault();

            let inputs = e.target;
            
            for(let input of inputs){
                if(input.type != 'submit'){
                    this.validateInput(input);
                }
            }

            let firstErroredInput = this.refs.form.querySelector('.input--error input')
            
            if(firstErroredInput){firstErroredInput.focus();}

            if(!firstErroredInput && this.props.submitCB){
                this.props.submitCB(e.target);
            }
        }

        this.refs.form.querySelectorAll('input:not([type=submit])').forEach((input)=>{
            input.oninput = ()=>{
                this.validateInput(input)
            }
        });
    }

    validateInput(input){
        if(input.getAttribute('data-required') == 'true'){
            if(input.value.trim() == ''){
                input.parentElement.classList.add('input--error');
                return;
            }
        }

        // no error

        if(input.parentElement.classList.contains('input--error')){
            input.parentElement.classList.remove('input--error');
        }
    }

    render(){
        return (
            <form ref='form' className={this.props.className}>
                {this.props.children}
            </form>
        );
    }

}

module.exports = Form;
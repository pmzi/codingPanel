const React = require('react');

class SecureArea extends React.Component{

    constructor(props){
        super(props);

        /*
            Status -1 -> NotSecured
            Status 0 -> BeingSecured
            Status 1 -> Secured
        */

        this.state = {
            status: 0
        }

        let statusClass = this.statusClass;
        let statusText = this.statusText;

        this.state = {
            status: 0,
            class: statusClass,
            text: statusText,
            show: false
        }
        
    }

    get statusClass(){
        switch(this.state.status){
            case -1:
                return 'secureArea--notSecure';
            case 0:
                return 'secureArea--beingSecured';
            case 1:
                return 'secureArea--secured';
        }
    }

    get statusText(){
        switch(this.state.status){
            case -1:
                return 'Not Secure!';
            case 1:
                return 'Secured';
            default: 
                return 'Securing...';
        }
    }

    render(){
        return  (
            <div className={`secureArea ${this.state.class} ${this.state.show ? '' : 'secureArea--hidden'}`}>
                <div className='secureArea__text'>
                    {this.state.text}
                </div>
                <div className='secureArea__wave'>

                </div>
                <div className='secureArea__wave'>

                </div>
                <div className='secureArea__wave'>

                </div>
            </div>
        );
    }

}

module.exports = SecureArea;
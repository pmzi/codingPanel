const React = require('react');

const SecureArea = require('./SecureArea');

class SecureSection extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            show: false
        }

    }

    componentDidUpdate(){
        if(this.state.show){
            this.refs.secureSection.classList.remove('none');
            setTimeout(()=>{
                this.refs.secureSection.classList.remove('secureSection--hidden');
            },100)
        }else{
            this.refs.secureSection.classList.add('secureSection--hidden');
            setTimeout(()=>{
                this.refs.secureSection.classList.add('none');
            },500)
        }
    }

    render(){
        return  (
            <div ref='secureSection' className='secureSection secureSection--hidden none'>
                <div className='secureSection__box'>
                    <SecureArea />
                </div>
            </div>
        );
    }

}

module.exports = SecureSection;
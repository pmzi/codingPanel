const React = require('react');

const SecureArea = require('./SecureArea');

class SecureSection extends React.Component{

    render(){
        return  (
            <div className='secureSection'>
                <div className='secureSection__box'>
                    <SecureArea />
                </div>
            </div>
        );
    }

}

module.exports = SecureSection;
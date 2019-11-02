import React from 'react'; 

class Contact extends React.Component {
    render () {
        return (
            <div className='mainContainer'>
                <div className='rowCentering'>
                    <div className='contentCentering pictureBackground'>
                        <h1>Contact</h1>
                        <textarea name="contactMe" id="" cols="30" rows="100"></textarea>
                        <br />
                        <form action="" method=''>
                            <input type="submit" value='Send Us An Email'/>
                        </form>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Contact;
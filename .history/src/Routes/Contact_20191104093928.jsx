import React from 'react'; 

class Contact extends React.Component {
    render () {
        return (
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <div className='mainContainer'>
                <div className='rowCentering'>
                    <div className='contentCentering pictureBackground'>
                        <h1>Contact</h1>
                        <textarea name="contactMe" id="" cols="30" rows="100"></textarea>
                        <br />
                        <form action="/contact" method='GET'>
                            <input type="submit" value='Send Us An Email' className='submitButton'/>
                        </form>
                    </div>
                </div> 
            </div>
            </meta>
        )
    }
}

export default Contact;
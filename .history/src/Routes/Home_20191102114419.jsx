import React from 'react'; 
import '../styles/Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

class Home extends React.Component {
    render () {
        return (
            <div className='homePageMainDiv'>
                <Container>
                    <Row>
                        <Col>
                            <h1>Welcome to Amazon Delivery Service!</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Short Description of what we do!</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Nifty Photos describing efficiency!</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Scroll bar with auto nav buttons</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <h1>Welcome to Amazon Delivery Service!</h1>
                        </Col>
                    </Row>
                </Container>  
            </div>
        )
    }
}

export default Home;
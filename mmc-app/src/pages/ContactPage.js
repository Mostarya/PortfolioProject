import { Container, Col, Row, Card, CardHeader, CardBody, Button } from "reactstrap";
import CommentsList from "../features/Comments/CommentsList";
import CommentForm from "../features/Comments/CommentForm";



const ContactPage = () => {
    return (
        <>
            <Container>
                <Row className="row-content text-center">
                    <Col id="book">
                        <h2>We'd love to hear from you!</h2>
                        <p>Send us comments, feedback, event proposals, etc!</p>
                    </Col>
                </Row>
            </Container>
           
            <Container className="text-nowrap row-content text-center" id="contactCardDeck">
                <Card xs="12" id="contactCard">
                    <CardHeader>
                        <h3>Contact Us</h3>
                    </CardHeader>
                    
                    <CardBody className="text-secondary">
                          
                        <Col> 
                            <Row>
                                <address id="address"> 
                                    <a href="https://www.googlemaps.com/" target="_blank">
                                        1234 Lovely Ln. <br/>
                                        Austin, TX 78746
                                    </a>
                                </address>
                            </Row>
                            <a className="btn btn-lg btn-link" href="tel:+15125551234"><i className="fa fa-phone"></i></a>
                            
                            <a className="btn btn-lg btn-link" href="mailto:mostaryasmaidcafe.co"><i className="fa fa-envelope-o"></i></a>
                            
                        </Col>
                         
                        
                    </CardBody>
                </Card>
            </Container>
            {/* <Container className="text-nowrap row-content text-center" id="contactCardDeck">
                <Card xs="12" id="contactCard">
                    <CardHeader>
                        <h3>Comments</h3>
                    </CardHeader>
                    
                    <CardBody className="text-secondary" >
                        <CommentForm  />
                    </CardBody>
                </Card>
            </Container> */}
        </>
    )
};

export default ContactPage;

// Possible adding comment capabilities in the future
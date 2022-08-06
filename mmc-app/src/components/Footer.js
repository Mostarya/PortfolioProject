import { Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="site-footer">
        <Container>
            <Row>
                <Col xs={{ size: 4, offset: 1 }} sm='2'>
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li>
                            <Link to="/" className="text-secondary">Menu</Link>
                        </li>
                        <li>
                            <Link to="/about" className="text-secondary">About</Link>
                        </li>
                        <li>
                            <Link to="/reservation" className="text-secondary">Reservations</Link>
                        </li>
                        <li>
                            <Link to="/careers" className="text-secondary">Careers</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-secondary">Contact</Link>
                        </li>
                    </ul>
                </Col>
                <Col xs='6' sm='5' className='text-center'> 
                    <h5>Social</h5>
                    <a className="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i className="fa fa-instagram"></i></a>{' '}
                    <a className="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i className="fa fa-facebook"></i></a>{' '}
                    <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>{' '}
                    <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>{' '}
                </Col>
                <Col sm='4' className='text-center'>
                    <a role="button" className="btn btn-link text-secondary" href="tel:+15125551234"><i className="fa fa-phone"></i> 1-512-555-1234</a><br />
                    <a role="button" className="btn btn-link text-secondary" href="mailto:mostaryasmaidcafe.co"><i className="fa fa-envelope-o"></i> mostaryasmaidcafe.co</a>
                </Col>
            </Row>
        </Container>
    </footer>
    )
}

export default Footer;
import { Container, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="site-footer">
        <Container>
            <Row>
                <Col xs={{ size: 4, offset: 1 }} sm='2'>
                    <h5>Links</h5>
                    <ul class="list-unstyled">
                        <li>
                            <Link to="/" class="text-secondary">Menu</Link>
                        </li>
                        <li>
                            <Link href="/about" class="text-secondary">About</Link>
                        </li>
                        <li>
                            <Link href="/reservation" class="text-secondary">Reservations</Link>
                        </li>
                        <li>
                            <Link href="/careers" class="text-secondary">Careers</Link>
                        </li>
                        <li>
                            <Link href="/contact" class="text-secondary">Contact</Link>
                        </li>
                    </ul>
                </Col>
                <Col xs='6' sm='5' className='text-center'>
                    <h5>Social</h5>
                    <a class="btn btn-social-icon btn-instagram" href="http://instagram.com/"><i class="fa fa-instagram"></i></a>
                    <a class="btn btn-social-icon btn-facebook" href="http://facebook.com/"><i class="fa fa-facebook"></i></a>
                    <a class="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i class="fa fa-twitter"></i></a>
                    <a class="btn btn-social-icon btn-google" href="http://youtube.com/"><i class="fa fa-youtube"></i></a>
                </Col>
                <Col sm='4' className='text-center'>
                    <a role="button" class="btn btn-link text-secondary" href="tel:+15125551234"><i class="fa fa-phone"></i> 1-512-555-1234</a><br />
                    <a role="button" class="btn btn-link text-secondary" href="mailto:mostaryasmaidcafe.co"><i class="fa fa-envelope-o"></i> mostaryasmaidcafe.co</a>
                </Col>
            </Row>
        </Container>
    </footer>
    )
}

export default Footer;
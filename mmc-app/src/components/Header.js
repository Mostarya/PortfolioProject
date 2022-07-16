import {Col, Row, Container} from 'reactstrap';
import SiteNav from './SiteNav';

const Header = () => {
    return (
        <>
        <header className="jumbotron jumbotron-fluid">
            <Container>
                <Row>
                    <Col>
                        <h1>Mostarya's Maid Cafe</h1>
                    </Col>
                </Row>
            </Container>
        </header>
        <SiteNav/>
        </>
    )
}

export default Header;
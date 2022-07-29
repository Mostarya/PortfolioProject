import { Container, Col, Row, CardDeck, Card, CardBody } from "reactstrap";
import DisplayList from "../features/display/DisplayList";
import MenuCard from "../features/Menu/MenuCard";
import MenuList from "../features/Menu/MenuList";


const MenuPage = () => {
    return (
        <>
            <Row className="row-content text-center">
                <Col id="menu">
                    <h2>Menu</h2>
                </Col>
            </Row>
        
            <Container id="menuCard">
                <Row className="row-content align-items-center">
                    <Col sm="4" md="3" order="last" className="order-sm-last">
                        <h2 className="text-sm-right">Meals</h2>
                    </Col>
                    <Col>
                        <CardDeck className="align-self-center">
                            <DisplayList />
                        </CardDeck>        
                    </Col>
                </Row>

                <Row className="row-content align-items-center">
                    <Col sm="4" md="3">
                        <h2>Sweets</h2>
                    </Col>
                    <CardDeck className="col">
                        <DisplayList />
                    </CardDeck>
                </Row>

                <Row className="row row-content align-items-center">
                    <div className="col-sm-4 order-sm-last col-md-3">
                        <h2 className="text-sm-right">Drinks</h2>
                    </div>
                    <CardDeck className="col">
                        <DisplayList />
                    </CardDeck>
                </Row>
            </Container>
        </>
    );
};

export default MenuPage;
import {Container, Col, Row} from 'reactstrap';
import MenuCard from "./MenuCard";
import { MenuItems } from './MenuItems';

const MenuList = () => {
    const meals = MenuItems.filter(item => item.type === 'meal')
    const sweets = MenuItems.filter(item => item.type === 'sweet')
    const drinks = MenuItems.filter(item => item.type === 'drink')

    return (
        <>
            <Container>
                <Row className="row row-content text-center">
                    <Col id="menu">
                        <h2>Menu</h2>
                    </Col>
                </Row>
            </Container>
            <Row className='row-content ms-auto align-items-center'>
                <Col>
                    <Row>
                        {meals.map(item => {
                            return (
                                <Col key={item.id}>
                                    <MenuCard item={item}/>
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
                <Col sm='4' md='2' className='order-sm-last'>
                    <h2 className="text-sm-center">Meals</h2>
                </Col>
            </Row>
            <Row className='row-content ms-auto align-items-center'>
                <Col sm='4' md='3' className='order-sm-first'>
                    <h2 className="text-sm-center">Sweets</h2>
                </Col>
                <Col className='card-deck'>
                    <Row>
                        {sweets.map(item => {
                            return (
                                <Col key={item.id}>
                                    <MenuCard item={item}/>
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
            </Row>
            <Row className='row-content ms-auto align-items-center'>
                <Col>
                    <Row>
                        {drinks.map(item => {
                            return (
                                <Col key={item.id}>
                                    <MenuCard item={item}/>
                                </Col>
                            );
                        })}
                    </Row>
                </Col>
                <Col sm='4' md='2' className='order-sm-last'>
                    <h2 className="text-sm-center">Drinks</h2>
                </Col>
            </Row>
        </>
    )
}

export default MenuList;
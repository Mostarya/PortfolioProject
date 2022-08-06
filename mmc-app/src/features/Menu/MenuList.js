import {Col, Row} from 'reactstrap';
import MenuCard from "./MenuCard";
import { MenuItems } from './MenuItems';

const MenuList = () => {
    const meals = MenuItems.filter(item => item.type === 'meal')
    const sweets = MenuItems.filter(item => item.type === 'sweet')
    const drinks = MenuItems.filter(item => item.type === 'drink')

    return (
        <>
            <Row className='ms-auto'>
                {meals.map(item => {
                    return (
                        <Col md='5' key={item.id}>
                            <MenuCard item={item}/>
                        </Col>
                    );
                })}
                <Col>
                    <h2 className="text-sm-right">Meals</h2>
                </Col>
            </Row>
            <Row className='ms-auto'>
                <Col>
                    <h2 className="text-sm-right">Sweets</h2>
                </Col>
                {sweets.map(item => {
                    return (
                        <Col md='5' key={item.id}>
                            <MenuCard item={item}/>
                        </Col>
                    );
                })}
                
            </Row>
            <Row className='ms-auto'>
                {drinks.map(item => {
                    return (
                        <Col md='5' key={item.id}>
                            <MenuCard item={item}/>
                        </Col>
                    );
                })}
                <Col>
                    <h2 className="text-sm-right">Drinks</h2>
                </Col>
            </Row>
        </>
    )
}

export default MenuList;
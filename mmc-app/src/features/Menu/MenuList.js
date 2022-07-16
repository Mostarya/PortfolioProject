import {Col, Row} from 'reactstrap';
import { MenuItems } from './MenuItems';
import MenuCard from "./MenuCard";

const MenuList = () => {
    return (
        <>
        <Row>
            {MenuItems.map(item => {
                return (
                    <Col md='5' key={item.id}>
                        <MenuCard menuItem={item}/>
                    </Col>
                );
            })}
        </Row>
        </>
    )
}

export default MenuList;
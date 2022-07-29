import {Col, Row} from 'reactstrap';
import MenuCard from "./MenuCard";
import { selectAllItems } from './menuSlice';

const MenuList = () => {
    const items = selectAllItems();
    
    return (
        <Row className='ms-auto'>
            {items.map(item => {
                return (
                    <Col md='5' key={item.type}>
                        <MenuCard item={item}/>
                    </Col>
                );
            })}
        </Row>
    )
}

export default MenuList;
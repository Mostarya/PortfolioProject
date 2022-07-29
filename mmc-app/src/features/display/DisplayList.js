import { Col, Row } from 'reactstrap';
import MenuCard from '../Menu/MenuCard';
import { MenuByType } from '../Menu/menuSlice';

const DisplayList = () => {
    const items = [MenuByType()];

    return (
        <Row>
            {items.map((item, type) => {
                return (
                    item && ( //Conditional rendering using && operator
                    <Col md className='m-1' key={type}>
                        <MenuCard item={item} />
                    </Col>
                    )
                );
            })}
        </Row>
    );
};

export default DisplayList;
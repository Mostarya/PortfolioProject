import { Col, Row } from 'reactstrap';
import MaidCard from './MaidCard';
import { MaidStyles } from './MaidStyles';

const MaidStylesList = () => {
    return (
        <>
            <Row className='ms-auto row-content'>
                {MaidStyles.map((maid) => {
                    return (
                        <Col key={maid.id}>
                            <MaidCard maid={maid} />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};

export default MaidStylesList;
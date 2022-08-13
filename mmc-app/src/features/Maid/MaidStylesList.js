import { Col, Row } from 'reactstrap';
import MaidCard from './MaidCard';
import { MaidStyles } from './MaidStyles';

const MaidStylesList = ({setRadioValue}) => {
    return (
        <>
            <Row className='ms-auto row-content'>
                {MaidStyles.map((maid) => {
                    return (
                        <Col key={maid.id}>
                            <MaidCard maid={maid} setRadioValue={ setRadioValue } />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};

export default MaidStylesList;
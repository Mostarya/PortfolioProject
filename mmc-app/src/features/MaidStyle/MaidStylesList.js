import { Col, Row } from 'reactstrap';
import MaidCard from './MaidCard';
import { selectAllStyles } from './MaidSlice';

const MaidStylesList = () => {
    const maidStyles = selectAllStyles();
    return (
        <Row className='ms-auto'>
            {maidStyles.map((maidStyle) => {
                return (
                    <Col md='5' className='m-4' key={maidStyle.id}>
                        <MaidCard maidStyle={maidStyle} />
                    </Col>
                );
            })}
        </Row>
    );
};

export default MaidStylesList;
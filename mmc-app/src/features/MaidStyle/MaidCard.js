import {Card, CardBody, CardImg} from 'reactstrap';
import { Link } from 'react-router-dom';

export const MaidCard = ({ maidStyle }) => {
    const { id, image, style, description } = maidStyle; 

    return (
        <Link to={`${id}`} className="align-self-center col-4 text-center"  id="maidCard">
            <Card>
                <CardBody className="text-center">
                    <h3>{style}</h3>
                </CardBody>
                <CardImg
                    src={image}
                    alt={description}
                />
            </Card>
        </Link>
    );
};

export default MaidCard;
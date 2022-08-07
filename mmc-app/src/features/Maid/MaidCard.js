import {Card, CardBody, CardImg} from 'reactstrap';
import { Link } from 'react-router-dom';

export const MaidCard = ({maid}) => {
    const { id, image, style, description } = maid;
    return (
        <Link to={`${id}`} className=""  id="maidCard">
            <Card>
                <CardBody className="text-center">
                    <h3>{style}</h3>
                <CardImg
                    src={image}
                    alt={description}
                />
                </CardBody>
                
            </Card>
       </Link>
    );
};

export default MaidCard;
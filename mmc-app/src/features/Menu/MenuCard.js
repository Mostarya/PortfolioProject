import {Card, CardBody, CardImg} from 'reactstrap';
import { Link } from 'react-router-dom';

export const MenuCard = ({item}) => {
    const { id, image, description, food,  price } = item;
     
    return (
        <Link to={`${id}`} className="align-self-center">
            <Card>
                <CardImg
                    src={image}
                    alt={description}
                />
                <CardBody className="text-center">
                    <h3>{food}</h3>
                    <p>{price}</p>
                </CardBody>
            </Card>
        </Link>
    );
};

export default MenuCard;
import {Card, CardBody, CardImg} from 'reactstrap';

export const MenuCard = ({item}) => {
    const { id, image, description, food,  price } = item;
     
    return (
            <Card className="align-self-center">
                <CardImg
                    src={image}
                    alt={description}
                />
                <CardBody className="text-center">
                    <h3>{food}</h3>
                    <p>{price}</p>
                </CardBody>
            </Card>
    );
};

export default MenuCard;
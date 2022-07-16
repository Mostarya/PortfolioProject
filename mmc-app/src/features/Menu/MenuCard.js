import {Card, CardBody, CardDeck, CardImg} from 'reactstrap';


const MealCard = (props) => {
    return (
        <>
        <CardDeck>
            <Card>
                <CardImg
                    src={props.menuItem.image}
                    alt={props.menuItem.description}
                />
                <CardBody>
                    <h3>{props.menuItem.food}</h3>
                    <p>{props.menuItem.price}</p>
                </CardBody>
            </Card>
        </CardDeck>
        </>
    );
}

const SweetCard = (props) => {
    return (
        <>
        <CardDeck>
            <Card>
                <CardImg 
                    src={props.menuItem.image}
                    alt={props.menuItem.description}
                />
                <CardBody>
                    <h3>{props.menuItem.food}</h3>
                    <p>{props.menuItem.price}</p>
                </CardBody>
            </Card>
        </CardDeck>
        </>
    );
}

const DrinkCard = (props) => {
    return (
        <>
        <CardDeck>
            <Card>
                <CardImg 
                    src={props.menuItem.image}
                    alt={props.menuItem.description}
                />
                <CardBody>
                    <h3>{props.menuItem.food}</h3>
                    <p>{props.menuItem.price}</p>
                </CardBody>
            </Card>
        </CardDeck>
        </>
    );
}


export default (MealCard, SweetCard, DrinkCard);
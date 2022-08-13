import {Card, CardBody, CardImg, Label} from 'reactstrap';
//import { Link } from 'react-router-dom';

export const MaidCard = ({maid, setRadioValue}) => {
    const { id, image, style, description } = maid;
    return (
            <div onClick={() => { setRadioValue(style); console.log(style)}}>
                <Label htmlFor={`maid${style}`}>
                    <Card id="maidCard">
                        <CardBody className="text-center">
                            <h3>{style}</h3>
                        <CardImg
                            src={image}
                            alt={description}
                            
                        />
                        </CardBody>
                        
                    </Card>
                </Label>
            </div>
    );
};

export default MaidCard;
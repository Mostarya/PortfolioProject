import { Container, Col, Row, Card, CardBody, CardHeader, Button, Label, FormGroup, Input } from "reactstrap";
import { Formik, Form, Field } from "formik";
import MaidStylesList from "../features/Maid/MaidStylesList";
import { useState } from "react";

const ReservationPage = () => {
    const [radioValue, setRadioValue] = useState();
   
    return (
        <>
            <Container>
                <Row className="text-center">
                    <Col id="book">
                        <h2>Book a Private Room!</h2>
                        <p>Choose between your choice of 3 maid styles to match your occassion.</p>
                    </Col>
                </Row>
            </Container>
    
            <Container>
                <Row>
                    <MaidStylesList className="align-items-center row-content text-center" setRadioValue={ setRadioValue } />
                </Row>
            </Container>

            <Container className="row-content"> 
                <Card id="reserveCard" >
                    <CardHeader text="center">
                        <h3>Book a Reservation</h3>
                    </CardHeader>
                    <CardBody>
                        <Formik>
                            <Form>
                                
                                <FormGroup xs="2">
                                    <Label htmlFor="firstName" className="text-nowrap" >First Name</Label>
                                    <Field 
                                        xs="9"
                                        type="text" 
                                        className="form-control" 
                                        id="firstName" 
                                        name="firstName" 
                                        placeholder="First Name" 
                                        >
                                    </Field>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="lastName">Last Name</Label>
                                    <Field 
                                        md="3"
                                        type="text" 
                                        className="form-control" 
                                        id="lastName" 
                                        name="lastName" 
                                        placeholder="Last Name"
                                        >
                                    </Field>
                                </FormGroup>

                                
                                <FormGroup xs="2">
                                    <Label htmlFor="areaCode" className="text-nowrap">Contact Tel.</Label>
                                    <Field 
                                        type="tel" 
                                        className="col form-control" 
                                        name="telNum" 
                                        placeholder="Tel. number" 
                                    >
                                    </Field>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="email">Email</Label>
                                    <Field 
                                        md="2"
                                        type="email" 
                                        className="form-control" 
                                        id="email" 
                                        name="email" 
                                        placeholder="Email"
                                        >
                                    </Field>
                                </FormGroup>

                                <FormGroup inline>
                                    <Label htmlFor="partySize" className="text-nowrap">Party Size</Label>
                                    <Input 
                                        xs="2" 
                                        type="number" 
                                        className="form-control" 
                                        id="partySize" 
                                        name="partySize" 
                                        placeholder="How many?" 
                                    />
                                    
                                    <Label htmlFor="date" className="col text-nowrap">Date</Label>
                                    <Field 
                                        xs='2' 
                                        className="form-control" 
                                        type="date" 
                                        name="date" 
                                        id="date" 
                                        placeholder="date"
                                        >
                                    </Field>

                                    <Label htmlFor="time" className="text-nowrap">Time</Label>
                                    <Field 
                                        xs="2"
                                        className="form-control" 
                                        type="time" 
                                        name="time" 
                                        id="time" 
                                        placeholder="time"
                                        >
                                    </Field>
                                </FormGroup>
                                
                                <FormGroup className="mb-4 text-center">
                                    <Label sm='3' className="text-nowrap">
                                        Maid Style
                                    </Label>
                                    <FormGroup>
                                        <FormGroup check inline>
                                            <Input type="radio" id="maidRoyalty" name="maidRadios" value="royalty" />{' '}
                                            <Label check for="maidRoyalty">Royalty</Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Input type="radio" id="maidCasual" name="maidRadios" value="casual" />{' '}
                                            <Label check for="maidCasual">Casual</Label>
                                        </FormGroup>
                                        <FormGroup check inline>
                                            <Input type="radio" id="maidKawaii" name="maidRadios" value="kawaii" />{' '}
                                            <Label check for="maidKawaii">Kawaii</Label>
                                        </FormGroup>
                                    </FormGroup>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="optionalText">How else can we serve you?</Label>
                                    <Field 
                                        className="form-control" 
                                        id="optionalText" 
                                        rows="3"
                                        as="textarea"
                                        placeholder="Help us personalize our service to your event!">
                                    </Field>
                                </FormGroup>

                                <Button id="submitBtn" className="btn text-secondary" type="submit" >
                                    Submit
                                </Button>
                            </Form>
                        </Formik>
                    </CardBody>
                </Card> 
            </Container>
        </>
    )
};

export default ReservationPage;
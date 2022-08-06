import { Container, Col, Row, Card, CardBody, CardHeader, Button } from "reactstrap";
import { Formik, Form, FormGroup, Field, Label } from "formik";
import MaidCard from "../features/MaidStyle/MaidCard";
import MaidStyle from "../features/MaidStyle/MaidStylesList";
import {selectAllStyles} from "../features/MaidStyle/MaidSlice";

const ReservationPage = () => {
    return (
        <>
            <Container>
                <Row class="row-content text-center">
                    <Col id="book">
                        <h2>Book a Private Room!</h2>
                        <p>Choose between your choice of 3 maid styles to match your occassion.</p>
                    </Col>
                </Row>
            </Container>
    
            <Container>
                <Row className="card-deck row-content">
                    <MaidCard></MaidCard>
                </Row>
            
                <Row class="row-content">
                    <Card id="reserveCard">
                        <CardHeader>
                            <h3>Book a Reservation</h3>
                        </CardHeader>
                        <CardBody>
                            <Formik>
                                <Form>
                                    <FormGroup>
                                        <Label htmlFor="firstName" className="col-md-2 col-form-Label">First Name</Label>
                                        <Field 
                                            md="10" 
                                            type="text" 
                                            className="form-control" 
                                            id="firstName" 
                                            name="firstName" 
                                            placeholder="First Name" 
                                            >
                                        </Field>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label htmlFor="lastName" class="col-md-2 col-form-Label">Last Name</Label>
                                        <Field 
                                            md="10"
                                            type="text" 
                                            className="form-control" 
                                            id="lastName" 
                                            name="lastName" 
                                            placeholder="Last Name"
                                            >
                                        </Field>
                                    </FormGroup>

                                    <Col>
                                        <FormGroup>
                                            <Label htmlFor="areaCode" className="col-md-2 col-form-Label">Contact Tel.</Label>
                                            <Field 
                                                type="tel" 
                                                className="col form-control" 
                                                name="telNum" 
                                                placeholder="Tel. number" 
                                            >
                                            </Field>
                                        </FormGroup>

                                        <FormGroup>
                                            <Label htmlFor="email" class="col-md-2 col-form-Label">Email</Label>
                                            <Field 
                                                md="10"
                                                type="email" 
                                                className="form-control" 
                                                id="email" 
                                                name="email" 
                                                placeholder="Email"
                                                >
                                            </Field>
                                        </FormGroup>
                                    </Col>

                                    <FormGroup className="row">
                                        <Label htmlFor="partySize" className="col-md-2 col-form-Label">Party Size</Label>
                                        <Field className="col-xs-2 col-md-2">
                                            <input type="number" className="form-control" id="partySize" name="partySize" placeholder="How many?" />
                                        </Field>
                                        
                                        <Label htmlFor="date" className="col col-sm-1 col-form-Label text-nowrap">Date</Label>
                                        <Field 
                                            xs='4' 
                                            md='2' 
                                            className="form-control col-xs-4 col-md-2" 
                                            type="date" 
                                            name="date" 
                                            id="date" 
                                            placeholder="date"
                                            >
                                        </Field>

                                        <Label htmlFor="time" className="col col-sm-1 col-form-Label text-nowrap">Time</Label>
                                        <Field 
                                            xs="4" 
                                            md="2" 
                                            className="form-control" 
                                            type="time" 
                                            name="time" 
                                            id="time" 
                                            placeholder="time"
                                            >
                                        </Field>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label className="col-1 col-5 col-sm-2 col-form-Label text-nowrap">Maid Style</Label>
                                        <Field className="col-1 form-check form-check-inline ml-3" >
                                            <input type="radio" className="form-check-input" id="maidRoyalty" name="maidRadios" value="royalty" />
                                            <Label htmlFor="maidRoyalty" className="form-check-Label">Royalty</Label>
                                        </Field>
                                        <Field className="col-1 form-check ml-3 form-check-inline">
                                            <input type="radio" className="form-check-input" id="maidCasual" name="maidRadios" value="casual" />
                                            <Label htmlFor="maidCasual" className="form-check-Label">Casual</Label>
                                        </Field>
                                        <Field className="col-1 form-check ml-3 form-check-inline">
                                            <input type="radio" className="form-check-input" id="maidKawaii" name="maidRadios" value="kawaii" />
                                            <Label htmlFor="maidKawaii" className="form-check-Label">Kawaii</Label>
                                        </Field>
                                    </FormGroup>

                                    <FormGroup>
                                        <Label htmlFor="optionalText" className="col">How else can we serve you?</Label>
                                        <Field 
                                            className="form-control" 
                                            id="optionalText" 
                                            rows="3"
                                            as="textarea"
                                            placeholder="Help us personalize our service to your event!">
                                        </Field>
                                    </FormGroup>

                                    <Col>
                                        <FormGroup>
                                            <Button id="submitBtn" className="btn text-secondary" type="submit">
                                                Submit
                                            </Button>
                                        </FormGroup>
                                    </Col>
                                </Form>
                            </Formik>
                        </CardBody>
                    </Card>
                </Row>
            </Container>
        </>
    )
};

export default ReservationPage;
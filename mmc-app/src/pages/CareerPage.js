import { Container, Col, Row, Card, CardHeader, CardBody, FormGroup, Button, Label } from "reactstrap";
import { Formik, Form, Field } from "formik";


const CareerPage = () => {
    return (
        <>
            <Container>
                <Row className="row row-content text-center">
                    <Col id="book">
                        <h2>Join Our Team!</h2>
                        <p>Select the position you want and submit your resume.</p>
                    </Col>
                </Row>
            </Container>
            
            <Container className="row-content">
                <Card id="careerCard">
                    <CardHeader>
                        <h3>Careers</h3>
                    </CardHeader>
                    <CardBody className="container mt-3">
                        <Formik initialValues={ { firstName:'', lastName:'',telNum:'', email:''} }>
                            <Form>
                                <FormGroup>
                                    <p>Select the position you wish to apply for:</p>  
                                    
                                    <select className="form-control" id="careerList">
                                        <option readOnly>Choose..</option>
                                        <option value="maid">Maid</option>
                                        <option value="barista">Barista</option>
                                        <option value="chef">Chef</option>
                                        <option value="generalMgr">Connoisseur - General Manager</option>
                                        <option value="regionalMgr">Yeif Meister - Regional Manager</option>
                                    </select>
                                </FormGroup>

                                <FormGroup>
                                    
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

                                <FormGroup>
                                    <Field 
                                        type="tel" 
                                        className="col form-control" 
                                        name="telNum" 
                                        placeholder="Tel. number" 
                                    >
                                    </Field>
                                </FormGroup>

                                <FormGroup>
                                    <Field 
                                        md="3"
                                        type="email" 
                                        className="form-control" 
                                        id="email" 
                                        name="email" 
                                        placeholder="Email"
                                    >
                                    </Field>
                                </FormGroup>

                                <FormGroup>
                                    <Label htmlFor="resume" xs="2" className="col-form-label text-nowrap">Upload Resume</Label>
                                    <Field 
                                        sm="3"
                                        type="file" 
                                        className="form-control-file custom-file text-secondary mt-2" 
                                        id="resume" 
                                        name="resume"
                                    >
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

export default CareerPage;
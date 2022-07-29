import { Container, Col, Row } from "reactstrap";
import RulesModal from "../components/RulesModal";


const AboutPage = () => {
    return (
        <>
        <RulesModal />
        <Container>
            <Row className="text-center">
                <Col id="about">
                    <h2>What should I expect?</h2>
                </Col>
            </Row>
        </Container>
        
        <Container>
            <Row className="row-content">
                <Col className="text-center text-sm-center">
                    <h3>A Warm Welcome</h3>
                    <p className="d-none d-sm-block">Our maids will greet you at the entrance and take you to your seat.</p>
                    <h3>Adorable Delicious Food</h3>
                    <p className="d-none d-sm-block">Writing with ketchup or ask for a drawing! We're happy to please. You'll definitely see lots of kawaii animals!</p>
                    <h3>Cute Outfits</h3>
                    <p className="d-none d-sm-block">Our maids wear between 3 dress types: 
                        <ul className="list-unstyled">
                            <li className="d-none d-sm-block">classic (long)</li>
                            <li className="d-none d-sm-block">French (short)</li>
                            <li className="d-none d-sm-block">hime-lolita inspired (more frilly and colorful)</li>
                        </ul>
                    </p>
                </Col>
            </Row>
        </Container>

        </>
    )
};

export default AboutPage;
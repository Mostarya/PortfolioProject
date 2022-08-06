import { Container, Row, Col } from "reactstrap";
import { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody } from "reactstrap";

const RulesModal = () => {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <>
            <Button  className="mt-5" onClick={() => setModalOpen(true)} >
                <a href="#rulesModal" className="text-white text-nowrap"id="rulesBtn">Rules</a>
            </Button>

            <Modal id="rulesModal"  isOpen={modalOpen}>
                <ModalHeader toggle={ () => setModalOpen(false) }>
                    <h3>Rules</h3>
                </ModalHeader>
                <ModalBody>
                    <Container className="container-fluid">
                        <ol>
                            <li>Please be respectful and not touch our maids.</li>
                            <li>Don't ask the maids for their contact information.</li>
                            <li>No pictures of the maids.</li>
                            <li>No outside food or drink.</li>
                            <li>No violent or provocative requests.</li>
                        </ol>
                        <Col className="col text-right">
                            <Row className="row form-group">
                                <Button className="btn-sm text-secondary" type="button" id="closeModal">
                                    Close
                                </Button>
                            </Row>
                        </Col>
                    </Container>
                </ModalBody>  
            </Modal>
        </>
    )
}

export default RulesModal;
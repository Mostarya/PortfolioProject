import { Container, Row, Col } from "reactstrap";

const RulesModal = () => {
    return (
        <>
            <Container>
                <Col class="col text-center">
                    <div class="mt-5">
                        <a href="#rulesModal" class="btn text-white text-nowrap" role="button" data-toggle="modal" id="rulesBtn">Rules</a>
                    </div>
                </Col>
            </Container>

            <div id="rulesModal" class="modal fade" role="dialog">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h3 class="modal-title">Rules</h3>
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                        </div>
                        <div class="modal-body">
                            <div class="container-fluid">
                                <ol>
                                    <li>Please be respectful and not touch our maids.</li>
                                    <li>Don't ask the maids for their contact information.</li>
                                    <li>No pictures of the maids.</li>
                                    <li>No outside food or drink.</li>
                                    <li>No violent or provocative requests.</li>
                                </ol>
                            </div>
                            <Col class="col text-right">
                                <div class="row form-group">
                                    <button class="btn btn-sm text-secondary" type="button" data-dismiss="modal" id="closeModal">Close</button>
                                </div>
                            </Col>
                        </div>
                    </div>
                </div>    
            </div>
        </>
    )
}

export default RulesModal;
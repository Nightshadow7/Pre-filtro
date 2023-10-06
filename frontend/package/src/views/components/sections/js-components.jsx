import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col,
} from "reactstrap";

import PageForm from "./form";

const JsComponents = (props) => {
  const [modal, setModal] = useState(false);

  const toggle = () => {
    setModal(!modal);
  };

  return (
    <div>
      <div className="m-3 ms-0" id="js-component"></div>
      <Container>
        <Row className="m-b-40">
          <Col md="6" className="d-flex flex-column">
            <Button
              type="button"
              onClick={toggle.bind(null)}
              className="btn btn-block waves-effect waves-light btn-success m-b-11 text-black "
            >
              Agregar Biblioteca +
            </Button>
            <Modal
              size="lg"
              isOpen={modal}
              toggle={toggle.bind(null)}
              className={props.className}
            >
              <ModalHeader toggle={toggle.bind(null)}>
                {" "}
                Nueva Biblioteca
              </ModalHeader>
              <ModalBody>
                <PageForm></PageForm>{" "}
              </ModalBody>
              <ModalFooter>
                <Button color="secondary" onClick={toggle.bind(null)}>
                  Cancel
                </Button>
              </ModalFooter>
            </Modal>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default JsComponents;

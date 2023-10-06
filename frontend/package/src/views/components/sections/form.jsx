import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const PageForm = () => {
  const [paises, setPaises] = useState([]);
  const apiUrl = `http://localhost:9000/pais`;

  useEffect(() => {
      fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setPaises(data)
          console.log(data[0].nombre);
      })
      .catch((error) => {
          console.error('Error al obtener datos de la API:', error);
      });
  }, [apiUrl]);

  let navigate = useNavigate();
  const [usuario, setFisrsName] = useState("");
  const [correoElectronico, setfechaNacimiento] = useState("");
  const [pais, setPais] = useState("");
  const [invencion, setInvencion] = useState("");
  const [frases, setFrases] = useState("");
  const [genero, setGenero] = useState("");
  const [biografia, setbiografia] = useState("");

  const postApiData = () => {
    axios.post(`http://localhost:8000/api/bibliotecas`, {
      usuario,
      correoElectronico,
      pais,
      invencion,
      frases,
      genero,
      biografia,
    })
    .then(() => {
      navigate("/");
    })
    .catch(error => {
      console.error("Error en la solicitud:", error);
    });
  };

  return (
    <div>
      <div className="" id="forms-component"></div>
      <Container>
        <Row>
          <Col md="12">
            <Form className="row">
              <FormGroup className="col-md-6">
                <Label htmlFor="name">Usuario</Label>
                <Input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter Username"
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter email"
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label htmlFor="password">juego</Label>
                <Input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Password"
                />
              </FormGroup>
              <FormGroup className="col-md-6">
                <Label htmlFor="confirmpwd">Clasificacion</Label>
                <Input
                  type="password"
                  className="form-control"
                  id="confirmpwd"
                  placeholder="Confirm Password"
                />
              </FormGroup>
              <Col md="12">
                <Button
                  type="submit"
                  className="btn btn-success waves-effect waves-light m-r-10"
                >
                  Submit
                </Button>
              </Col>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageForm;

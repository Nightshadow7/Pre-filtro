import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table,Button } from 'reactstrap';
import JsComponents from "./js-components";

const PageTable = () => {
    const [data, setData] = useState([]);
    const apiUrl = "http://localhost:8000/api/bibliotecas"; // Actualiza la URL de la API
  
    useEffect(() => {
      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Error al obtener datos de la API");
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          console.log(data);
 
        })
        .catch((error) => {
          console.error("Error al obtener datos de la API:", error);
        });
    }, [apiUrl]);

    


    return (
        <div>
            <div className="spacer" id="table-component">
                <Container>
                    <Row className="justify-content-center">
                        <Col md="7" className="text-center">
                            <h1 className="title font-bold">Biblioteca</h1>                         
                        </Col>
                    </Row>
                </Container>
            </div>
            <Container>
                <Row>
                    <Col md="12">
                        <div className="table-responsive">
                            <JsComponents/>
                            <Table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>usuario</th>
                                        <th>correo</th>
                                        <th>juego</th>
                                        <th>clasificacion</th>
                                        <th>Actualizar</th>
                                        <th>Borrar</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {data.biblioteca ? (
                                        data.biblioteca.map((item, index) => (
                                        <tr key={item._id}>
                                            <td>{index + 1}</td>
                                            <td>{item.usuario.nombreUsuario}</td>
                                            <td>{item.usuario.correoElectronico}</td>
                                            <td>{item.juegoAdquirido.tituloJuego}</td>
                                            <td>{item.juegoAdquirido.clasificacionEdades}</td>
                                            <td><Button color="primary">Actualizar</Button>{' '}</td>
                                            <td><Button color="danger">Borrar</Button>{' '}</td>
                                            
                                        </tr>
                                        ))
                                    ) : (
                                        <tr>
                                        <td colSpan="5">Cargando datos...</td>
                                        </tr>
                                    )}
                                    </tbody>
                                  
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PageTable;

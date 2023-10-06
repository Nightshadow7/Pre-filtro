import React, { useState, useEffect } from "react";
import { Container, Row, Col, Table, Button } from "reactstrap";

const PageTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl = "http://localhost:8000/api/juegos";

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener datos de la API");
        }
        return response.json();
      })
      .then((data) => {
        setData(data.juegos_Disponibles);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API:", error);
        setLoading(false);
      });
  }, [apiUrl]);

  return (
    <div>
      <div className="spacer" id="table-component">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Juegos</h1>
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <Row>
          <Col md="12">
            <div className="table-responsive">
              <Button color="success m-3 ms-0">Agregar Juego</Button>{" "}
              <Table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Titulo</th>
                    <th>Creador</th>
                    <th>fecha Lanzamiento</th>
                    <th>ClasificacionEdades</th>
                    <th>Actualizar</th>
                    <th>Borrar</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="7">Cargando datos...</td>
                    </tr>
                  ) : (
                    data.map((item, index) => (
                      <tr key={item._id}>
                        <td>{index + 1}</td>
                        <td>{item.tituloJuego}</td>
                        <td>{item.desarrollador.nombreDesarrollador}</td>
                        <td>{item.fechaLanzamiento}</td>
                        <td>{item.clasificacionEdades}</td>
                        <td>
                          <Button color="primary">Actualizar</Button>{" "}
                        </td>
                        <td>
                          <Button color="danger">Borrar</Button>{" "}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PageTable;

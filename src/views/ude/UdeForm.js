import React from 'react';
import Header from "components/Headers/Header";
import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Row } from "reactstrap";
import UdeService from "services/UdeService";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

const RecordForm = () => {
  const [isLoading, setIsLoading] = useState(true);

  let navigate = useNavigate();

  const params = useParams()
  const id = params?.id;

  const [record, setRecord] = useState({
    id: id,
    nome: '',
    unidadeMedida: '',
    sigla: ''
  })

  const inputsHandler = (e) => {
    e.preventDefault();
    setRecord({ ...record, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    async function fetchData() {
      const response = await UdeService.get(id);
      if (response.data) {
        setRecord(response.data);
      }
    }
    if (isLoading && id) {
      fetchData();
    }
    setIsLoading(false);
  }, [id, isLoading]);

  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <Row className="mt-5">
          <div className="col">
            <Card className="bg-default shadow">
              <CardHeader className="bg-transparent border-0">
                <h3 className="text-white mb-0">{id ? 'Editar UDE' : 'Adicionar UDE'}</h3>
              </CardHeader>
              <CardBody>
                <Form>
                  <div className="pl-lg-4">
                    <Row>
                      <Input
                        id="input-id"
                        type="hidden"
                        name="id"
                        value={record.id}
                      />
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                          >
                            Nome
                          </label>
                          <Input
                            id="input-nome"
                            className="form-control-alternative"
                            type="text"
                            placeholder="Temperatura"
                            name="nome"
                            onChange={inputsHandler}
                            value={record.nome}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                          >
                            Unidade de Medida
                          </label>
                          <Input
                            id="input-unidade-medida"
                            className="form-control-alternative"
                            type="text"
                            placeholder="Celsius"
                            name="unidadeMedida"
                            onChange={inputsHandler}
                            value={record.unidadeMedida}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="2">
                        <FormGroup>
                          <label
                            className="form-control-label"
                          >
                            Sigla
                          </label>
                          <Input
                            id="input-sigla"
                            className="form-control-alternative"
                            type="text"
                            placeholder="°C"
                            name="sigla"
                            onChange={inputsHandler}
                            value={record.sigla}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <div className="text-right">
                      <Button
                        color="danger"
                        onClick={() => {
                          navigate("/admin/Udes");
                        }}
                      >
                        Cancelar
                      </Button>

                      <Button
                        color="success"
                        onClick={async () => {
                          await UdeService.save(record);
                          navigate("/admin/Udes");
                        }}
                      >
                        Salvar
                      </Button>
                    </div>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default RecordForm;
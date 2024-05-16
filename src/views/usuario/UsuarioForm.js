import React from 'react';
import Header from "components/Headers/Header";
import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Container, Form, FormGroup, Input, Row } from "reactstrap";
import UsuarioService from "services/UsuarioService";
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
    email: '',
    role: ''
  })

  const inputsHandler = (e) => {
    setRecord({ ...record, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    async function fetchData() {
      const response = await UsuarioService.get(id);
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
                <h3 className="text-white mb-0">{id ? 'Editar Usuário' : 'Adicionar Usuário'}</h3>
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
                            placeholder="Matheus B."
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
                            Email
                          </label>
                          <Input
                            id="input-email"
                            className="form-control-alternative"
                            type="email"
                            placeholder="email@example.com"
                            name="email"
                            onChange={inputsHandler}
                            value={record.email}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="2">
                        <FormGroup>
                          <label
                            className="form-control-label"
                          >
                            Role
                          </label>
                          <Input
                            id="input-role"
                            className="form-control-alternative"
                            type="text"
                            placeholder="°C"
                            name="role"
                            onChange={inputsHandler}
                            value={record.role}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <div className="text-right">
                      <Button
                        color="danger"
                        onClick={() => {
                          navigate("/admin/Usuarios");
                        }}
                      >
                        Cancelar
                      </Button>

                      <Button
                        color="success"
                        onClick={async () => {
                          await UsuarioService.save(record);
                          navigate("/admin/Usuarios");
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
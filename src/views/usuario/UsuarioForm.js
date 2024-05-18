import { Col, FormGroup, Input, Row } from "reactstrap";
import UsuarioService from "services/UsuarioService";
import DefaultForm from "views/DefaultForm";

const target = '/admin/usuarios'
const resource = 'Usuário'
const service = UsuarioService
const initalRecord = {
  id: '',
  nome: '',
  email: '',
  role: ''
}

const BuildForm = (record, inputsHandler) => {
  return (
    <>
      <Row>
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
        <Col lg="3">
          <FormGroup>
            <label
              className="form-control-label"
            >
              Senha
            </label>
            <Input
              id="input-password"
              className="form-control-alternative"
              type="password"
              placeholder="123456"
              name="password"
              onChange={inputsHandler}
              value={record.password}
            />
          </FormGroup>
        </Col>
        <Col lg="3">
          <FormGroup>
            <label
              className="form-control-label"
            >
              Role
            </label>
            <Input
              id="input-role"
              className="form-control-alternative"
              type="select"
              placeholder="ADMIN"
              name="role"
              onChange={inputsHandler}
              value={record.role}
            >
              <option value="">Selecione uma Role</option>
              <option value="ADMIN">Administrador</option>
              <option value="USER">Usuário</option>
              <option value="GUEST">Convidado</option>
            </Input>
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}

export default DefaultForm(target, resource, service, initalRecord, BuildForm)

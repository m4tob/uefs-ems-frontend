import ZonaSelect from "components/Selects/ZonaSelect";
import { Col, FormGroup, Input, Row } from "reactstrap";
import UdeService from "services/UdeService";
import DefaultForm from "views/DefaultForm";

const target = '/admin/udes'
const resource = 'Un. Detec. de Emergência'
const service = UdeService
const initalRecord = {
  tipo: '',
  label: '',
  mac: '',
  latitude: 0,
  longitude: 0,
  operatingRange: 0,
  zona: {},
}

const BuildForm = (record, inputsHandler) => {
  return (
    // tipo: '', label: '', mac: '', latitude: 0, longitude: 0, operatingRange: 0, zona: {},
    <>
      <Row>
        <Col lg="4">
          <FormGroup>
            <label
              className="form-control-label"
            >
              Tipo
            </label>
            <Input
              id="input-tipo"
              className="form-control-alternative"
              type="text"
              placeholder="Tipo"
              name="tipo"
              onChange={inputsHandler}
              value={record.tipo}
            />
          </FormGroup>
        </Col>
        <Col lg="4">
          <FormGroup>
            <label
              className="form-control-label"
            >
              Label
            </label>
            <Input
              id="input-label"
              className="form-control-alternative"
              type="text"
              placeholder="Label"
              name="label"
              onChange={inputsHandler}
              value={record.label}
            />
          </FormGroup>
        </Col>
        <Col lg="4">
          <FormGroup>
            <label
              className="form-control-label"
            >
              MAC
            </label>
            <Input
              id="input-mac"
              className="form-control-alternative"
              type="text"
              placeholder="MAC"
              name="mac"
              onChange={inputsHandler}
              value={record.mac}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg="4">
          <FormGroup>
            <label
              className="form-control-label"
            >
              Zona
            </label>
            <ZonaSelect
              id="input-zona"
              className="form-control-alternative"
              name="zona"
              onChange={inputsHandler}
              value={record.zona}
            />
          </FormGroup>
        </Col>
        <Col lg="4">
          <FormGroup>
            <label
              className="form-control-label"
            >
              Latitude
            </label>
            <Input
              id="input-latitude"
              className="form-control-alternative"
              type="text"
              placeholder="Latitude"
              name="latitude"
              onChange={inputsHandler}
              value={record.latitude}
            />
          </FormGroup>
        </Col>
        <Col lg="4">
          <FormGroup>
            <label
              className="form-control-label"
            >
              Longitude
            </label>
            <Input
              id="input-longitude"
              className="form-control-alternative"
              type="text"
              placeholder="Longitude"
              name="longitude"
              onChange={inputsHandler}
              value={record.longitude}
            />
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col lg="4">
          <FormGroup>
            <label
              className="form-control-label"
            >
              Alcance
            </label>
            <Input
              id="input-operatingRange"
              className="form-control-alternative"
              type="text"
              placeholder="Alcance"
              name="operatingRange"
              onChange={inputsHandler}
              value={record.operatingRange}
            />
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}

export default DefaultForm(target, resource, service, initalRecord, BuildForm)

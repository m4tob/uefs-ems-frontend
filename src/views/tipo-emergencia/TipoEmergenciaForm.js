import { useEffect, useState } from "react";
import ReactSelect, { components } from "react-select";
import { Col, FormGroup, Input, Row } from "reactstrap";
import GrandezaService from "services/GrandezaService";
import TipoEmergenciaService from "services/TipoEmergenciaService";
import DefaultForm from "views/DefaultForm";

const target = '/admin/tipos-emergencia'
const resource = 'Tipo de Emergência'
const service = TipoEmergenciaService
const initalRecord = {
  id: '',
  nome: '',
  grandezas: []
}

const Option = (props) => {
  return (
    <div>
      <components.Option {...props}>
        <div className="d-flex justify-content-between">
          <label>{props.label}</label>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
        </div>
      </components.Option>
    </div>
  );
};

const BuildForm = (record, inputsHandler) => {
  console.log(record)
  const [isLoading, setIsLoading] = useState(true);
  const [grandezas, setGrandezas] = useState([]);
  const [grandezasSelected, setGrandezasSelected] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await GrandezaService.list();
        setGrandezas(response);
        console.log(record.grandezas)
        setGrandezasSelected(record.grandezas.map(g => ({ value: g, label: g.nome })))
      } catch (error) {
        console.error(error);
        alert('Erro ao carregar grandezas!');
      }
    }
    if (isLoading && record.id) {
      fetchData();
      setIsLoading(false);
    }
  }, [isLoading, record.id, record.grandezas]);

  const handleChange = (selected) => {
    setGrandezasSelected(selected);
    inputsHandler({ target: { name: 'grandezas', value: selected.map(s => s.value) } })
  };

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
              placeholder="Incêndio"
              name="nome"
              onChange={inputsHandler}
              value={record.nome}
            />
          </FormGroup>
        </Col>
        {/* A multiple line checkbox with a CheckboxGroup to be stored in grandezas */}
        <Col lg="4">
          <FormGroup>
            <label
              className="form-control-label"
            >
              Grandezas
            </label>
            <ReactSelect
              id="input-grandezas"
              className="form-control-alternative form-control-partial"
              options={grandezas.map((g) => ({ value: g, label: g.nome }))}
              isMulti
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              components={{
                Option
              }}
              onChange={handleChange}
              allowSelectAll={true}
              value={grandezasSelected}
              placeholder="Selecione uma ou mais Grandezas"
            />
          </FormGroup>
        </Col>
      </Row>
    </>
  )
}

export default DefaultForm(target, resource, service, initalRecord, BuildForm)

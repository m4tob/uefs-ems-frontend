import { useEffect, useState } from "react";
import { Input } from "reactstrap";

const DefaultSelect = (recordName, inputName, service, getLabel) => {
  const BuiltSelect = ({ name = inputName, value = '', onChange = null }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [options, setOptions] = useState([]);
    const [id, setId] = useState(value?.id);

    const handleChange = (e) => {
      e.preventDefault();
      setId(e.target.value);
      const record = options.find(r => `${r.id}` === e.target.value);
      if (onChange) onChange({ target: { name: e.target.name, value: record } });
    }

    useEffect(() => {
      async function fetchData() {
        try {
          const response = await service.list();
          setOptions(response);
        } catch (error) {
          console.error(error);
          alert('Erro ao carregar opções');
        }
      }
      fetchData();
      setIsLoading(false);
    }, [isLoading]);

    return (
      <>
        <Input
          id={'input-' + name}
          className="form-control-alternative"
          type="select"
          name={name}
          value={id}
          onChange={handleChange}
        >
          <option value="">Selecione uma {recordName}</option>
          {
            options.map(record => (
              <option key={record.id} value={record.id}>{getLabel(record)}</option>
            ))
          }
        </Input>
      </>
    );
  }

  return BuiltSelect;
};

export default DefaultSelect;
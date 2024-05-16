import GrandezaService from 'services/GrandezaService';
import DefaultSelect from "./DefaultSelect";

const recordName = 'Grandeza'
const inputName = 'grandeza';
const getLabel = (record) => record.nome;
const service = GrandezaService;

export default DefaultSelect(recordName, inputName, service, getLabel);

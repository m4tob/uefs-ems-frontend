import SensorService from 'services/SensorService';
import DefaultSelect from "./DefaultSelect";

const recordName = 'Sensor'
const inputName = 'sensor';
const getLabel = (record) => record.nome;
const service = SensorService;

export default DefaultSelect(recordName, inputName, service, getLabel);

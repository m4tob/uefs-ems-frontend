import envs from "environment";
import DefaultService from "./DefaultService";

const baseUrl = `${envs.backendUrl}/tipos-emergencia`;

const Service = DefaultService(baseUrl);

export default Service;
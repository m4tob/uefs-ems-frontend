import envs from "environment";
import DefaultService from "./DefaultService";

const baseUrl = `${envs.backendUrl}/udes`;

const Service = DefaultService(baseUrl);

export default Service;
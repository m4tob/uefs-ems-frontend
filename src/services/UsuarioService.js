import envs from "environment";
import DefaultService from "./DefaultService";

const baseUrl = `${envs.backendUrl}/usuarios`;

const Service = DefaultService(baseUrl);

export default Service;
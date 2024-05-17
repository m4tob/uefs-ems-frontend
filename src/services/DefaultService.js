import handleResponse from "./handleResponse";

const DefaultService = (baseUrl) => {
  const getToken = () => localStorage.getItem('token');

  return {
    async list() {
      const response = await fetch(baseUrl, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      return handleResponse(response);
    },

    async get(id) {
      const response = await fetch(`${baseUrl}/${id}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      return handleResponse(response);
    },

    async save(record) {
      if (record.id) {
        return await this.edit(record.id, record);
      }
      return await this.create(record);
    },

    async create(record) {
      const response = await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
        body: JSON.stringify(record),
      });

      return handleResponse(response);
    },

    async edit(id, record) {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
        body: JSON.stringify(record),
      });

      return handleResponse(response);
    },

    async delete(id) {
      const response = await fetch(`${baseUrl}/${id}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${getToken()}` }
      });

      return handleResponse(response);
    },
  }
}

export default DefaultService;
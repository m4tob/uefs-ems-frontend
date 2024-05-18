import handleResponse from "./handleResponse";
import AuthService from "./AuthService";

const DefaultService = (baseUrl) => {
  const buildHeaders = async () => ({
    'Content-Type': 'application/json',
    Authorization: await AuthService.getAuthorizationHeader(),
  });

  return {
    async list() {
      const response = await fetch(
        baseUrl,
        { headers: await buildHeaders() }
      );
      return handleResponse(response, () => this.list());
    },

    async get(id) {
      const response = await fetch(
        `${baseUrl}/${id}`,
        { headers: await buildHeaders() }
      );
      return handleResponse(response, () => this.get(id));
    },

    async save(record) {
      if (record.id) {
        return this.edit(record.id, record);
      }
      return this.create(record);
    },

    async create(record) {
      const response = await fetch(
        baseUrl,
        {
          method: 'POST',
          headers: await buildHeaders(),
          body: JSON.stringify(record),
        }
      );

      return handleResponse(response, () => this.create(record));
    },

    async edit(id, record) {
      const response = await fetch(
        `${baseUrl}/${id}`,
        {
          method: 'PUT',
          headers: await buildHeaders(),
          body: JSON.stringify(record),
        }
      );

      return handleResponse(response, () => this.edit(id, record));
    },

    async delete(id) {
      const response = await fetch(
        `${baseUrl}/${id}`,
        {
          method: 'DELETE',
          headers: await buildHeaders(),
        }
      );

      return handleResponse(response, () => this.delete(id));
    },
  }
}

export default DefaultService;
const DefaultService = (baseUrl) => {
  const getToken = () => localStorage.getItem('token');

  return {
    async list() {
      const response = await fetch(baseUrl, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      return await response.json()
    },

    async get(id) {
      const response = await fetch(`${baseUrl}/${id}`, {
        headers: { Authorization: `Bearer ${getToken()}` },
      });
      return await response.json()
    },

    async save(record) {
      if (record.id) {
        return await this.edit(record.id, record);
      }
      return await this.create(record);
    },

    async create(record) {
      return await fetch(baseUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
        body: JSON.stringify(record),
      });
    },

    async edit(id, record) {
      return await fetch(`${baseUrl}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${getToken()}` },
        body: JSON.stringify(record),
      });
    },

    async delete(id) {
      return await fetch(`${baseUrl}/${id}`, { method: 'DELETE', headers: { Authorization: `Bearer ${getToken()}` } });
    },
  }
}

export default DefaultService;
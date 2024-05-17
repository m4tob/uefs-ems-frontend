import envs from "environment";

const baseUrl = envs.backendUrl

const Service = () => {
  return {
    async signin(email, password) {
      const response = await fetch(`${baseUrl}/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.data) {
        localStorage.setItem('account', response.data.account);
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('refreshToken', response.data.refreshToken);
      }
    },

    async signout(record) {
      localStorage.removeItem('account');
      localStorage.removeItem('token');
      localStorage.removeItem('refreshToken');
    },
  }
}

export default Service;
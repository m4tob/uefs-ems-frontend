import envs from "environment";
import handleResponse from "./handleResponse";

const baseUrl = `${envs.backendUrl}/usuarios`

const Service = {
  async signIn({ email, password }) {
    const response = await fetch(`${baseUrl}/sign-in`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await handleResponse(response);

    if (data?.bearerToken) {
      await Promise.all([
        localStorage.setItem('account', JSON.stringify(data.account)),
        localStorage.setItem('token', data.bearerToken),
        localStorage.setItem('refreshToken', data.refreshToken),
      ]);
    }
  },

  async signOut(record) {
    await Promise.all([
      localStorage.removeItem('account'),
      localStorage.removeItem('token'),
      localStorage.removeItem('refreshToken')
    ]);
  },
}

export default Service;
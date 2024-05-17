import envs from "environment";

const baseUrl = `${envs.backendUrl}/usuarios`

const Service = {
  async signIn({ email, password }) {
    const response = await fetch(`${baseUrl}/sign-in`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const body = await response.json();
    const data = body.data;

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
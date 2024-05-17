export default async function handleResponse(response) {
  const body = await response.json();
  if (response.ok) {
    return body.data
  }

  const responseErrros = body.errors;
  const statusError = response.statusText;

  const errors = [statusError]
  // if resposneErrors is an array
  if (Array.isArray(responseErrros)) {
    responseErrros.forEach((error) => {
      errors.push(error.message);
    });
  }
  throw new Error(errors.join(', '));
}
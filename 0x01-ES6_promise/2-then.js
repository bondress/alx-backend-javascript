export default function handleResponseFromAPI(promise) {
  const bdy = { status: 200, body: 'success' };
  return promise
    .then(() => bdy)
    .catch(() => new Error())
    .finally(() => {
      console.log('Got a response from the API');
    });
}

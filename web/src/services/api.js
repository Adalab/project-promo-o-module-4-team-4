const EXPRESS_SERVER = `http://localhost:4000/card`

// Fichero src/services/api.js
const callToApi = (data) => {
  // Llamamos al API
  return fetch(EXPRESS_SERVER, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  })
    .then(response => response.json())
    .then(dataApi => {
      return dataApi;
    });
};

export default callToApi;

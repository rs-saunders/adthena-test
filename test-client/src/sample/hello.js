const setHelloMessage = (message) => {
  document.getElementById('app').innerHTML = `
    <h1>Hello ${message}!</h1>
    <div>
    This message was generated using data from the status endpoint.
    </div>
  `;
};

export default {
  setHelloMessage
};

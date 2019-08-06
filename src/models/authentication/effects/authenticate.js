export default dispatch => async (payload, state) => {
  const {
    authenticatePending,
    authenticateFulfilled,
    authenticateRejected
  } = dispatch.authentication;

  authenticatePending();
  try {
    await authenticate();
    authenticateFulfilled({
      user: {
        name: 'Hiléo Andersson'
      }
    });
  } catch(err) {
    authenticateRejected(err.message);
  }
};


const authenticate = () => {
  return new Promise(resolve => setTimeout(resolve, 3000));
}
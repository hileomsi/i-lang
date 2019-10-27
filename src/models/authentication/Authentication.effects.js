export function authenticate(dispatch) {
  return async (payload, state) => {
    const {
      authenticatePending,
      authenticateFulfilled,
      authenticateRejected
    } = dispatch.authentication;
  
    authenticatePending();
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      authenticateFulfilled({
        user: {
          name: 'Hiléo Andersson'
        }
      });
    } catch(err) {
      authenticateRejected(err.message);
    }
  };
} 

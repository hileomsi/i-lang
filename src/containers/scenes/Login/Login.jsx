import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'components';

function Login() {
  const loading = useSelector(state => state.authentication.loading);
  const dispatch = useDispatch();
  
  function handlerAuthenticate() {
    dispatch.authentication.authenticate();
  }

  return (
    <div>
      <Button outline onClick={handlerAuthenticate}>
				FETCH
      </Button>
      {loading && (
        <span>Carregando...</span>
      )}
      {!loading && (
        <span>Não carregando...</span>
      )}
    </div>
  );
}

export default Login;

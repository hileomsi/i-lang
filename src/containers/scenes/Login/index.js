import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'components';
import { Actions } from 'modules';

function Login() {
  const data = useSelector(state => state.users.domain.users.data);
  const dispatch = useDispatch();

  function handlerEditData() {
    const { fetch } = Actions.users.domain.users;
    dispatch(fetch());
  }

  return (
    <div>
      <Button outline onClick={handlerEditData}>
				CLICK ME
      </Button>
      <span>search:</span>

      <div>
        {data.map(item => (
          <div key={item}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default Login;

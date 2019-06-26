import Immutable from 'seamless-immutable';
import { createSlice } from 'redux-starter-kit';

export default (name, initial, fetch) => {
  return createSlice({
    slice: `FIND/${name}`,
    initialState: Immutable({
      data: initial || [],
      loading: false,
      skip: 0,
      limit: 0,
      total: 0
    }),
    reducers: { fetch }
  });
};

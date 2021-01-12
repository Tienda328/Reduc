import {
  INCREMENT,
  DECREMENT,
  DOIMAU1,
  DOIMAU2,
  ADDDATA,
  DELETEDATA,
} from './actionType';

export const increment = (payload) => ({
  type: INCREMENT,
  payload: payload,
});

export const decrement = () => ({
  type: DECREMENT,
});

export const doimau1 = () => ({
  type: DOIMAU1,
});

export const doimau2 = () => ({
  type: DOIMAU2,
});

export const adddata = (payload) => ({
  type: ADDDATA,
  payload: payload,
});
export const deleteData = (payload) => ({
  type: DELETEDATA,
  payload: payload,
});

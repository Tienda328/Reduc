import {
  INCREMENT,
  DECREMENT,
  DOIMAU1,
  DOIMAU2,
  ADDDATA,
  DELETEDATA,
} from '../redux/actionType';

const initialState = {
  datatest: [],
  number: 0,
  isButon: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      };
    case DOIMAU1:
      return {
        ...state,
        isButon: false,
      };
    case DOIMAU2:
      return {
        ...state,
        isButon: true,
      };
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      };
    case ADDDATA:
      state.datatest.push(action.payload);
      return {
        ...state,
        datatest: state.datatest,
      };
    case DELETEDATA:
      const key = state.datatest.indexOf(action.payload);
      state.datatest.splice(key, 1);
      // console.log(state.datatest);
      return {
        ...state,
        datatest: state.datatest,
      };
    default:
      return state;
  }
}

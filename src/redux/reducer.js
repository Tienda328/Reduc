import {
  INCREMENT,
  DECREMENT,
  DOIMAU1,
  DOIMAU2,
  ADDDATA,
  DELETEDATA,
  CONGTWE,
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
    case CONGTWE:
      return {
        ...state,
        number: state.number + 4,
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
      const newData = [...state.datatest];
      const remove = newData.indexOf(action.payload);
      // const key = state.datatest.indexOf(action.payload);
      newData.splice(remove, 1);
      return {
        ...state,
        datatest: newData,
      };
    default:
      return state;
  }
}

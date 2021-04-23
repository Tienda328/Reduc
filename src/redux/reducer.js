import {
  INCREMENT,
  DECREMENT,
  DOIMAU1,
  DOIMAU2,
  CONGTWE,
} from '../redux/actionType';

const initialState = {
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
    default:
      return state;
  }
}

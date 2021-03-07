import ACTION from '../types';
import {database} from '../../components/database';

const initialState = {
  loading: false,
  data: database,
  error: '',
};

export default function reducers1(state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case ACTION.SET_DETAIL_PAGE:
      return {...state, ...payload, visible: true};
    case ACTION.SET_VISIBILITY:
      return {...state, visible: action.payload};
    default:
      return state;
  }
}

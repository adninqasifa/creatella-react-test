import ACTION from '../types';

export const chVisibility = (payload) => {
  return {type: ACTION.SET_VISIBILITY, payload: payload};
};

export const chDetail = (payload) => {
  return {type: ACTION.SET_DETAIL_REQUESTED, payload: payload};
};

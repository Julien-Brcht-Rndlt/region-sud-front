import { ADD_INFOS, COMPLETE } from './actions';

export default function formReducer(state, action) {
    const { type, payload } = action;
    const { org, orgEvent } = payload;
    console.log(state);
    console.log(action);
    switch (type) {
        case ADD_INFOS:
          return { ...state, org, orgEvent };
      /*   case ADD_ORG_EVENT:
            console.log('add event');
          return { ...state, orgEvent: payload }; // { org, orgEvent: infosForm }; */
        case COMPLETE:
            return { ...state, complete: true };
        default:
          return state;
    }
}
/* { ...orgEvent, ...payload }; */
/* { ...org, ...payload }; */

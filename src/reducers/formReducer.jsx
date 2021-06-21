import { ADD_INFOS, COMPLETE } from './actions';

export default function formReducer(state, action) {
    const { type, payload } = action;
    const { org, orgEvent } = payload;
    switch (type) {
        case ADD_INFOS:
          return { ...state, org, orgEvent };
        case COMPLETE:
            return { ...state, complete: true };
        default:
          return state;
    }
}

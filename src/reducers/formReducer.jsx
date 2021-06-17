import { ADD_ORG, ADD_ORG_EVENT, COMPLETE } from './actions';

export default function formReducer(state, action) {
    const { org, orgEvent } = state;
    const { type, payload } = action;
    let infosForm = {};
    switch (type) {
        case ADD_ORG:
          console.log(org);
          infosForm = { ...org, ...payload };
          return { org: infosForm, orgEvent };
        case ADD_ORG_EVENT:
          console.log(orgEvent);
          infosForm = { ...orgEvent, ...payload };
          return { org, orgEvent: infosForm };
        case COMPLETE:
            return { ...state, complete: true };
        default:
          return state;
    }
}

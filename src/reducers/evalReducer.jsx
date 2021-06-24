export default function evalReducer(state, action) {
    const { type, payload } = action;

    switch (type) {
        case 'CHECKED_ANSWER':
            if (state.checked){}
            return { ...state };
        case 'INPUT_ANSWER':
            return { ...state };
       /*  case 'ADD_QUESTION_ANSWER':
            return { ...state }; */
        default:
            return state;
    }
}
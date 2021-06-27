/* import { useContext } from 'react'; */
/* import FunnelContext from '../contexts/FunnelContext'; */

export default function evalReducer(state, action) {
    const { type, payload } = action;

    /* const { funnel } = useContext(FunnelContext); */
    /* console.log(funnel); */
    let answer = null;
    switch (type) {
        case 'CHECKED_ANSWER':
            if (payload.checked) {
                console.log('add/update answer to eval state with yes');
            } else {
                console.log('add/update answer to eval');
            }
            console.log('payload', payload);
            console.log('state', state);
            answer = payload.answer;
            return { ...state, answer };
        case 'INPUT_ANSWER':
            console.log('payload', payload);
            return { ...state, answer };
       /*  case 'ADD_QUESTION_ANSWER':
            return { ...state }; */
        case 'COMPLETE':
            return state;
        case 'COMPUTE_SCORE':
            return state;
        case 'COMPUTE_TOTAL_SCORE':
            return state;
        default:
            return state;
    }
}

// TODO: funnel context ou une copie de celui-ci doit être maintenu dans l'eval context..
// ainsi la structure de l'objet global représentant les liens entre themes/questions/answers
// est déjà créé..
// initialiser funnel context comme propriété de l'evalcontext
// puis selon le type de réponse (answer_type)
// pré-remplir l'eval context avec des valeurs par défaut
// qui seront changées  via le reducer
// les reco sont aussi récupérées depuis le funnel context et assigné selon les réponses données
// comme une liste de reco pour un thème
// idem le score est calculé en fonction
// des réponses et stocké pour un thème

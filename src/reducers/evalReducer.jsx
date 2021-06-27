/* import { useContext } from 'react'; */
/* import FunnelContext from '../contexts/FunnelContext'; */

export default function evalReducer(state, action) {
    const { type, payload } = action;

    /* const { funnel } = useContext(FunnelContext); */
    /* console.log(funnel); */
    let evalState = null;
    if (type === 'CHECKED_ANSWER' || type === 'INPUT_ANSWER') {
        const answerValue = type === 'CHECKED_ANSWER' ? payload.checked : payload.value;
        console.log('payload', payload);
        console.log('answerValue', answerValue);
        console.log('state', state);
        const {
            answer,
            funnel,
            questionId,
            themeId,
        } = payload;
        const evalTheme = { ...funnel.themes[themeId] };
        const evalQuestion = { ...evalTheme[questionId] };
        evalQuestion.givenAnswers[answer.id] = {
            ...answer,
            answer_value: true,
        };
        evalTheme.questions[questionId] = evalQuestion;

        evalState = { ...state, evalTheme };
    } else if (type === 'COMPLETE') {
        return state;
    } else if (type === 'COMPUTE_SCORE') {
        return state;
    } else if (type === 'COMPUTE_TOTAL_SCORE') {
        return state;
    } else {
        return state;
    }
    /*  case 'ADD_QUESTION_ANSWER':
        return { ...state }; */
    return evalState;
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

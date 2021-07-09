import { COMPUTE_TOTAL_SCORE } from "./actions";
/* import { useContext } from 'react'; */
/* import FunnelContext from '../contexts/FunnelContext'; */

export default function evalReducer(state, action) {
    const { type, payload } = action;

    /* const { funnel } = useContext(FunnelContext); */
    /* console.log(funnel); */

    const evalState = state; // const evalState = { ...state };

    if (type === 'MULTI_CHOICE' || type === 'INPUT_ANSWER' || type === 'ONE_CHOICE') {
        const {
            answer,
            funnel,
            questionId,
            themeId,
        } = payload;
        if (!evalState.themes) {
            evalState.themes = [];
        }
        const evalStateTheme = evalState.themes
        .find((theme) => theme.id === parseInt(themeId, 10));
        const funnelTheme = funnel.themes
        .find((theme) => theme.id === parseInt(themeId, 10));
        const evalTheme = evalStateTheme || { ...funnelTheme };
        const evalQuestion = evalTheme.questions
        .find((question) => question.id === parseInt(questionId, 10));

        if (!evalQuestion.givenAnswers) {
            evalQuestion.givenAnswers = [];
        }
        /* console.log('eval question', evalQuestion);

        console.log('payload', payload);
        console.log('answerValue', answer.label);
        console.log('before state', state); */

        if (type === 'MULTI_CHOICE') {
            if (payload.checked && evalQuestion.givenAnswers
                .find((givenAnswer) => givenAnswer.id === answer.id)) {
                const filteredAnswers = evalQuestion.givenAnswers
                .filter((givenAnswer) => givenAnswer.id !== answer.id);
                evalQuestion.givenAnswers = [...filteredAnswers, {
                    ...answer,
                    answer_value: answer.label,
                }];
            } else if (payload.checked) {
                evalQuestion.givenAnswers.push({
                    ...answer,
                    answer_value: answer.label,
                });
            } else {
                const filteredAnswers = evalQuestion.givenAnswers
                .filter((givenAnswer) => givenAnswer.id !== answer.id);
                evalQuestion.givenAnswers = [...filteredAnswers];
            }
        }
        if (type === 'INPUT_ANSWER') {
            if (payload.value && evalQuestion.givenAnswers
                .find((givenAnswer) => givenAnswer.id === answer.id)) {
                    const filteredAnswers = evalQuestion.givenAnswers
                .filter((givenAnswer) => givenAnswer.id !== answer.id);
                evalQuestion.givenAnswers = [...filteredAnswers, {
                    ...answer,
                    answer_value: payload.value,
                }];
            } else if (payload.value) {
                evalQuestion.givenAnswers.push({
                    ...answer,
                    answer_value: payload.value,
                });
            } else {
                const filteredAnswers = evalQuestion.givenAnswers
                .filter((givenAnswer) => givenAnswer.id !== answer.id);
                evalQuestion.givenAnswers = [...filteredAnswers];
            }
        }
        if (type === 'ONE_CHOICE') {
            evalQuestion.givenAnswers = [];
            evalQuestion.givenAnswers.push({
                ...answer,
                answer_value: answer.label,
            });
        }

        if (evalState.themes.find((theme) => theme.id === evalTheme.id)) {
            const filteredThemes = evalState.themes.filter((theme) => theme.id !== evalTheme.id);
            evalState.themes = [...filteredThemes, evalTheme];
        } else {
            evalState.themes.push(evalTheme);
        }
    }
    if (type === 'IS_COMPLETE') {
        const themeId = payload;
        const evalTheme = evalState.themes
            .find((theme) => theme.id === parseInt(themeId, 10));
        if (evalTheme) {
            const filteredQuestions = evalTheme.questions
        .filter((question) => question.givenAnswers && question.givenAnswers.length > 0);
            if (filteredQuestions.length === evalTheme.questions.length) {
                if (!evalState.completedThemes) {
                    evalState.completedThemes = [];
                }
                if (!evalState.completedThemes.includes(themeId)) {
                evalState.completedThemes.push(themeId);
                }
            }
        }
    }
    if (type === 'COMPUTE_SCORE') {
        const themeId = payload;
        console.log('compute score');
        console.log('themeId from payload', themeId);
        let score = 0;
        if (evalState) {
            const evalTheme = evalState.themes
            .find((theme) => theme.id === parseInt(themeId, 10));
            console.log('evalTheme dans compute score', evalTheme);
            evalTheme.questions.forEach((question) => {
                question.givenAnswers.forEach((givenAnswer) => {
                    score += givenAnswer.weight;
                    console.log('givenAnswer.weight dans double loop', givenAnswer);
                });
            });
          console.log('score', score);
          evalTheme.score = score;
          const filteredThemes = evalState.themes
          .filter((theme) => theme.id !== parseInt(themeId, 10));
          evalState.themes = [...filteredThemes, evalTheme];
        }
    }
    if (type === COMPUTE_TOTAL_SCORE) {
        let evalScore = 0;
        evalState.themes.forEach((theme) => {
            if (theme.score) {
                evalScore += theme.score;
            }
        });
        console.log('scoring:', evalScore);
        evalState.scoring = evalScore;
        console.log('evalState.scoring', evalState.scoring);
    }
    console.log('eval state', evalState);
    return evalState;
    /*  case 'ADD_QUESTION_ANSWER':
        return { ...state }; */
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

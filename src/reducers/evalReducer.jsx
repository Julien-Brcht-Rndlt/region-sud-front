import {
    MULTIPLE_CHOICE,
    ONE_CHOICE,
    INPUT_ANSWER,
    IS_COMPLETE,
    COMPUTE_SCORE,
    COMPUTE_TOTAL_SCORE,
} from './actions';

export default function evalReducer(state, action) {
    const { type, payload } = action;

    const evalState = state;

    console.log('evalState', evalState);

    if (type === MULTIPLE_CHOICE || type === INPUT_ANSWER || type === ONE_CHOICE) {
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

        if (type === MULTIPLE_CHOICE) {
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
        if (type === INPUT_ANSWER) {
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
        if (type === ONE_CHOICE) {
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
    if (type === IS_COMPLETE) {
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
            } else if (evalState.completedThemes.includes(themeId)) {
              evalState.completedThemes = evalState.completedThemes
              .filter((completedId) => completedId !== themeId);
            }
        }
    }
    if (type === COMPUTE_SCORE) {
        const themeId = payload;
        let score = 0;
        if (evalState) {
            const evalTheme = evalState.themes
            .find((theme) => theme.id === parseInt(themeId, 10));
            evalTheme.questions.forEach((question) => {
                question.givenAnswers.forEach((givenAnswer) => {
                    score += givenAnswer.weight;
                });
            });
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
        evalState.scoring = evalScore;
    }
    return evalState;
}

import {
    ADD_MULTIPLE_CHOICE,
    ADD_ONE_CHOICE,
    ADD_INPUT_ANSWER,
    IS_COMPLETE,
    COMPUTE_SCORE,
    DISPLAY_RECOS,
    COMPUTE_TOTAL_SCORE,
} from './actions';
import { MULTIPLE_CHOICE, NO_CHOICE, ONE_CHOICE } from '../constants';

export default function evalReducer(state, action) {
    const { type, payload } = action;

    const evalState = state;

    if (type === ADD_MULTIPLE_CHOICE || type === ADD_INPUT_ANSWER || type === ADD_ONE_CHOICE) {
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

        if (type === ADD_MULTIPLE_CHOICE) {
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
        if (type === ADD_INPUT_ANSWER) {
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
        if (type === ADD_ONE_CHOICE) {
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
    if (type === DISPLAY_RECOS) {
      const themeId = payload;
      const evalTheme = evalState.themes
            .find((theme) => theme.id === parseInt(themeId, 10));

      if (evalTheme) {
        let negativAnswers = [];
        let notAnswered = [];
        let shouldList = [];

        evalTheme.questions.forEach((evalQuestion) => {
          negativAnswers = [...negativAnswers, ...evalQuestion.givenAnswers
            .filter((answer) => answer.answ_type === NO_CHOICE
            || (answer.answ_type === ONE_CHOICE && answer.label.toUpperCase() === 'NON'))];

          notAnswered = [...notAnswered, ...evalQuestion.answers
            .filter((answer) => answer.answ_type === MULTIPLE_CHOICE && !(evalQuestion.givenAnswers
                .find((givenAnswer) => givenAnswer.id === answer.id)) && answer.label.toUpperCase() !== 'NON')];
        });

        const shouldAnswers = notAnswered.concat(negativAnswers);

        shouldAnswers.forEach((shouldAnswer) => {
          shouldList = [...shouldList, ...shouldAnswer.shouldList
            .filter((reco) => !shouldList.find((should) => should.id === reco.id))];
        });

        evalTheme.shouldList = shouldList;
        const filteredThemes = evalState.themes
          .filter((theme) => theme.id !== parseInt(themeId, 10));
        evalState.themes = [...filteredThemes, evalTheme];
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

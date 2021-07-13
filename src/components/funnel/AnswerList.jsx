import PropTypes from 'prop-types';
import { useState } from 'react';
import Answer from './Answer';
import { FlexCol, FlexWrap } from '../../styles/generics/GenericContainers';
import { ONE_CHOICE } from '../../constants';

export default function AnswerList({ answers, questionId, themeId }) {
    const localStKey = `oneansw-${themeId}-${questionId}`;

    const initLocalSt = () => {
      const localStValue = localStorage.getItem(localStKey) || '';
      return localStValue;
    };

    const handleLocalSt = (value, checked) => {
      if (!checked) {
        localStorage.removeItem(localStKey);
      } else {
      localStorage.setItem(localStKey, value);
      }
    };

    const initState = initLocalSt();

    const [selectedOption, setSelectedOption] = useState(initState);

    const handleSelectedOption = (value, checked) => {
      setSelectedOption(value);
      handleLocalSt(value, checked);
    };

  return (
    <>
      {answers.length === 2 && answers[0].answ_type === ONE_CHOICE ? (
        <FlexCol>
          {answers.map((answer) => (
            <Answer
              key={answer.id}
              answer={answer}
              questionId={questionId}
              themeId={themeId}
              selectedOption={selectedOption}
              handleSelectedOption={handleSelectedOption}
            />
          ))}
        </FlexCol>
      ) : (
        <FlexWrap>
          {answers.map((answer) => (
            <Answer
              key={answer.id}
              answer={answer}
              questionId={questionId}
              themeId={themeId}
            />
          ))}
        </FlexWrap>
      )}
    </>
  );
}

AnswerList.propTypes = {
  answers: PropTypes.func.isRequired,
  questionId: PropTypes.number.isRequired,
  themeId: PropTypes.string.isRequired,
};

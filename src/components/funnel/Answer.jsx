import styled from 'styled-components';
import PropTypes from 'prop-types';
import { StyledInfosInput } from '../../styles/StyledInfosForms';

export const AnswerComponent = styled.div`
  margin:10px;
`;

export const StyledAnswerLabel = styled.span`
font-family: ${(props) => props.theme.fontFamilyFeature};
padding-left:6px;`;

export const StyledAnswerInput = styled(StyledInfosInput)`
width:60px;
`;

const MultipleChoiceAnswer = ({ label }) => (
  <>
    <input id="multiansw" type="checkbox" value="" />
    <StyledAnswerLabel htmlFor="multiansw">{label}</StyledAnswerLabel>
  </>
 );

const OneChoiceAnswer = ({ label }) => (
  <div>
    <input id="oneansw" type="radio" value="" />
    <StyledAnswerLabel htmlFor="oneansw">{label}</StyledAnswerLabel>
  </div>
);

 const InputAnswer = ({ label }) => (
   <>
     <StyledAnswerInput id="inansw" type="text" value="" />
     <StyledAnswerLabel htmlFor="inansw">{label}</StyledAnswerLabel>
   </>
);

export default function Answer({ answer }) {
  return (
    <AnswerComponent>
      {
        answer.answ_type === 'multiple_choice' && <MultipleChoiceAnswer label={answer.label} />
      }
      {
        answer.answ_type === 'one_choice' && <OneChoiceAnswer label={answer.label} />
      }
      {
        answer.answ_type === 'input_answ' && <InputAnswer label={answer.label} />
      }
    </AnswerComponent>
  );
}

Answer.propTypes = {
  answer: PropTypes.arrayOf(PropTypes.object).isRequired,
};

MultipleChoiceAnswer.propTypes = {
  label: PropTypes.string.isRequired,
};

OneChoiceAnswer.propTypes = {
  label: PropTypes.string.isRequired,
};

InputAnswer.propTypes = {
  label: PropTypes.string.isRequired,
};

import styled from 'styled-components';
import PropTypes from 'prop-types';
import AnswerList from './AnswerList';
import { StyledTitleH3 } from '../../styles/generics/GenericTitles';
import { Block } from '../../styles/generics/GenericContainers';
import { device } from '../../styles/theme';

export const StyledQuestionContainer = styled(Block)`
     
     @media ${device.mobileS}{
        background-color: #e7ecf4;
        margin-bottom:10px;
        margin-left:10px;
        width:290px;
        padding:10px;
    }

      @media ${device.mobileL}{
          background-color: #e7ecf4;
          margin-bottom:12px;
          margin-left:12px;
          width:380px;
          padding:15px;
      }

      @media ${device.tablet}{
          background-color: #e7ecf4;
          margin-bottom:15px;
          margin-left:15px;
          width:700px;
          padding:15px;
      }

      @media ${device.laptop}{
        background-color: #e7ecf4;
        margin-bottom:30px;
        margin-left:40px;
        width:900px;
        padding:25px;
    }

      @media ${device.desktop}{
          background-color: #e7ecf4;
          margin-bottom:50px;
          margin-left:40px;
          width:1200px;
          padding:45px;
      }
    `;

export default function Question({ title, answers }) {
  return (
    <StyledQuestionContainer>
      <StyledTitleH3>{title}</StyledTitleH3>
      <AnswerList answers={answers} />
    </StyledQuestionContainer>
  );
}

Question.propTypes = {
  title: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

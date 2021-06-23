import styled from 'styled-components';
import PropTypes from 'prop-types';
import AnswerList from './AnswerList';
import { StyledTitleH3 } from '../../styles/generics/GenericTitles';
import { Block, Flex } from '../../styles/generics/GenericContainers';
import { device } from '../../styles/theme';
import know from '../../assets/img/know.svg';
import { IconeImg } from '../../styles/generics/GenericComponents';

export const StyledQuestionContainer = styled(Block)`
  background-color: ${(props) => props.theme.whiteFeatureColor};

  @media ${device.mobileS} {
    margin-bottom: 10px;
    margin-left: 10px;
    width: 290px;
    padding: 10px;
  }

  @media ${device.mobileL} {
    margin-bottom: 12px;
    margin-left: 12px;
    width: 380px;
    padding: 15px;
  }

  @media ${device.tablet} {
    margin-bottom: 15px;
    margin-left: 15px;
    width: 700px;
    padding: 15px;
  }

  @media ${device.laptop} {
    margin-bottom: 30px;
    margin-left: 40px;
    width: 900px;
    padding: 25px;
  }

  @media ${device.desktop} {
    margin-bottom: 50px;
    margin-left: 40px;
    width: 1200px;
    padding: 45px;
  }
`;

export const IconeContainer = styled(Flex)`
  height: 5px;
`;

export const IconImg = styled(IconeImg)`
  height: 40px;
  width: 40px;
`;

export default function Question({ title, answers }) {
  return (
    <StyledQuestionContainer>
      <IconeContainer end>
        <IconImg src={know} alt="?" />
      </IconeContainer>
      <StyledTitleH3>{title}</StyledTitleH3>
      <AnswerList answers={answers} />
    </StyledQuestionContainer>
  );
}

Question.propTypes = {
  title: PropTypes.string.isRequired,
  answers: PropTypes.arrayOf(PropTypes.object).isRequired,
};

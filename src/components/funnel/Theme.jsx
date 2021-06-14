import styled from 'styled-components';
import PropTypes from 'prop-types';
import QuestionList from './QuestionList';
import { StyledButton } from '../../styles/genericStyles/StyledButtons';

export const ThemeContainer = styled.div`
  background-color: #ffffff;
`;

export const QuestionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export const StyledTitleTheme = styled.h1`
  color: ${(props) => props.theme.blueFeatureColor};
`;

export const StyledsubtitleTheme = styled.h4`
  color: ${(props) => props.theme.blueFeatureColor};
  font-family: ${(props) => props.theme.fontFamilyNormal};
  font-size: 1rem;
`;

export default function Theme({ title, icon, questions }) {
  return (
    <>
      <StyledsubtitleTheme>Evaluer mon événement</StyledsubtitleTheme>
      <img src={`../../assets/img-temp/${icon}`} alt={icon} />
      <StyledTitleTheme>{title}</StyledTitleTheme>
      <QuestionList questions={questions} />
      <StyledButton>Je ne m en sors pas !</StyledButton>
      <StyledButton>Précédent</StyledButton>
      <StyledButton>Suivant</StyledButton>
    </>
  );
}

Theme.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

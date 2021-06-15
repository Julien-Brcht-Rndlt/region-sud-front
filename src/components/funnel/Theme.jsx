import styled from 'styled-components';
import PropTypes from 'prop-types';
import QuestionList from './QuestionList';
import { StyledButton } from '../../styles/genericStyles/StyledButtons';
import { Flex, FlexCol } from '../../styles/genericStyles/GenericContainers';
import theme0 from '../../assets/img/theme0.png';
import { IconeImg } from '../../styles/genericStyles/GenericComponents';

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

export default function Theme({ title, questions }) {
  /* const [theme] = useState(funnel.themes[id]); */
  return (
    <>
      <Flex>
        <StyledsubtitleTheme>Evaluer mon événement</StyledsubtitleTheme>
        <IconeImg src={theme0} alt={title} />
      </Flex>
      <FlexCol>
        <StyledTitleTheme>{title}</StyledTitleTheme>
        <QuestionList questions={questions} />
        <StyledButton>Je ne m en sors pas !</StyledButton>
        <StyledButton>Précédent</StyledButton>
        <StyledButton>Suivant</StyledButton>
      </FlexCol>
    </>
  );
}

Theme.propTypes = {
  title: PropTypes.string.isRequired,
//  icon: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

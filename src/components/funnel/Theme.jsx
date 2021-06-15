import styled from 'styled-components';
import PropTypes from 'prop-types';
import QuestionList from './QuestionList';
import { StyledButton } from '../../styles/genericStyles/StyledButtons';
import { Flex, FlexCol } from '../../styles/genericStyles/GenericContainers';
import { IconeImg } from '../../styles/genericStyles/GenericComponents';
import help from '../../assets/img/help.png';

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
  margin-left:5px;
`;
export const CompButton = styled.div`
 margin-left:40px;
`;

export const MicroImg = styled.img`
height:30px;
`;

export default function Theme({ title, questions }) {
  /* const [theme] = useState(funnel.themes[id]); */
  return (
    <>
      <Flex>
        <IconeImg src="" alt="logo" />
        <StyledsubtitleTheme>Evaluer mon événement</StyledsubtitleTheme>
      </Flex>
      <FlexCol>
        <StyledTitleTheme>{title}</StyledTitleTheme>
        <QuestionList questions={questions} />
      </FlexCol>
      <CompButton>
        <StyledButton>
          <MicroImg src={help} />
          Je ne m&#39;en sors pas !
        </StyledButton>
      </CompButton>
      <Flex center>
        <StyledButton>Précédent</StyledButton>
        <StyledButton>Suivant</StyledButton>
      </Flex>
    </>
  );
}

Theme.propTypes = {
  title: PropTypes.string.isRequired,
//  icon: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

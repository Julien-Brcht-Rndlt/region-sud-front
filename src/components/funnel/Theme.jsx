import styled from 'styled-components';
import PropTypes from 'prop-types';
import QuestionList from './QuestionList';
import { StyledButton } from '../../styles/generics/GenericButtons';
import { Flex, FlexCol } from '../../styles/generics/GenericContainers';
import { IconeImg } from '../../styles/generics/GenericComponents';
import { StyledTitleH1, StyledTitleH4 } from '../../styles/generics/GenericTitles';
import help from '../../assets/img/help.png';

export const ThemeContainer = styled.div`
  background-color: #ffffff;
`;

export const QuestionListContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
`;

export const StyledTitleTheme = styled(StyledTitleH1)`
  color: ${(props) => props.theme.blueFeatureColor};
  margin-left:40px;
  font-size:1.9rem;
`;

export const StyledSubtitleTheme = styled(StyledTitleH4)`
  margin-left:5px;
`;
export const CompButton = styled.div`
 margin-left:40px;
`;

export const MicroImg = styled.img`
height:30px;
`;

export const ContainersubtitleTheme = styled(Flex)`
margin-left:40px;
margin-top:20px;
`;

export default function Theme({ title, questions, icon }) {
  /* const [theme] = useState(funnel.themes[id]); */
  return (
    <>
      <ContainersubtitleTheme>
        <IconeImg src={icon} alt="logo" />
        <StyledSubtitleTheme>Evaluer mon événement</StyledSubtitleTheme>
      </ContainersubtitleTheme>
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
  icon: PropTypes.string.isRequired,
  questions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

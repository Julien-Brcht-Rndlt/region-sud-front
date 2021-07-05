import { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FunnelContext from '../../contexts/FunnelContext';
import QuestionList from './QuestionList';
import { StyledButton } from '../../styles/generics/GenericButtons';
import { Flex, FlexCol } from '../../styles/generics/GenericContainers';
import { IconeImg } from '../../styles/generics/GenericComponents';
import { StyledTitleH1, StyledTitleH4 } from '../../styles/generics/GenericTitles';
import help from '../../assets/img/help.png';
import { device } from '../../styles/theme';

export const ThemeContainer = styled.div`
  background-color: ${(props) => props.theme.secondaryFeatureColor};
`;

export const QuestionListContainer = styled(FlexCol)`
  flex-wrap: nowrap;
`;

export const StyledTitleTheme = styled(StyledTitleH1)`
  @media ${device.mobileS} {
    font-size: 1.2rem;
  }

  @media ${device.tablet} {
    font-size: 1.7rem;
  }

  @media ${device.laptop} {
    color: ${(props) => props.theme.blueFeatureColor};
    margin-left: 40px;
    font-size: 1.9rem;
  }
`;

export const StyledSubtitleTheme = styled(StyledTitleH4)`
  margin-left: 5px;
`;
export const CompButton = styled.div`
  margin-left: 40px;
`;

export const MicroImg = styled.img`
  height: 30px;
`;

export const ContainersubtitleTheme = styled(Flex)`
  @media ${device.mobileS} {
    margin-left: 5px;
    margin-top: 5px;
  }

  @media ${device.mobileL} {
    margin-left: 10px;
    margin-top: 10px;
  }

  @media ${device.laptop} {
    margin-left: 40px;
    margin-top: 20px;
  }
`;

export const StyledBorderYellow = styled.div`
  @media ${device.mobileS} {
    display: none;
  }

  @media ${device.mobileL} {
    display: none;
  }

  @media ${device.laptop} {
    display: flex;
    border-bottom: 10px solid ${(props) => props.theme.yellowFeatureColor};
    width: 50px;
    padding-right: 30px;
    margin: 65px;
    margin-left: 45px;
    position: absolute;
  }
`;

export const StyledContainerYellow = styled.div`
  @media ${device.mobileS} {
    padding-left: 5px;
  }

  @media ${device.laptop} {
    display: flex;
    padding-left: 10px;
  }
`;

export default function Theme({ id }) {
  const { funnel } = useContext(FunnelContext);
  const theme = funnel.themes[id];
  const lengthThemes = funnel.themes.length - 1;

  return (
    <>
      <ContainersubtitleTheme>
        <IconeImg src={theme.icon} alt="logo" />
        <StyledSubtitleTheme>Evaluer mon événement</StyledSubtitleTheme>
      </ContainersubtitleTheme>
      <FlexCol>
        <StyledContainerYellow>
          <StyledTitleTheme>{theme.title}</StyledTitleTheme>
          <StyledBorderYellow />
        </StyledContainerYellow>
        <QuestionList questions={theme.questions} />
      </FlexCol>
      <CompButton>
        <StyledButton>
          <MicroImg src={help} />
          Je ne m&#39;en sors pas !
        </StyledButton>
      </CompButton>
      <Flex center>
        <StyledButton>Précédent</StyledButton>
        {id < lengthThemes ? (
          <Link to={`/EmiEval/${parseInt(id, 10) + 1}`}>
            <StyledButton>Suivant</StyledButton>
          </Link>
        ) : (
          <Link to="/">
            <StyledButton>Terminé</StyledButton>
          </Link>
        )}
      </Flex>
    </>
  );
}

Theme.propTypes = {
  id: PropTypes.number.isRequired,
};

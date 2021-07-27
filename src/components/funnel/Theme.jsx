import { useState, useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import FunnelContext from '../../contexts/FunnelContext';
import QuestionList from './QuestionList';
import { StyledButton } from '../../styles/generics/GenericButtons';
import { Flex, FlexCol } from '../../styles/generics/GenericContainers';
import { IconeImg } from '../../styles/generics/GenericComponents';
import { StyledTitleH1, StyledTitleH4 } from '../../styles/generics/GenericTitles';
import { device } from '../../styles/theme';
import ButtonHelp from './ButtonWithIcon';
import EmiFaqModal from '../faq/EmiFaqModal';

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
export const CompButton = styled(Flex)`
  margin-left: 40px;
`;

export const CompIconText = styled(Flex)`
  align-items: center;
  justify-content: space-around;
`;

export const StyledButtonHelp = styled(StyledButton)``;

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
  const [show, setShow] = useState(false);
  const { funnel } = useContext(FunnelContext);
  const currTheme = funnel.themes && funnel.themes.find((theme) => theme.id === parseInt(id, 10));

  return (
    <>
      {currTheme && (
        <FlexCol>
          <ContainersubtitleTheme id="section-theme">
            <IconeImg src={currTheme.icon} alt="logo" />
            <StyledSubtitleTheme>Evaluer mon événement</StyledSubtitleTheme>
          </ContainersubtitleTheme>
          <StyledContainerYellow>
            <StyledTitleTheme>{currTheme.title}</StyledTitleTheme>
            <StyledBorderYellow />
          </StyledContainerYellow>
          <QuestionList questions={currTheme.questions} themeId={id} />
          <EmiFaqModal show={show} setShow={setShow} />
          <CompButton>
            <ButtonHelp setShow={setShow} />
          </CompButton>
        </FlexCol>
      )}
    </>
  );
}

Theme.propTypes = {
  id: PropTypes.string.isRequired,
};

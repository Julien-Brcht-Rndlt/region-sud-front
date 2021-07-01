import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { StyledTitleH1, StyledTitleH4 } from '../../styles/generics/GenericTitles';
import { FlexSpace } from '../../styles/generics/GenericContainers';
import { StyledRoundedButton } from '../../styles/generics/GenericButtons';
import RequireElmtsList from './RequireElmtsList';
import { device } from '../../styles/theme';

export const StyledBorderH1 = styled.div`
  @media ${device.mobileS} {
    width: 10px;
  }

  @media ${device.tablet} {
    border-bottom: 10px solid ${(props) => props.theme.yellowFeatureColor};
    width: 80px;
    margin-top: 50px;
  }

  @media ${device.laptop} {
    border-bottom: 10px solid ${(props) => props.theme.yellowFeatureColor};
    width: 80px;
    margin-top: 50px;
  }
`;

export const StyledColumnElmts = styled.div`
  padding: 25px;
`;

export const StyledBoxButtonElement = styled(FlexSpace)`
  @media ${device.mobileL} {
    width: 375px;
  }
  @media ${device.tablet} {
    width: 480px;
  }
  @media ${device.laptop} {
    width: 580px;
    height: 10px;
  }
  @media ${device.laptopL} {
    width: 620px;
  }
`;

export const StyledReqTitleH1 = styled(StyledTitleH1)`
  @media ${device.mobileS} {
    height: 60px;
    font-size: 20px;
  }
  @media ${device.tablet} {
    height: 15px;
    font-size: 25px;
  }

  @media ${device.laptop} {
    height: 15px;
    font-size: 25px;
  }
`;

export default function RequireInfos() {
  return (
    <>
      <StyledColumnElmts>
        <StyledReqTitleH1>Avant de commencer l&#39;évaluation de mon évènement :</StyledReqTitleH1>
        <StyledBorderH1 />
        <StyledTitleH4> J&#39;aurais besoin de :</StyledTitleH4>
        <RequireElmtsList />
        <StyledBoxButtonElement>
          <StyledRoundedButton>C&#39;est parti !</StyledRoundedButton>
          <Link to="/RequireModal">
            <StyledRoundedButton glassy>Où trouver toutes ces pièces ?</StyledRoundedButton>
          </Link>
        </StyledBoxButtonElement>
      </StyledColumnElmts>
    </>
  );
}

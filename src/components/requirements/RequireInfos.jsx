import styled from 'styled-components';
import { HashLink } from 'react-router-hash-link';
import { StyledTitleH1 } from '../../styles/generics/GenericTitles';
import { FlexSpace } from '../../styles/generics/GenericContainers';
import { StyledButton } from '../../styles/generics/GenericButtons';
import RequireElmtsList from './RequireElmtsList';
import { device } from '../../styles/theme';

export const StyledBorderH1 = styled.div`
  border-bottom: 3px solid ${(props) => props.theme.yellowFeatureColor};
  @media ${device.mobileS} {
    width: 10px;
  }

  @media ${device.tablet} {
    width: 80px;
    margin-top: 50px;
  }

  @media ${device.laptop} {
    width: 80px;
    margin-top: 50px;
  }
`;

export const StyledColumnElmts = styled.div`
  padding: 5rem 20rem 8rem 20rem;
  margin: 1rem 3rem;
  background: #e5e5e5;
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

const Title = styled.h1`
  font-family: ${(props) => props.theme.fontFamilyFeature};
  color: #0a40a2;
  font-weight: 400;
  font-size: 1.6rem;
`;

const SubTitle = styled(StyledReqTitleH1)`
  color: #0a40a2;
  font-family: ${(props) => props.theme.fontFamilyNormal};
`;

const TitleH2 = styled(Title)`
  margin: 2rem 0;
  font-size: 1.5rem;
`;

const Button = styled(StyledButton)`
  font-family: ${(props) => props.theme.fontFamilyNormal};
  padding: 1rem 1.5rem;
  border-radius: 3px;
`;

export default function RequireInfos() {
  return (
    <>
      <StyledColumnElmts>
        <SubTitle>Avant de commencer l&#39;évaluation de mon évènement :</SubTitle>
        <StyledBorderH1 />
        <TitleH2> J&#39;aurais besoin de :</TitleH2>
        <RequireElmtsList />
        <StyledBoxButtonElement>
          <HashLink to="/EmiStart#section-form">
            <Button>C&#39;est parti !</Button>
          </HashLink>
          <HashLink to="/RequireModal">
            <Button glassy>Où trouver toutes ces pièces ?</Button>
          </HashLink>
        </StyledBoxButtonElement>
      </StyledColumnElmts>
    </>
  );
}

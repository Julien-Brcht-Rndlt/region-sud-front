import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FlexCol } from '../../styles/generics/GenericContainers';
import { StyledTitleP } from '../../styles/generics/GenericTitles';
import { StyledButton } from '../../styles/generics/GenericButtons';
import { device } from '../../styles/theme';

export const StyledTitleWrapper = styled(FlexCol)`
  align-items: stretch;
  justify-content: flex-start;
  flex-wrap: nowrap;
  align-content: stretch;
`;

export const StyledBorderYellowH1 = styled.hr`
  background-color: #feca5a;
  width: 80px;
  height: 5px;

  @media ${device.mobileS} {
    padding-right: 10px;
  }

  @media ${device.mobileM} {
    padding-right: 5px;
  }

  @media ${device.mobileL} {
    padding-right: 15px;
  }

  @media ${device.tablet} {
    background-color: #feca5a;
    border: none;
    width: 80px;
    height: 5px;
    margin-left: 0;
  }
  @media ${device.desktop} {
    border-bottom: 10px solid ${(props) => props.theme.yellowFeatureColor};
    width: 80px;
    height: 5px;
    padding-right: 15px;
  }
`;

export const StyledTitleHomeH1 = styled.h3`
  font-family: ${(props) => props.theme.fontFamilyFeature};
  color: ${(props) => props.theme.secondaryTextColor};
  font-weight: 400;
  margin: 5px 0;

  @media ${device.mobileS} {
    font-size: 1.6em;
    padding-top: 5px;
    padding-left:5px;
  }

  @media ${device.tablet} {
    font-size: 2em;
    padding-left:5px;
  }

  @media ${device.desktop} {
    font-size: 2rem;
    padding-left: 15px;
    height: 10px;
  }
`;

export const StyledTitleHomeH2 = styled.h3`
  font-family: ${(props) => props.theme.fontFamilyFeature};
  color: ${(props) => props.theme.secondaryTextColor};
  margin: 10px 0;
  font-weight: 400;

  @media ${device.mobileS} {
    font-size: 1.4em;
    padding-left:5px;
  }

  @media ${device.tablet} {
    font-size: 1.6em;
    padding-left:5px;
  }

  @media ${device.desktop} {
    font-size: 1.8rem;
  }
`;

export const StyledButtonHP = styled(StyledButton)`
  @media ${device.mobileS} {
    font-size: 1em;
    padding: 15px 35px;
    margin: 30px 40px;
    border-radius: 5px;
    background: ${(props) => props.theme.secondaryTextColor};
  }

  @media ${device.mobileM} {
    font-size: 1.2em;
    padding: 10px 35px;
    margin: 30px 70px;
  }

  @media ${device.tablet} {
    font-size: 1.6em;
    padding: 20px 40px;
  }

  @media ${device.desktop} {
    font-size: 30px;
    padding: 20px 40px;
  }
`;

export default function TitleHome() {
  return (
    <StyledTitleWrapper stretch>
      <StyledTitleHomeH1>
        ORGANISER UN ??V??NEMENT
      </StyledTitleHomeH1>
      <StyledTitleHomeH2>
        DANS LE RESPECT DE L&apos;ENVIRONNEMENT
      </StyledTitleHomeH2>
      <StyledBorderYellowH1 />
      <StyledTitleP>
        <p>Un outil innovant qui permet de :</p>
        <ul>
          <li>Calculer son impact sur l&apos;environnement</li>
          <li>Recevoir des recommandations pour r??duire son impact</li>
          <li>Devenir acteur du territoire: participation ?? une action collective</li>
        </ul>
        <Link to="/EmiStart">
          <StyledButtonHP width="11em">
            J&#39;??value mon ??v??nement
          </StyledButtonHP>
        </Link>
      </StyledTitleP>
    </StyledTitleWrapper>
  );
}

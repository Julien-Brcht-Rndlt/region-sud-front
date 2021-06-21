import styled from 'styled-components';
import { Flex, FlexSpace, FlexCol } from '../../styles/generics/GenericContainers';
import { IconeImg } from '../../styles/generics/GenericComponents';
import clock from '../../assets/img/clockPictureEmi.png';
import folder from '../../assets/img/folderPictureEmi.png';
import plus from '../../assets/img/plusPictureEmi.png';
import { device } from '../../styles/theme';

export const StyledRequirePlus = styled.img`
  padding: 10px;
  height: 25px;
  width: 25px;
`;

export const StyledRequireTime = styled(Flex)`
  padding: 15px;
  border: solid 1px black;
  height: 20px;
  width: 50px;
  float: left;
  color: black;
`;

export const StyledRequireIconesWrapper = styled(FlexSpace)`
  width: 120%;
  flex-wrap: wrap;
  padding: 25px;
`;

export const StyledRequireWrapper = styled(FlexCol)`
  width: 70%;

  ul {
    @media ${device.mobileS} {
      width: 260px;
      padding-left: 2px;
    }

    @media ${device.mobileL} {
      width: 300px;
      padding-left: 2px;
    }

    @media ${device.tablet} {
      width: 300px;
    }
    @media ${device.laptop} {
      width: 400px;
    }
  }

  ul li {
    font-family: ${(props) => props.theme.fontFamilyFeature};
    @media ${device.mobileS} {
      line-height: 1.4;
    }
    @media ${device.tablet} {
      line-height: 1.6;
    }
    @media ${device.laptop} {
      line-height: 2.3;
      font-size: 1em;
    }
  }
`;

export default function RequireElmtsList() {
  return (
    <StyledRequireWrapper halign="space-between">
      <StyledRequireIconesWrapper around>
        <IconeImg src={folder} alt="dossier" />
        <StyledRequirePlus src={plus} alt="plus" />
        <IconeImg src={clock} alt="horloge" />
        <StyledRequireTime>15min</StyledRequireTime>
      </StyledRequireIconesWrapper>

      <ul>
        <li>Estimation de la consommation d&#39;eau pendant la manifestation</li>
        <li>Elément nécessaire</li>
        <li>Elément nécessaire</li>
        <li>Elément nécessaire</li>
        <li>Elément nécessaire</li>
      </ul>
    </StyledRequireWrapper>
  );
}

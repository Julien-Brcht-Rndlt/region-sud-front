import styled from 'styled-components';
import { Flex, FlexSpace, FlexCol } from '../../styles/generics/GenericContainers';
import { IconeImg } from '../../styles/generics/GenericComponents';
import clock from '../../assets/img/clockPictureEmi.png';
import folder from '../../assets/img/folderPictureEmi.png';
import plus from '../../assets/img/plusPictureEmi.png';

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
  width: 65%;

  ul li {
    line-height: 3;
    font-size: 20px;
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

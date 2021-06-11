import styled from 'styled-components';
import clock from '../../assets/img/clockPictureEmi.png';
import folder from '../../assets/img/folderPictureEmi.png';
import plus from '../../assets/img/plusPictureEmi.png';
import { StyledRoundedButton } from '../../assets/styles/genericStyles/StyledButtons';

export const StyledClockNeederEmi = styled.img`
  height: 50px;
  width: 50px;
`;

export const StyledFolderNeederEmi = styled.img`
  height: 50px;
  width: 50px;
`;

export const StyledPlusNeederEmi = styled.img`
  padding: 10px;
  height: 25px;
  width: 25px;
`;

export const StyledFiveTeenNeederEmi = styled.p`
  display: flex;
  padding: 5px;
  border: solid 1px black;
  width: auto;
  float: left;
  color: black;
`;

export const StyledSpaceNeederEmi = styled.div`
  width: 50px;
  display: flex;
`;
export const StyledSpaceBetterNeederEmi = styled.div`
  display: flex;
  width: 80%;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const StyledBoxElementEmi = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 65%;

  ul li {
    line-height: 4;
  }
`;
export const StyledBoxButtonElement = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
`;

export default function EmiListElements() {
  return (
    <StyledBoxElementEmi>
      <StyledSpaceBetterNeederEmi>
        <StyledFolderNeederEmi src={folder} alt="dossier" />
        <StyledPlusNeederEmi src={plus} alt="plus" />
        <StyledClockNeederEmi src={clock} alt="horloge" />
        <StyledFiveTeenNeederEmi>15min</StyledFiveTeenNeederEmi>
      </StyledSpaceBetterNeederEmi>

      <ul>
        <li>
          Estimation de la consommation d&#39;eau pendant la manifestation
        </li>
        <li>Elément nécessaire</li>
        <li>Elément nécessaire</li>
        <li>Elément nécessaire</li>
        <li>Elément nécessaire</li>
      </ul>
      <StyledBoxButtonElement>
        <StyledRoundedButton>C&#39;est parti !</StyledRoundedButton>
        <StyledRoundedButton glassy>
          Où trouver toutes ces pièces ?
        </StyledRoundedButton>
      </StyledBoxButtonElement>
    </StyledBoxElementEmi>
  );
}

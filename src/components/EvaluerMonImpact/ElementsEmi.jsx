import styled from 'styled-components';
import clock from '../Group59.png';
import folder from '../Vector.png';
import {
  StyledButtonEmpty,
  StyledButtonFilled,
} from '../../assets/styles/genericStyles/StyledButton';

export const StyledClockNeederEmi = styled.img`
  height: 50px;
  width: 50px;
`;

export const StyledFolderNeederEmi = styled.img`
  height: 50px;
  width: 50px;
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

export default function ElementEmi() {
  return (
    <StyledBoxElementEmi>
      <StyledSpaceBetterNeederEmi>
        <StyledFolderNeederEmi src={folder} alt="dossier" />
        <StyledClockNeederEmi src={clock} alt="horloge" />
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
        <StyledButtonFilled>C&#39;est parti !</StyledButtonFilled>
        <StyledButtonEmpty>Où trouver toutes ces pièces ?</StyledButtonEmpty>
      </StyledBoxButtonElement>
    </StyledBoxElementEmi>
  );
}

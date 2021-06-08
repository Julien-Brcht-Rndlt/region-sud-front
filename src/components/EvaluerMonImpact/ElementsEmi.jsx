import styled from 'styled-components';
import clock from '../Group59.png';
import folder from '../Vector.png';

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
`;

export default function ElementEmi() {
  return (
    <StyledBoxElementEmi>
      <StyledSpaceBetterNeederEmi>
        <StyledFolderNeederEmi src={folder} alt="dossier" />
        <StyledClockNeederEmi src={clock} alt="horloge" />
      </StyledSpaceBetterNeederEmi>
      <p>Estimation de la consommation d&#39;eau pendant la manifestation</p>
      <p>Elément nécessaire</p>
      <p>Elément nécessaire</p>
      <p>Elément nécessaire</p>
      <p>Elément nécessaire</p>
    </StyledBoxElementEmi>
  );
}

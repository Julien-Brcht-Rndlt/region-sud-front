import styled from 'styled-components';
import clock from '../Group59.png';
import { StyledImageContainer } from '../ImageHomePage';
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
  width: 350px;
`;

export default function ImageNeederEmi() {
  return (
    <StyledImageContainer>
      <StyledFolderNeederEmi src={folder} alt="dossier" />
      <StyledSpaceNeederEmi>+</StyledSpaceNeederEmi>
      <StyledClockNeederEmi src={clock} alt="horloge" />
    </StyledImageContainer>
  );
}

import styled from 'styled-components';
import FaqHeadPicture from '../../assets/img/FaqHeadPicture.png';

export const StyledFaqHeaderContainer = styled.div`
  display: flex;
  width: auto;
  height: 80px;
  align-items: center;
  margin-left: 50px;
`;

export const StyledHeadPicture = styled.img`
  padding: 20px;
  height: 60px;
  width: 60px;
`;

export const StyledTitleHelp = styled.h1`
  color: black;
`;

export default function FaqHeader() {
  return (
    <StyledFaqHeaderContainer>
      <StyledHeadPicture src={FaqHeadPicture} alt="HeadPciture" />
      <StyledTitleHelp>Aide</StyledTitleHelp>
    </StyledFaqHeaderContainer>
  );
}

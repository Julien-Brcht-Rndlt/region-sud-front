import styled from 'styled-components';
import FaqHeadPicture from '../../assets/img/FaqHeadPicture.png';

export const StyledFaqHeaderContainer = styled.div`
  display: flex;
  border: 5px solid green;
  width: auto;
  height: 100px;
  align-items: center;
`;

export const StyledHeadPicture = styled.img`
  padding: 60px;
  height: 60px;
  width: 60px;
`;

export const StyledTitleHelp = styled.h1`
  color: ${(props) => props.theme.blueFeatureColor};
`;

export default function FaqHeader() {
  return (
    <StyledFaqHeaderContainer>
      <StyledHeadPicture src={FaqHeadPicture} alt="HeadPciture" />
      <StyledTitleHelp>Aide</StyledTitleHelp>
    </StyledFaqHeaderContainer>
  );
}

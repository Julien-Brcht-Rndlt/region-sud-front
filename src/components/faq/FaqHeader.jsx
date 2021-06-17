import styled from 'styled-components';
import FaqHeadPicture from '../../assets/img/FaqHeadPicture.png';
import { Flex } from '../../styles/generics/GenericContainers';

export const StyledFaqHeaderContainer = styled(Flex)`
  width: auto;
  height: 80px;
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
    <StyledFaqHeaderContainer start>
      <StyledHeadPicture src={FaqHeadPicture} alt="HeadPciture" />
      <StyledTitleHelp>Aide</StyledTitleHelp>
    </StyledFaqHeaderContainer>
  );
}

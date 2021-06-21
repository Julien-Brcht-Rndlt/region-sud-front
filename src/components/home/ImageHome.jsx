import styled from 'styled-components';
import { Flex } from '../../styles/generics/GenericContainers';
import image from '../../assets/img/top_image.jpg';

export const StyledImageHome = styled.img`
  height: 340px;
  width: 100%;
`;

export default function ImageHome() {
  return (
    <Flex>
      <StyledImageHome src={image} alt="régate de voiliers" />
    </Flex>
  );
}

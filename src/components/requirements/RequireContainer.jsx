import styled from 'styled-components';
import { Flex } from '../../styles/generics/GenericContainers';
import RequireInfos from './RequireInfos';
import RequireYoutube from './RequireYoutube';
import { device } from '../../styles/theme';

export const StyledRequireContainer = styled(Flex)`
  @media ${device.mobileS}{
    flex-direction:column;
    display:flex;
    width:300px;
  }

  @media ${device.tablet}{
    flex-direction:column;
    display:flex;
    width:700px;
  }

   @media ${device.laptop}{
  width: auto;
  height: 900px;
  padding: 35px;
  display:flex;
  flex-direction:row;
  flex-wrap:wrap;
  }
`;

export const StyledRequireContainerRigth = styled.div``;

export default function RequireContainer() {
  return (
    <StyledRequireContainer>
      <RequireInfos />
      <RequireYoutube />
    </StyledRequireContainer>
  );
}

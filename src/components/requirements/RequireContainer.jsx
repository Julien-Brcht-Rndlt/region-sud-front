import styled from 'styled-components';
import { Flex } from '../../styles/generics/GenericContainers';
import RequireInfos from './RequireInfos';
import RequireYoutube from './RequireYoutube';

export const StyledRequireContainer = styled(Flex)`
  width: auto;
  height: 900px;
  padding: 35px;
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

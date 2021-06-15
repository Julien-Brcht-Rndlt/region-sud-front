import styled from 'styled-components';
import { FlexCol } from '../../styles/genericStyles/GenericContainers';
import RequireInfos from './RequireInfos';
import RequireYoutube from './RequireYoutube';

export const StyledRequireContainer = styled(FlexCol)`
  display: flex;
  width: auto;
  height: 900px;
  flex-direction: row;
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

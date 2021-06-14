import styled from 'styled-components';
import { FlexCol } from '../../styles/genericStyles/GenericContainers';
import RequireInfos from './RequireInfos';
import RequireYoutube from './RequireYoutube';

export const StyledRequireContainer = styled(FlexCol)`
  width: auto;
  height: 900px;
`;

export default function RequireContainer() {
  return (
    <StyledRequireContainer>
      <RequireInfos />
      <RequireYoutube />
    </StyledRequireContainer>
  );
}

import styled from 'styled-components';
import { Flex } from '../../styles/generics/GenericContainers';

export const StyledSiteName = styled(Flex)`
  float: left;
  width: 30%;
  color: ${(props) => props.theme.secondaryFeatureColor};
  flex-direction: top;

  h1 {
    font-size: 40px;
    padding: 1px;
    align-items: center;
  }
`;

export default function SiteName() {
  return (
    <StyledSiteName>
      <h1>Nom Du Site</h1>
    </StyledSiteName>
  );
}

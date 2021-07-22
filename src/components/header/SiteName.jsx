import styled from 'styled-components';
import { Flex } from '../../styles/generics/GenericContainers';

export const StyledSiteName = styled(Flex)`
  float: left;
  width: 30%;
  color: ${(props) => props.theme.secondaryFeatureColor};
  font-family: ${(props) => props.theme.fontFamilyFeature};
  flex-direction: top;

  h1 {
    font-size: 40px;
    padding: 0px 20px;
    align-items: center;
  }
`;

export default function SiteName() {
  return (
    <StyledSiteName>
      <h1>EVAL EVENT</h1>
    </StyledSiteName>
  );
}

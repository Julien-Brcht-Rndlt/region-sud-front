import styled from 'styled-components';
import { Flex } from '../../styles/generics/GenericContainers';
import { device } from '../../styles/theme';

export const StyledSiteName = styled(Flex)`
@media ${device.mobileS} {
  width: 20%;
  color: ${(props) => props.theme.secondaryFeatureColor};
  font-family: ${(props) => props.theme.fontFamilyFeature};
}
h1 {
    font-size: 13px;
    padding: 0px 10px;
    align-items: left;
  }

  @media ${device.mobileL} {
  width: 25%;
  }
  
  @media ${device.tablet} {
  width: 30%;
  color: ${(props) => props.theme.secondaryFeatureColor};
  font-family: ${(props) => props.theme.fontFamilyFeature};
}
h1 {
    font-size: 15px;
    padding: 0px 10px;
    align-items: left;
  }

@media ${device.laptop} {
  float: left;
  flex-direction: top;

  h1 {
    font-size: 40px;
    padding: 0px 20px;
    align-items: center;
  }
}
`;

export default function SiteName() {
  return (
    <StyledSiteName>
      <h1>EVAL EVENT</h1>
    </StyledSiteName>
  );
}

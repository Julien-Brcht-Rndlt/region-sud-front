import styled from 'styled-components';

export const StyledSiteName = styled.div`
  display: flex;
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

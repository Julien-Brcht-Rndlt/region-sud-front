import styled from 'styled-components';
import { StyledTitleH1, StyledTitleP } from '../../styles/genericStyles/GenericTitles';
import { StyledButton } from '../../styles/genericStyles/StyledButtons';

export const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  margin-left: 50px;
  max-width: 500px;
`;
export const StyledBorderYellowH1 = styled.div`
  border-bottom: 10px solid ${(props) => props.theme.yellowFeatureColor};
  width: 80px;
  height: 10px;
  padding-right: 15px;
`;
export const StyledTitleHomeH1 = styled(StyledTitleH1)`
  height: 10px;
`;

export default function TitleHome() {
  return (
    <StyledTitleWrapper>
      <StyledTitleHomeH1> Lorem ipsum dolor sit amet?</StyledTitleHomeH1>
      <StyledBorderYellowH1 />
      <StyledTitleP>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>sit amet, consectetur adipiscing elit</li>
        </ul>
        <StyledButton width="20rem" height="60px">
          J&#39;évalue mon évènement
        </StyledButton>
      </StyledTitleP>
    </StyledTitleWrapper>
  );
}

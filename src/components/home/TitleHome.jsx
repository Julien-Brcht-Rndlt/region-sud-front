import styled from 'styled-components';
import {
  StyledTitleH1,
  StyledTitleP,
} from '../../styles/genericStyles/GenericTitles';
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

export default function TitleHome() {
  return (
    <StyledTitleWrapper>
      <StyledTitleH1> Lorem ipsum dolor sit amet?</StyledTitleH1>
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

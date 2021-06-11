import {
  StyledTitleH1,
  StyledTitleP,
  StyledTitleWrapper,
} from '../../styles/genericStyles/StyledTitle';
import { StyledButton } from '../../styles/genericStyles/StyledButtons';

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
        <StyledButton>J&#39;évalue mon évènement</StyledButton>
      </StyledTitleP>
    </StyledTitleWrapper>
  );
}

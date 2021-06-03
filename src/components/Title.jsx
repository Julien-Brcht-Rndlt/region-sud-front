import {
  StyledTitleH1,
  StyledTitleP,
  StyledTitleWrapper,
} from '../styles/StyledTitle';
import Button from './Button';

export default function Title() {
  return (
    <StyledTitleWrapper>
      <StyledTitleH1> Lorem ipsum dolor sit amet?</StyledTitleH1>
      <StyledTitleP>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>sit amet, consectetur adipiscing elit</li>
        </ul>
        <Button text="J'évalue mon événement" />
      </StyledTitleP>
    </StyledTitleWrapper>
  );
}

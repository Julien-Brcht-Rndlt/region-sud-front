import {
  FooterTextContainer,
  FooterTextTitle,
  FooterTextLine,
} from '../styles/StyledFooter';

export default function FooterText({ title, lines }) {
  return (
    <FooterTextContainer>
      <FooterTextTitle>{title}</FooterTextTitle>
      {lines.map((line) => (
        <FooterTextLine>{line}</FooterTextLine>
      ))}
    </FooterTextContainer>
  );
}

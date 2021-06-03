import styled from 'styled-components';

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: rgb(0, 90, 255);
  height: 577px;
  padding: 15px;
  color: #fff;
`;

export const FooterContWithBorder = styled.div`
  border: 2px solid white;
  outline-offset: 0.1rem;
  height: 424px;
  width: 60%;
  padding: 25px;
  text-align: center;
`;

export const FooterTextsContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const FooterTextContainer = styled.div`
  text-align: center;
`;

export const FooterTextTitle = styled.h4``;

export const FooterTextLine = styled.div``;

export const FooterLinksList = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 60%;
  list-style-type: none;
  transform: translate(0, -55px);
`;

export const FooterLinksALink = styled.a`
  color: #fff;
`;

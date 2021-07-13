/* import React from 'react';
import { Image } from '@react-pdf/renderer';
import styled from 'styled-components';

export const TitleH2 = styled.h2``;

export const TitleH3 = styled.h3``;

export const TitleTheme = (theme) => {
  const { title } = theme;
  return (
    <TitleH2>
      {title}
    </TitleH2>
  );
};

export const TitleContain = (theme) => {
  <>
    <Image src={theme.icone} />
    <TitleContain>{theme.title}</TitleContain>
    {theme.questions.map((question) => {
      <h3>{question.title}</h3>;
    })}
  </>;
};

export const DocumentTitle = () => {
  <h1>Evaluer mon Impact: Résultats du sondage</h1>;
};

export default function EvalResultDocument() {
  return <></>;
}
 */

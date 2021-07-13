import React from 'react';
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

export const TitleContain = (title) => {
  <TitleH3>
    {title}
  </TitleH3>;
};

export const DocumentTitle = () => {
  <h1>Evaluer mon Impact: Résultats du sondage</h1>;
};

export default function EvalResultDocument() {
  return <></>;
}

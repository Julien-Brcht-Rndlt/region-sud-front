import React from 'react';
import styled from 'styled-components';
import { Text, View } from '@react-pdf/renderer';

export const TitleH2 = styled.h2``;

export const TitleTheme = (theme) => {
  const { title } = theme;
  return (
    <TitleH2>
      {title}
    </TitleH2>
  );
};

export const TitleContain = (theme) => {
  <View>
    <Text>
      <TitleTheme theme={theme} />
    </Text>
  </View>;
};

export const DocumentTitle = () => {
  <View>
    <Text>
      <h1>Evaluer mon Impact: Résultats du sondage</h1>
    </Text>
  </View>;
};

export default function EvalResultDocument() {
  return <></>;
}

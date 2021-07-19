import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const TitleH2 = styled.h2``;

export const TitleH3 = styled.h3``;

export const ContainMap = styled.div``;

export const TitleTheme = ({ title }) => <TitleH2>{title}</TitleH2>;

export const QuestionTheme = ({ question }) => <TitleH3>{question.title}</TitleH3>;

export const TitleContain = () => {

};

export const DocumentTitle = () => {
  <h1>Evaluer mon Impact: Résultats du sondage</h1>;
};

export default function EvalResultDocument() {
  return <></>;
}

TitleTheme.propTypes = {
  title: PropTypes.string.isRequired,
};

QuestionTheme.propTypes = {
  question: PropTypes.objectOf.isRequired,
};

import styled from 'styled-components';
import React from 'react';
import FunnelContext from '../../contexts/FunnelContext';
import Theme from './Theme';
import EvalThemeResult from '../emi/EvalThemeResult';
import EvalThemeScoring from '../emi/EvalThemeScoring';

export const StyledTitleTheme = styled.h1`
  color: ${(props) => props.theme.blueFeatureColor};
  font-family: ${(props) => props.theme.fontFamilyNormal};
`;

const ThemeList = () => {
  const { funnel } = React.useContext(FunnelContext);
  return (
    <>
      <div>
        {funnel.themes.map((theme) => (
          <>
            <Theme key={theme.id} {...theme} />
            <EvalThemeResult themeTitle={theme.title} />
            <EvalThemeScoring themeTitle={theme.title} />
          </>
        ))}
      </div>
    </>
  );
};

export default ThemeList;

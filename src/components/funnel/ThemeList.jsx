import styled from 'styled-components';
import React from 'react';
import FunnelContext from '../../contexts/FunnelContext';
import Theme from './Theme';

export const StyledTitleTheme = styled.h1`
  color: ${(props) => props.theme.blueFeatureColor};
  font-family: ${(props) => props.theme.fontFamilyNormal};
`;

const ThemeList = () => {
  const { funnel } = React.useContext(FunnelContext);
  return (
    <div>
      {funnel.themes.map((theme) => (
        <Theme key={theme.id} {...theme} />
      ))}
    </div>
  );
};

export default ThemeList;

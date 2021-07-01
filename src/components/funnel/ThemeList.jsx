import styled from 'styled-components';
import React from 'react';
import FunnelContext from '../../contexts/FunnelContext';
import Theme from './Theme';
import EvalThemeResult from '../emi/EvalThemeResult';
import { FlexCol, Flex } from '../../styles/generics/GenericContainers';

export const StyledTitleTheme = styled.h1`
  color: ${(props) => props.theme.blueFeatureColor};
  font-family: ${(props) => props.theme.fontFamilyNormal};
`;

export const StyledContainer = styled(Flex)`
  width: auto;
`;

export const StyledRightColumn = styled(FlexCol)`
  width: 40%;
`;

export const StyledLeftColumn = styled(FlexCol)`
  width: 60%;
`;

const ThemeList = () => {
  const { funnel } = React.useContext(FunnelContext);
  return (
    <>
      {funnel.themes.map((theme) => (
        <StyledContainer>
          <StyledLeftColumn>
            <Theme key={theme.id} {...theme} />
          </StyledLeftColumn>
          <StyledRightColumn>
            <EvalThemeResult themeTitle={theme.title} />
          </StyledRightColumn>
        </StyledContainer>
      ))}
    </>
  );
};

export default ThemeList;

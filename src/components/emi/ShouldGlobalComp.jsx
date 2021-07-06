import { useState } from 'react';
import styled from 'styled-components';
import { FlexCol, Flex } from '../../styles/generics/GenericContainers';
import soleil from '../../assets/img/soleil.PNG';
import vent from '../../assets/img/vent.PNG';
import pluie from '../../assets/img/pluie.PNG';
import orageux from '../../assets/img/orageux.PNG';
import { ImgProgressBar } from './QuickEvalNav';
//  import { StyledTitleP, StyledTitleH3 } from '../../styles/generics/GenericTitles';
import themea from '../../assets/img-temp/themea.png';
import theme1 from '../../assets/img-temp/theme1.png';
import theme2 from '../../assets/img-temp/theme2.png';
import theme3 from '../../assets/img-temp/theme3.png';
import theme4 from '../../assets/img-temp/theme4.png';
import theme5 from '../../assets/img-temp/theme5.png';
import theme6 from '../../assets/img-temp/theme6.png';
import theme7 from '../../assets/img-temp/theme7.png';

/*  const StyledShouldListContainer = styled(FlexCol)`
width: 500px;
height: 300px;

  <StyledShouldListContainer start halign="center">
`;
*/

const ContainerGlobalRecoParagraph = styled(FlexCol)`
padding:10px;
text-align:center;
`;

const GlobalReco = styled(Flex)`
padding-top:20px;
flex-direction: row;
display:flex;
`;

const MiniContainerReco = styled(FlexCol)`
width:100px;
`;

const ThemeReco = styled.img`
width: 30px;
height: 30px;
`;

export default function ShouldGlobalComp() {
  return (
    <>
      <GlobalReco>
        <MiniContainerReco>
          <ThemeReco src={themea} alt="themea" />
          <ImgProgressBar src={soleil} alt="sun" />
        </MiniContainerReco>
        <MiniContainerReco>
          <ThemeReco src={theme1} alt="theme1" />
          <ImgProgressBar src={vent} alt="sun" />
        </MiniContainerReco>
        <MiniContainerReco>
          <ThemeReco src={theme2} alt="theme2" />
          <ImgProgressBar src={soleil} alt="sun" />
        </MiniContainerReco>
        <MiniContainerReco>
          <ThemeReco src={theme3} alt="theme3" />
          <ImgProgressBar src={pluie} alt="sun" />
        </MiniContainerReco>
        <MiniContainerReco>
          <ThemeReco src={theme4} alt="theme4" />
          <ImgProgressBar src={soleil} alt="sun" />
        </MiniContainerReco>
        <MiniContainerReco>
          <ThemeReco src={theme5} alt="theme5" />
          <ImgProgressBar src={orageux} alt="sun" />
        </MiniContainerReco>
        <MiniContainerReco>
          <ThemeReco src={theme6} alt="theme6" />
          <ImgProgressBar src={soleil} alt="sun" />
        </MiniContainerReco>
        <MiniContainerReco>
          <ThemeReco src={theme7} alt="theme7" />
          <ImgProgressBar src={soleil} alt="sun" />
        </MiniContainerReco>
      </GlobalReco>
      <ContainerGlobalRecoParagraph>
        <p>blablabla</p>
      </ContainerGlobalRecoParagraph>
    </>
    );
   }

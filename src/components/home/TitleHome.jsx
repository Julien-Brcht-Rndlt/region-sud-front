import styled from 'styled-components';
import { StyledTitleH1, StyledTitleP } from '../../styles/generics/GenericTitles';
import { StyledButton } from '../../styles/generics/GenericButtons';
import { device } from '../../styles/theme';

export const StyledTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
  align-content: stretch;
  margin-left: 50px;
  max-width: 500px;
`;
export const StyledBorderYellowH1 = styled.div`

 @media ${device.mobileS}{
  border-bottom: 0;
  }

  @media ${device.mobileM}{
    border-bottom:0;
  }

  @media ${device.mobileL}{
    border-bottom: 2px solid ${(props) => props.theme.yellowFeatureColor};
    width: 80px;
    height: 5px;
    padding-right: 15px
  }

  @media ${device.tablet}{
    border-bottom: 5px solid #feca5a;
    width: 80px;
    height: 2px;
    padding-right: 10px;
    padding-left: 50px;
    margin-left: 25px;
  }
  @media ${device.desktop}{
  border-bottom: 10px solid ${(props) => props.theme.yellowFeatureColor};
  width: 80px;
  height: 10px;
  padding-right: 15px;
  }
  `;

export const StyledTitleHomeH1 = styled(StyledTitleH1)`
  @media ${device.mobileS}{
   font-size:1.4em;
    padding-top:5px;
  }
 
 @media ${device.tablet}{
   font-size:1.6em;
   padding-left:25px;
  }

@media ${device.desktop}{
   font-size:30px;
   padding-left:15px;
   height: 10px;
  }
`;

export default function TitleHome() {
  return (
    <StyledTitleWrapper>
      <StyledTitleHomeH1> Lorem ipsum dolor sit amet?</StyledTitleHomeH1>
      <StyledBorderYellowH1 />
      <StyledTitleP>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>sit amet, consectetur adipiscing elit</li>
        </ul>
        <StyledButton width="15em" height="">
          J&#39;évalue mon évènement
        </StyledButton>
      </StyledTitleP>
    </StyledTitleWrapper>
  );
}

import styled from 'styled-components';
import ElementEmi from './ElementsEmi';
import ImageNeederEmi from './ImageNeederEmi';
import NeederEmi from './NeederEmi';
import TitleEmiHome from './TitleEmiHome';
import YoutubeEmi from './YoutubeEmi';

export const StyledContainerEmiHome = styled.div``;

export const WrapperStyledTitleEmiHome = styled.div`
  display: block;
  width: 100%;
  height: 60px;
`;

export default function ContainerEmiHome() {
  return (
    <>
      <WrapperStyledTitleEmiHome />
      <TitleEmiHome />
      <NeederEmi />
      <ImageNeederEmi />
      <YoutubeEmi />
      <ElementEmi />
    </>
  );
}

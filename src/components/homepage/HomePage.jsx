import styled from 'styled-components';
import ImageHomePage from './ImageHomePage';
import Title from './Title';
import MapHome from './MapHome';
import Testimonies from './Testimonies';
import ThemeList from '../funnel/ThemeList';
import QuestList from '../funnel/QuestlList';

export const StyledHomePage = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: stretch;
  align-content: space-around;
`;
export const WrapperHomePage = styled.div``;

export default function HomePage() {
  return (
    <WrapperHomePage>
      <ImageHomePage />
      <StyledHomePage>
        <Title />
        <MapHome />
      </StyledHomePage>
      <Testimonies />
      <ThemeList />
      <QuestList />
    </WrapperHomePage>
  );
}

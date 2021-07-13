import styled from 'styled-components';
import { FlexCol } from '../../styles/generics/GenericContainers';
import soleil from '../../assets/img/soleil.png';
import vent from '../../assets/img/vent.png';
import pluie from '../../assets/img/pluie.png';
import orageux from '../../assets/img/orageux.png';

export const ContainerProgressBar = styled(FlexCol)`
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  height: 475px;
  width: 70px;
  padding: 25px;
  position: absolute;
  border: solid 2px black;
`;

export const ImgProgressBar = styled.img`
  height: 70px;
  width: 70px;
`;

export default function QuickEvalNav() {
  return (
    <ContainerProgressBar>
      <ImgProgressBar src={soleil} alt="sun" />
      <ImgProgressBar src={vent} alt="sun" />
      <ImgProgressBar src={soleil} alt="sun" />
      <ImgProgressBar src={pluie} alt="sun" />
      <ImgProgressBar src={soleil} alt="sun" />
      <ImgProgressBar src={orageux} alt="sun" />
      <ImgProgressBar src={soleil} alt="sun" />
    </ContainerProgressBar>
  );
}

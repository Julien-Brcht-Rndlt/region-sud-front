import styled from 'styled-components';
import EmiTitleNeedForElements from './EmiTitleNeedForElements';
import EmiTitleHome from './EmiTitleHome';
import EmiContainerYoutube from './EmiContainerYoutube';

export const WrapperStyledTitleEmiHome = styled.div`
  display: block;
  width: 100%;
  height: 60px;
`;

export default function EmiContainerHome() {
  return (
    <>
      <WrapperStyledTitleEmiHome />
      <EmiTitleHome />
      <EmiTitleNeedForElements />
      <EmiContainerYoutube />
    </>
  );
}

import { PDFViewer } from '@react-pdf/renderer';
import styled from 'styled-components';
import MyDocument from './Generatepdf';

export const StyledContainerPdf = styled.div`
  height: 1200px;
`;

export default function DisplayPdf() {
  return (
    <>
      <StyledContainerPdf>
        <PDFViewer width="100%" height="100%">
          <MyDocument />
        </PDFViewer>
      </StyledContainerPdf>
    </>
  );
}

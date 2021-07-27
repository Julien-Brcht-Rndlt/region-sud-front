import React, { useContext } from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import styled from 'styled-components';
import MyPDFDocument from './MyPDFDocument';
import EvalContext from '../../contexts/EvalContext';

export const StyledContainerPdf = styled.div`
  height: 1200px;
`;

export default function DisplayPdf() {
  const { evalState } = useContext(EvalContext);
  return (
    <>
      <StyledContainerPdf>
        <PDFViewer width="100%" height="100%">
          <MyPDFDocument evalPDF={evalState} />
        </PDFViewer>
      </StyledContainerPdf>
    </>
  );
}

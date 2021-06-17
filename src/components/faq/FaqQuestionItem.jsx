import styled from 'styled-components';
import PropTypes from 'prop-types';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { Block } from '../../styles/generics/GenericContainers';

export const StyledContainerQuestions = styled.div`
  margin-left: 25px;
  padding: 8px;
`;
export const StyledLinesQuestions = styled.div`
  width: 80%;
  border: solid 1px black;
`;
export const SyledAccordionContainer = styled(Block)`
  display: block;
`;

export default function FaqQuestionItem({ title }) {
  return (
    <SyledAccordionContainer>
      <Accordion allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>{title}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>Exercitation in fugiat est ut ad ea cupida.</p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </SyledAccordionContainer>
  );
}
FaqQuestionItem.propTypes = {
  title: PropTypes.string,
};

FaqQuestionItem.defaultProps = {
  title: '',
};

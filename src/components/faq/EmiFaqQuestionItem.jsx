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

export default function FaqQuestionItem({ title, content }) {
  return (
    <Block>
      <Accordion allowZeroExpanded>
        <AccordionItem>
          <AccordionItemHeading>
            <AccordionItemButton>{title}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>{content}</p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </Block>
  );
}
FaqQuestionItem.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

FaqQuestionItem.defaultProps = {
  title: '',
  content: '',
};

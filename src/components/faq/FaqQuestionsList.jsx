import styled from 'styled-components';
import FaqQuestionItem, { StyledContainerQuestions } from './FaqQuestionItem';

export const StyledContainerQuestionsList = styled.div`
  width: 100%;
  height: auto;
`;

export default function FaqQuestionsList() {
  const questionsList = [
    {
      title: 'Question fréquente',
      content: '',
      lines: [''],
    },
    {
      title: 'Question fréquente',
      content: [''],
    },
    {
      title: 'Question fréquente',
      content: [''],
    },
    {
      title: 'Question fréquente',
      content: [''],
    },
    {
      title: 'Question fréquente',
      content: [''],
    },
    {
      title: 'Question fréquente',
      content: [''],
    },
    {
      title: 'Question fréquente',
      content: [''],
    },
  ];
  return (
    <StyledContainerQuestionsList>
      <StyledContainerQuestions>
        {questionsList.map((list) => (
          <FaqQuestionItem title={list.title} content={list.content} />
        ))}
      </StyledContainerQuestions>
    </StyledContainerQuestionsList>
  );
}

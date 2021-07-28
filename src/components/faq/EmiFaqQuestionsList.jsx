import styled from 'styled-components';
import FaqQuestionItem, { StyledContainerQuestions } from './EmiFaqQuestionItem';

export const StyledContainerQuestionsList = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  overflow-y: scroll;
`;

export default function FaqQuestionsList() {
  const questionsList = [
    {
      title: 'Quelles sont les différences entre les questions ? ',
      content: 'Il ya des questions à choix multiples, des questions avec un seul choix possible et des questions où vous devez ajouter du contenu.',
      lines: [''],
    },
    {
      title: 'Que faire si je ne sais pas quoi répondre à une question ?  ',
      content: 'Contactez notre équipe via notre mail contact@regionsud.fr',
    },
    {
      title: 'Que faire une fois que jai le résultat final ?',
      content: 'Vous pouvez récupérer votre résultat en impression PDF ou par mail.',
    },
    {
      title: 'Comment est calculé mon score sur un thème ? ',
      content: 'Votre score est calculé via une échelle dont le score est différent pour chaque thème.',
    },
    {
      title: 'Comment savoir quoi cocher sur les questions à choix multiple ? ',
      content: 'Vous pouvez mettre non ou cocher autant de cases qui correspondent à la question.',
    },
    {
      title: 'Comment répondre aux questions où je dois ajouter du contenu ? ',
      content: 'Remplissez la réponse avec les chiffres demandés. ',
    },
    {
      title: 'Comment récupérer les recommandations ? ',
      content: 'Vous pouvez imprimer ou envoyer par mail les recommandations.',
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

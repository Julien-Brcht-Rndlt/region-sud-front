import styled from 'styled-components';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

export const RequireModalContain = styled.div`
  height: 700px;
  width: auto;
`;

export default function RequireModal() {
  return (
    <>
      <RequireModalContain>
        <Accordion allowZeroExpanded>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Informations de base relatives à la structure organisatrice
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Exercitation in fugiat est ut ad ea cupida.</p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Estimation consommation d’eau sur l’événement
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Exercitation in fugiat est ut ad ea cupida.</p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Estimation consommation électrique sur l’événement
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Exercitation in fugiat est ut ad ea cupida.</p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Connaissance des actions et dispositifs écoresponsables sur l’événement
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Exercitation in fugiat est ut ad ea cupida.</p>
            </AccordionItemPanel>
          </AccordionItem>
          <AccordionItem>
            <AccordionItemHeading>
              <AccordionItemButton>
                Informations relatives à l’organisation sur l’eau
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <p>Exercitation in fugiat est ut ad ea cupida.</p>
            </AccordionItemPanel>
          </AccordionItem>
        </Accordion>
      </RequireModalContain>
    </>
  );
}

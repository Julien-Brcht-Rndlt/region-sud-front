import styled from 'styled-components';

export const Block = styled.div`
  display: block;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: ${(props) => (props.start && 'flex-start') || (props.end && 'flex-end') || (props.center && 'center')};
  align-items: ${(props) => (props.valign)};
`;

export const FlexWrap = styled(Flex)`
  flex-wrap: wrap;
`;

export const FlexSpace = styled(Flex)`
  border: 5px solid red;
  justify-content: ${(props) => (props.between && 'space-between') || (props.around && 'space-around') || (props.evenly && 'space-evenly')};
`;

export const FlexCol = styled(Flex)`
  flex-direction: column;
  align-items: ${(props) => (props.start && 'start') || (props.end && 'end') || (props.center && 'center') || (props.stretch && 'stretch')};
  justify-content: ${(props) => (props.halign)};
`;

export const Center = styled.div`
  text-align: center;
`;

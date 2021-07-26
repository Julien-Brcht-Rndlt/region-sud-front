import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Center } from '../../styles/generics/GenericContainers';

const Container = styled(Center)`
  padding: 3rem 5rem;
  height: 13rem;
`;

const Title = styled.h4`
  font-family: ${(props) => props.theme.fontFamilyFeature};
  font-size: 1.4rem;
`;

const Text = styled.p`
  font-family: ${(props) => props.theme.fontFamilyNormal};
  font-size: 1.2rem;
  line-height: 15px;
`;

export default function FooterText({ title, lines = [] }) {
  let count = 0;
  return (
    <Container>
      <Title>{title}</Title>
      {
        lines.map((line) => {
          count += 1;
          return (
            <Text key={`${title}${count}`}>{line}</Text>
        );
        })
      }
    </Container>
  );
}

FooterText.propTypes = {
  title: PropTypes.string,
  lines: PropTypes.arrayOf(PropTypes.string),
};

FooterText.defaultProps = {
  title: null,
  lines: [],
};

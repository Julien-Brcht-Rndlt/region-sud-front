import PropTypes from 'prop-types';

const ContainerGlobalRecoParagraph = ({ content }) => (
  <p>{content}</p>
  );
  export default ContainerGlobalRecoParagraph;

  ContainerGlobalRecoParagraph.propTypes = {
    content: PropTypes.objectOf.isRequired,
};

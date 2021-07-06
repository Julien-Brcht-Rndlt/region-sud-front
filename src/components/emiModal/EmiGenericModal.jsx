import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Flex } from '../../styles/generics/GenericContainers';

const StyledModalOverlay = styled(Flex)`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const StyledModalContainer = styled.div`
background-color: ${(props) => props.theme.greyFeatureColor};
`;

function EmiGenericModal({
    children,
    renderModalHeader,
    renderModalFooter,
    show,
    setShow,
    }) {
    const closeModalHandler = () => {
        setShow(false);
    };

    if (!show) {
        return null;
    }

    return (
      <StyledModalOverlay center valign="center" onClick={() => closeModalHandler()}>
        <StyledModalContainer onClick={(event) => event.stopPropagation()}>
          <EmiModalHeader closeModalHandler={closeModalHandler}>
            {renderModalHeader()}
          </EmiModalHeader>
          <EmiModalBody>
            {children}
          </EmiModalBody>
          <EmiModalFooter>
            {renderModalFooter()}
          </EmiModalFooter>
        </StyledModalContainer>
      </StyledModalOverlay>
    );
}

const EmiModalHeader = ({ children, closeModalHandler }) => (
  <div>
    { children }
    <button type="button" onClick={() => closeModalHandler()}>Close</button>
  </div>
    );

const EmiModalBody = ({ children }) => (
  <div>
    {children}
  </div>
      );

const EmiModalFooter = ({ children }) => (
  <div>
    { children }
  </div>
    );

EmiGenericModal.propTypes = {
    children: PropTypes.node.isRequired,
    renderModalHeader: PropTypes.func.isRequired,
    renderModalFooter: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
};

EmiModalHeader.propTypes = {
    children: PropTypes.node.isRequired,
    closeModalHandler: PropTypes.func.isRequired,
};

EmiModalBody.propTypes = {
    children: PropTypes.node.isRequired,
};

EmiModalFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EmiGenericModal;

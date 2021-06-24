import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledModalOverlay = styled.div``;

const StyledModalContainer = styled.div``;

function EmiGenericModal({
    /* children, */
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
      <StyledModalOverlay onClick={() => closeModalHandler()}>
        <StyledModalContainer onClick={(event) => event.stopPropagation()}>
          <EmiModalHeader
            renderModalHeader={renderModalHeader}
            closeModalHandler={closeModalHandler}
          />
          <EmiModalBody>
            Coucou cest moi la petite Modal !
          </EmiModalBody>
          <EmiModalFooter renderModalFooter={renderModalFooter} />
        </StyledModalContainer>
      </StyledModalOverlay>
    );
}

const EmiModalHeader = ({ renderModalHeader, closeModalHandler }) => (
  <div>
    {renderModalHeader}
    <button type="button" onClick={() => closeModalHandler()}>Close</button>
  </div>
    );

const EmiModalBody = ({ children }) => (
  <div>
    {children}
  </div>
      );

const EmiModalFooter = ({ renderModalFooter }) => (
  <div>
    {renderModalFooter}
  </div>
    );

EmiGenericModal.propTypes = {
    /* children: PropTypes.node.isRequired, */
    renderModalHeader: PropTypes.func.isRequired,
    renderModalFooter: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
};

EmiModalHeader.propTypes = {
    renderModalHeader: PropTypes.func.isRequired,
    closeModalHandler: PropTypes.func.isRequired,
};

EmiModalBody.propTypes = {
    children: PropTypes.node.isRequired,
};

EmiModalFooter.propTypes = {
    renderModalFooter: PropTypes.func.isRequired,
};

export default EmiGenericModal;

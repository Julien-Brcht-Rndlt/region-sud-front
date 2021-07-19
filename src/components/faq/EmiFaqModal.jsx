import PropTypes from 'prop-types';
import EmiGenericModal from '../emiModal/EmiGenericModal';
import FaqBody, { FaqHeader, FaqFooter } from './EmiFaqContent';

export default function EmiFaqModal({ show, setShow }) {
    return (
      <EmiGenericModal
        show={show}
        setShow={setShow}
        renderModalHeader={FaqHeader}
        renderModalFooter={FaqFooter}
      >
        <FaqBody />
      </EmiGenericModal>
    );
}

EmiFaqModal.propTypes = {
    show: PropTypes.bool.isRequired,
    setShow: PropTypes.func.isRequired,
};

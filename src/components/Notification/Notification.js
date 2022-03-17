import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return message;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;

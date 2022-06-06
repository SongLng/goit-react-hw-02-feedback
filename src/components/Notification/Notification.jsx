import propTypes from 'prop-types';

const Notification = ({ message }) => {
  return <h2>{message}</h2>;
};

Notification.propTypes = {
  message: propTypes.string.isRequired,
};

export default Notification;

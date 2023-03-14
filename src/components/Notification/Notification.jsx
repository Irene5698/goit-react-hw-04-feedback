import propTypes from 'prop-types';
import css from './Notification.module.css';

export const Notification = ({ messsage }) => (
  <p className={css.message}>{messsage}</p>
);
Notification.propTypes = {
  message: propTypes.string.isRequired,
};

export default Notification;

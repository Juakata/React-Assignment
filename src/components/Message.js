import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ msg, duration, handleWindow }) => {
  const {
    status, to, from,
  } = msg;
  return (
    <div className="message-container">
      <button
        onClick={handleWindow}
        type="button"
        className={`btn-status btn-${status}`}
      >
        {status}
      </button>
      <h3>{`To: ${to}`}</h3>
      <h3>{`From: ${from}`}</h3>
      <h3>{`${duration}`}</h3>
    </div>
  );
};

Message.propTypes = {
  msg: PropTypes.instanceOf(Object).isRequired,
  duration: PropTypes.string.isRequired,
  handleWindow: PropTypes.func.isRequired,
};

export default Message;

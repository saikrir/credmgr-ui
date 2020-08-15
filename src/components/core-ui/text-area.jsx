import React from 'react';

const CoreTextArea = ({ input, label, meta, ...additionalProps }) => {
  let { valid, touched, error } = meta;
  const hasFieldError = touched && !valid;
  let className = hasFieldError ? 'field error' : 'field';

  return (
    <div className={className}>
      <label>{label}</label>
      <textarea {...input} {...additionalProps} />
      {hasFieldError && <div className="ui pointing red basic label">{error}</div>}
    </div>
  );
};

export default CoreTextArea;

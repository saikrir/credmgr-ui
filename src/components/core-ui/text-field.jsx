import React from 'react';

const CoreTextField = ({ input, label, meta, ...additionalProps }) => {
  console.log('meta', meta);
  let { valid, touched, pristine, error } = meta;
  const hasFieldError = touched && !pristine && !valid;
  let className = hasFieldError ? 'field error' : 'field';

  return (
    <div className={className}>
      <label>{label}</label>
      <input {...input} {...additionalProps} />
      {hasFieldError && <div className="ui pointing red basic label">{error}</div>}
    </div>
  );
};

export default CoreTextField;

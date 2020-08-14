export const loginFormValidator = ({ username, password }) => {
  const errors = {};
  console.log('Inside validator');
  if (!hasMinlength(username, 3)) {
    errors.username = 'Username should be atleast 3 characters in length';
  }

  if (hasAlphanumeric(username)) {
    errors.username = 'Username cannot have alphanumerical value';
  }

  if (!hasMinlength(password, 3)) {
    errors.password = 'Password should be atleast 3 characters in length';
  }

  console.log(errors);
  return errors;
};

export const searchValidator = ({ systemName }) => {
  console.log('Search ', systemName);
  let errors = {};
  if (!hasMinlength(systemName, 3)) {
    errors.systemName = 'Please enter atleast 3 characters to search';
  }
  if (!hasAlphanumeric(systemName, 3)) {
    errors.systemName = 'Please enter only letters or numbers';
  }

  return errors;
};

const hasAlphanumeric = inputValue => {
  var alphaRegex = /^[a-z0-9]+$/i;
  return alphaRegex.test(inputValue);
};

const hasMinlength = (inputValue, minLength) => {
  return inputValue && inputValue.length > minLength;
};

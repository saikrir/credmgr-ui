export const loginFormValidator = ({ username, password }) => {
  const errors = {};

  if (!hasMinlength(username, 3)) {
    errors.username = 'Username should be atleast 3 characters in length';
  }

  if (!hasAlphanumeric(username)) {
    errors.username = 'Username cannot have alphanumerical value';
  }

  if (!hasMinlength(password, 3)) {
    errors.password = 'Password should be atleast 3 characters in length';
  }

  return errors;
};

export const searchValidator = ({ systemName }) => {
  let errors = {};

  if (!hasMinlength(systemName, 3)) {
    errors.systemName = 'Please enter atleast 3 characters to search';
  }
  if (!hasAlphanumeric(systemName)) {
    errors.systemName = 'Please enter only letters or numbers';
  }

  return errors;
};

export const systemCredentialValidator = ({ userId, password, systemName, description }) => {
  let errors = {};

  if (!hasMinlength(systemName, 3)) {
    errors.systemName = 'Please enter atleast 3 characters for System Name';
  }
  if (!hasAlphanumeric(systemName)) {
    errors.systemName = 'Please enter only letters or numbers for System Name';
  }

  if (!hasMinlength(userId, 3)) {
    errors.userId = 'Please enter atleast 3 characters for userId';
  }
  if (!hasAlphanumeric(userId)) {
    errors.userId = 'Please enter only letters or numbers for userId';
  }

  if (!hasMinlength(password, 6)) {
    errors.password = 'Please enter atleast 6 characters for Password';
  }

  if (!hasMinlength(description, 5)) {
    errors.description = 'Please enter atleast 5 characters for userId';
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

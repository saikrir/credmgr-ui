export const authErrorTranslator = statusCode => {
  let errorMessage;

  switch (statusCode) {
    case 400:
      errorMessage = 'Please provide Username and Password fields to login';
      break;
    case 401:
      errorMessage = 'Invalid Username and Password combination';
      break;
    default:
      errorMessage = 'Server encounterd an unrecoverable error';
      break;
  }
  return errorMessage;
};

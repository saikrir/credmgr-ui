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

export const searchErrorTranslator = statusCode => {
  let errorMessage;

  switch (statusCode) {
    case 400:
      errorMessage = 'Invalid search crteria';
      break;
    case 404:
      errorMessage = 'Could not find the system credential';
      break;
    case 500:
      errorMessage = 'Error occured when searching, please try again by changing search criteria';
      break;
    default:
      errorMessage = 'Server encounterd an unrecoverable error';
      break;
  }
  return errorMessage;
};

export const systemErrorTranslator = statusCode => {
  let errorMessage;

  switch (statusCode) {
    case 400:
      errorMessage = 'Invalid data was recevied, server has rejected SystemCrednetial';
      break;
    case 500:
      errorMessage = 'Error occured when saving System Credential, please try again by changing search criteria';
      break;
    default:
      errorMessage = 'Server encounterd an unrecoverable error';
      break;
  }
  return errorMessage;
};

function TokenStore() {
  let tokenKey = 'authToken';
  let storeToken = token => sessionStorage.setItem(tokenKey, token);
  let retrieveToken = () => sessionStorage.getItem(tokenKey);
  let cleanToken = () => sessionStorage.removeItem(tokenKey);

  return {
    getAuthToken: retrieveToken,
    setAuthToken: storeToken,
    removeAuthToken: cleanToken
  };
}

export default TokenStore();

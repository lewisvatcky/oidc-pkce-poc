const settings = {
  authority: 'https://dev-18xi1sx5.au.auth0.com',
  client_id: 'whlnBxWXjJ30x8EnxEEK2gt1jk1j6hGe',
  redirect_uri: 'http://localhost:8000/callback.html',
  response_type: 'code',
  scope: 'openid',
  filterProtocolClaims: true,
  loadUserInfo: false,
  response_mode: 'query'
};

window.Settings = settings;
window.UserManager = new UserManager(window.Settings);
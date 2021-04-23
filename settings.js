const settings = {
  authority: 'https://dev-18xi1sx5.au.auth0.com', // The Cricket Australia Auth URL (Gigya)
  client_id: 'whlnBxWXjJ30x8EnxEEK2gt1jk1j6hGe', // The Client ID for the app registered against Gigya
  redirect_uri: 'http://localhost:8000/callback.html', // The URL we want to return to once authenticated via Gigya
  response_type: 'code', // This ensures this request is PKCE
  scope: 'openid', // openid is the only scope we will have access to
  filterProtocolClaims: true,
  loadUserInfo: false,
  response_mode: 'query', // Used to make sure response_type: 'code' works as expected
  extraQueryParams: { // Any extra parameters to send to the /authorize request. If we are prefilling information, this is where we can pass the information through.
    firstname: "Lewis",
    lastname: "Vatcky",
    email: 'theusers@email.com'
  }
};

window.Settings = settings;
window.UserManager = new UserManager(window.Settings);
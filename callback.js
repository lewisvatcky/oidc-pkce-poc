
window.UserManager.signinCallback().then(user => {
  console.log(user);

  // Call Rebound API with user.profile.sub

  // On successful request, we could remove the user from sessionStorage
  window.UserManager.removeUser();
});
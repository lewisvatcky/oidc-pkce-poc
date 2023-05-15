var $b4te3$oidcclientts = require("oidc-client-ts");


const $a196c1ed25598f0e$var$user = new (0, $b4te3$oidcclientts.UserManager)({
    authority: "https://dev-18xi1sx5.au.auth0.com",
    client_id: "whlnBxWXjJ30x8EnxEEK2gt1jk1j6hGe",
    redirect_uri: "http://localhost:1234",
    response_type: "code",
    scope: "openid",
    filterProtocolClaims: true,
    loadUserInfo: false,
    response_mode: "query"
});
document.querySelector("#signin").addEventListener("click", ()=>$a196c1ed25598f0e$var$user.signinRedirect({
        state: "1234"
    }));
document.querySelector("#signinpopup").addEventListener("click", ()=>$a196c1ed25598f0e$var$user.signinPopup());
$a196c1ed25598f0e$var$user.signinCallback().then((user)=>{
    console.log(user);
    // Call Rebound API with user.profile.sub
    // On successful request, we could remove the user from sessionStorage
    user.removeUser();
});


//# sourceMappingURL=main.js.map

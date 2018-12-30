export const oidcSettings = {
  authority: "/auth/realms/" + window.location.hostname.split(".")[0],
  client_id: "service-template",
  redirect_uri: window.location.origin + "/oidc-callback",
  response_type: "id_token token",
  scope: "openid profile",
  post_logout_redirect_uri: window.location.origin
};

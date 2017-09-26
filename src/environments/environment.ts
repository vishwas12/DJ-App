// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  ws_domain_url: 'http://localhost:8080/DJ',
  auth_domain_url: 'http://localhost:8080/DJ',
  auth_client_id: 'the_client',
  auth_secret: 'secret',
  grant_type: 'password',
  env: 'dev'
};

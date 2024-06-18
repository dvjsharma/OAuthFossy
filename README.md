# FOSSology OAuth Client (Demo)

This is a demo client to test OAuth2.0 authentication with the FOSSology API using authorization code grant.

- `/oauth/login`: Fetches the redirection URL from the FOSSology server to authenticate the user.

- `/oauth/callback`: Exchange the authorization code for an access token via the FOSSology server.

#### User Flow:

1. User visits the client and clicks on the login button.
2. User is redirected to the Authorization Server (external) to authenticate.
3. Once authenticated, the user is redirected back to the client with an authorization token which can be used for further requests.

#### Technical Flow:

1. Once login button is clicked, the client fetches the redirection URL from the FOSSology server and redirects the user to the Authorization Server.

2. User authenticates and the Authorization Server redirects the user back to the client with an authorization code and state.

3. Client extracts the authorization code and state from the URL and sends a POST request to the FOSSology server to exchange the authorization code for an access token.

#### Install client:
    
```bash
git clone https://github.com/dvjsharma/OAuthFossy.git
cd OAuthFossy
npm i && npm run dev
```

#### Uplink PR - [#2761](https://github.com/fossology/fossology/pull/2761)
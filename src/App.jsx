import fossyLogo from "./assets/fossy.png";
import "./App.css";

import OAuthLoginButton from "./components/button";
import OAuthCallbackHandler from "./components/callback";

function App() {
    return (
        <>
            <div>
                <a href="https://react.dev" target="_blank">
                    <img
                        src={fossyLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>FOSSology OAuth Clinet</h1>
            <OAuthLoginButton />
            <OAuthCallbackHandler />
            <p className="read-the-docs">
                Note: Make sure to change the redirect URL in the OAuth server.
            </p>
        </>
    );
}

export default App;

import React from "react";
import axios from "axios";

const OAuthLoginButton = () => {
    const handleLogin = async () => {
        try {
            const response = await axios.get(
                "http://localhost/repo/api/v1/oauth/login"
            );
            window.location.href = response.data.authorizationUrl;
        } catch (error) {
            console.error("Error initiating OAuth login:", error);
        }
    };

    return (
        <div className="card">
            <button onClick={handleLogin}>Login with OAuth</button>
        </div>
    );
};

export default OAuthLoginButton;

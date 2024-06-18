import React, { useEffect, useState } from "react";
import axios from "axios";

const OAuthCallbackHandler = () => {
    const [message, setMessage] = useState("");

    useEffect(() => {
        const handleCallback = async () => {
            const searchParams = new URLSearchParams(window.location.search);
            const code = searchParams.get("code");
            const state = searchParams.get("state");

            if (code && state) {
                try {
                    const response = await axios.post(
                        "http://localhost/repo/api/v1/oauth/callback",
                        {
                            code,
                            state,
                        }
                    );
                    console.log("Received auth token:", response.data.Authorization);
                    setMessage(response.data.Authorization);
                    window.history.replaceState({}, document.title, "/");
                } catch (error) {
                    console.error("Error handling OAuth callback:", error);
                }
            } else {
                setMessage("");
            }
        };

        handleCallback();
    }, []);

    return <div>{message}</div>;
};

export default OAuthCallbackHandler;

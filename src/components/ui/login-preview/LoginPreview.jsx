import { useEffect, useState } from "react";
import "./LoginPreview.css";

function LoginPreview() {

    const emailText = "admin@xptechnologies.com";
    const passwordText = "••••••••••";

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [cursorStage, setCursorStage] = useState("email");

    const [loading, setLoading] = useState(false);

    const [welcome, setWelcome] = useState(false);

    useEffect(() => {

        // Move to Email

        setTimeout(() => {

            setCursorStage("emailClick");

        }, 700);

        // Type Email

        setTimeout(() => {

            let i = 0;

            const timer = setInterval(() => {

                i++;

                setEmail(emailText.slice(0, i));

                if (i === emailText.length) {

                    clearInterval(timer);

                }

            }, 60);

        }, 1200);

        // Move Password

        setTimeout(() => {

            setCursorStage("password");

        }, 3200);

        // Click Password

        setTimeout(() => {

            setCursorStage("passwordClick");

        }, 3600);

        // Type Password

        setTimeout(() => {

            let i = 0;

            const timer = setInterval(() => {

                i++;

                setPassword(passwordText.slice(0, i));

                if (i === passwordText.length) {

                    clearInterval(timer);

                }

            }, 80);

        }, 4000);

        // Move to Button

        setTimeout(() => {

            setCursorStage("button");

        }, 5200);

        // Click Button

        setTimeout(() => {

            setCursorStage("buttonClick");

            setLoading(true);

        }, 5600);

        // Welcome

        setTimeout(() => {

            setLoading(false);

            setWelcome(true);

        }, 7000);

    }, []);

    return (

        <div className="login-preview">

            <div className="login-card">

                <div className="login-logo">

                    <div className="login-logo-icon">

                        XP

                    </div>

                    <h3>XP Technologies</h3>

                    <p>Business ERP Platform</p>

                </div>

                {!welcome && (

                    <>

                        <div className="login-group">

                            <label>Email Address</label>

                            <div className="login-input">

                                {email}

                                <span className="typing-caret"></span>

                            </div>

                        </div>

                        <div className="login-group">

                            <label>Password</label>

                            <div className="login-input">

                                {password}

                            </div>

                        </div>

                        <button className={`login-button ${loading ? "loading" : ""}`}>

                            {loading ? (

                                <>

                                    <span className="spinner"></span>

                                    Signing In...

                                </>

                            ) : (

                                "Sign In"

                            )}

                        </button>

                    </>

                )}

                {welcome && (

                    <div className="welcome-panel">

                        <div className="welcome-icon">

                            ✓

                        </div>

                        <h2>

                            Welcome back,

                            <br />

                            Admin 👋

                        </h2>

                        <p>

                            Loading Dashboard...

                        </p>

                    </div>

                )}

            </div>

            <div className={`demo-cursor ${cursorStage}`}>

                <div className="cursor-dot"></div>

            </div>

        </div>

    );

}

export default LoginPreview;
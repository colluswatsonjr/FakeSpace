import { useState } from "react";

import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";

function LoginPage({ setUser }) {

    const [showLogin, setShowLogin] = useState(true);

    return (
        <div>
            {showLogin ?
                <>
                    <LoginForm setUser={setUser} />

                    Don't have an account? &nbsp;
                    <button onClick={() => setShowLogin(false)}>
                        Sign Up
                    </button>
                </>
                :
                <>
                    <SignupForm setUser={setUser} />

                    Already have an account? &nbsp;
                    <button onClick={() => setShowLogin(true)}>
                        Log In
                    </button>
                </>
            }
        </div>
    )
}
export default LoginPage
import Header from "./Header";
import { useState } from "react";

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    };
    return <div>
        <Header />
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/CA-en-20260511-TRIFECTA-perspective_e5754c2e-62ec-476a-a416-3af7d5408bf1_large.jpg"
            alt="bg"
            />
        </div>
        <div>
            <form  className="w-full md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="font-bold text-3xl py-4">
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
                    <input
                    type="text"
                    placeholder="Full Name"
                    className="p-4 my-4 w-full bg-gray-700"
                    />
                )}
                <input type="text" placeholder="Email" className="p-4 my-4 w-full bg-gray-700"></input>
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"></input>
                <button
                    className="p-4 my-6 bg-red-700 w-full rounded-lg">
                        {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
                    {isSignInForm
                     ? "New to Netflix? Sign Up Now"
                     : "Already registered? Sign In Now."}
        </p>
            </form>
        </div>
        
    </div>
}
export default Login;
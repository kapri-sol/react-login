import React from "react";

const SignIn = () => {
    return (
        <div className="h-screen flex items-center justify-center bg-gray-800">
            <div className="bg-white w-full max-w-lg py-10 rounded-lg text-center">
                <h3 className="font-bold text-2xl text-gray-800">Log In</h3>
                <form className="flex flex-col mt-5 px-5">
                    <input placeholder="Email" className="bg-gray-100 shadow-inner focus:outline-none mb-3 py-3 px-5 rounded-lg" />
                    <input placeholder="Password" className="bg-gray-100 shadow-inner focus:outline-none py-3 px-5 rounded-lg" />
                </form>
            </div>
        </div>
    );
};

export default SignIn;

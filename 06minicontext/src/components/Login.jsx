import React, { useState, useContext } from "react";
import userContext from "../context/userContext";

function Login() {
    const [username, setusername] = useState(" ");
    const [password, setpassword] = useState(" ");
    const { setuser } = useContext(userContext);

    const handlesubmit = (e) => {
        e.preventDefault();
        setuser({
            username,
            password,
        });
    };

    return (
        <>
            <div className=" flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-xl shadow-lg w-96">
                    <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
                        Login
                    </h2>

                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setusername(e.target.value)}
                        placeholder="Username"
                        className="w-full px-4 py-3 mb-4 border border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 "
                    />

                    <div>
                        <input
                            type="text"
                            value={password}
                            onChange={(e) => setpassword(e.target.value)}
                            placeholder="Password"
                            className="w-full px-4 py-3 mb-6 border border-black  rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        onClick={handlesubmit}
                        className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
                    >
                        Submit
                    </button>
                </div>
            </div>
        </>
    );
}

export default Login;
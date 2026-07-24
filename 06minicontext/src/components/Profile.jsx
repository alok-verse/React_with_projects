import React, { useContext } from "react";
import userContext from "../context/userContext";

function Profile() {
    const { user } = useContext(userContext);

    if (!user)
        return (
            <div className=" flex items-center justify-center bg-gray-100">
                <div className="bg-white p-8 rounded-xl shadow-lg text-center w-80">
                    <h2 className="text-3xl font-bold text-red-500 mb-4">
                        Please Login
                    </h2>
                </div>
            </div>
        );

    return (
        <div className="flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center w-80">
                <h2 className="text-3xl font-bold text-green-600 mb-2">
                    Welcome 👋
                </h2>

                <p className="text-xl text-gray-700 font-medium">
                    {user.username}
                </p>
            </div>
        </div>
    );
}

export default Profile;
'use client';

import {signOut} from "next-auth/react";
import {useEffect} from "react";

const logout = async () => {
    await signOut();
};

export default function LogoutPage() {

    useEffect(() => void logout(), [])

    return (
        <div className="min-h-screen flex items-center justify-center">
            <h1 className="text-3xl font-bold">Logging out...</h1>
        </div>
    );
};

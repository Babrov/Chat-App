'use client';

import {useRouter} from "next/navigation";

export const LogoutButton = (): JSX.Element => {
    const router = useRouter()

    const handleSignOut = () => {
        router.replace('/logout');
    }

    return (
        <nav>
            <button className="ml-4" onClick={handleSignOut}>
                Sign Out
            </button>
        </nav>
    )
}
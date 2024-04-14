import Link from 'next/link';
import {PropsWithChildren} from "react";
import {LogoutButton} from "@/app/(protected)/components/logout-button";

export const metadata = {
    title: 'Chat App',
}

export default function ProtectedLayout({children}: PropsWithChildren) {
    return (
        <main className="flex flex-col min-h-screen">
            <header className="bg-blue-500 text-white py-4">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <h1 className="text-xl font-bold">Chat App</h1>

                    <nav>
                        <LogoutButton/>
                    </nav>
                </div>
            </header>

            <div className="flex-grow container mx-auto px-4 py-8">{children}</div>

            <footer className="bg-gray-200 py-4 text-center text-gray-600 text-sm">
                <div className="container mx-auto px-4">
                    <p>&copy; {new Date().getFullYear()} Chat App. All rights reserved.</p>
                    <p>
                        <Link className="text-blue-500 hover:underline" href="/about">
                            About
                        </Link>
                        {' | '}
                        <Link className="text-blue-500 hover:underline" href="/contact">
                            Contact
                        </Link>
                    </p>
                </div>
            </footer>
        </main>
    );
};

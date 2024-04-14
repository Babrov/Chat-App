import Link from "next/link";

export default function Home() {
    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Welcome to Chat App</h2>
            <p className="text-lg text-gray-600 mb-8">Start chatting with your friends!</p>
            <Link className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" href="/chat">
                Get Started
            </Link>
        </div>
    );
};

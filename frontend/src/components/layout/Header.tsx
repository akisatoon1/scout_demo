'use client';

import { useRouter } from 'next/navigation';
import { auth } from '@/lib/api';

export default function Header() {
    const router = useRouter();

    const handleLogout = async () => {
        try {
            await auth.logout();
            router.push('/auth/login');
        } catch (error) {
            console.error('ログアウトに失敗しました:', error);
        }
    };

    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <h1 className="text-xl font-bold text-gray-900">Scout Demo</h1>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <button
                            onClick={handleLogout}
                            className="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            ログアウト
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
} 
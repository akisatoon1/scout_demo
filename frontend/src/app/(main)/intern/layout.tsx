'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function InternLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="bg-white shadow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex">
                            <div className="flex-shrink-0 flex items-center">
                                <h1 className="text-xl font-bold text-gray-900">インターン生向けScout</h1>
                            </div>
                            <nav className="ml-6 flex space-x-8">
                                <Link
                                    href="/intern/profile"
                                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${pathname === '/intern/profile'
                                        ? 'border-indigo-500 text-gray-900'
                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                        }`}
                                >
                                    プロフィール
                                </Link>
                                <Link
                                    href="/intern/messages"
                                    className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${pathname === '/intern/messages'
                                        ? 'border-indigo-500 text-gray-900'
                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                                        }`}
                                >
                                    メッセージ
                                </Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <main>{children}</main>
        </div>
    );
} 
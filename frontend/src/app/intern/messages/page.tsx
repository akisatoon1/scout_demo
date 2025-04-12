import MessageList from '@/components/message/MessageList';
import Link from 'next/link';

export default function InternMessagesPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-extrabold text-gray-900">インターン生メッセージ一覧</h1>
                        <Link href="/intern/profile" className="text-indigo-600 hover:text-indigo-500 font-medium">
                            プロフィールを見る
                        </Link>
                    </div>
                    <div className="mt-6">
                        <MessageList />
                    </div>
                </div>
            </div>
        </div>
    );
} 
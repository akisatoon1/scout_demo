import MessageList from '@/components/message/MessageList';

export default function InternMessagesPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-extrabold text-gray-900">インターン生メッセージ一覧</h1>
                    <div className="mt-6">
                        <MessageList />
                    </div>
                </div>
            </div>
        </div>
    );
} 
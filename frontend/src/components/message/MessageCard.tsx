import { Message } from '@/lib/api';
import { useState } from 'react';

interface MessageCardProps {
    message: Message;
}

export default function MessageCard({ message }: MessageCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString('ja-JP');
    };

    return (
        <div className="bg-white shadow rounded-lg p-4">
            <div className="flex justify-between items-start">
                <div>
                    {message.company && (
                        <div className="text-sm font-medium text-gray-900">
                            送信企業: {message.company.name}
                        </div>
                    )}
                    {message.intern && (
                        <div className="text-sm font-medium text-gray-900">
                            送信先インターン生: {message.intern.name}
                        </div>
                    )}
                    <div className="mt-1 text-sm text-gray-500">
                        {formatDate(message.created_at)}
                    </div>
                </div>
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="text-sm text-indigo-600 hover:text-indigo-900"
                >
                    {isExpanded ? '折りたたむ' : '詳細を見る'}
                </button>
            </div>
            {isExpanded && (
                <div className="mt-2 text-sm text-gray-900 whitespace-pre-wrap">
                    {message.content}
                </div>
            )}
        </div>
    );
} 
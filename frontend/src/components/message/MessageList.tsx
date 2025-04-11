'use client';

import { useEffect, useState } from 'react';
import { messages, Message } from '@/lib/api';
import MessageCard from './MessageCard';

export default function MessageList() {
    const [messageList, setMessageList] = useState<Message[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const data = await messages.list();
                setMessageList(data.messages);
            } catch (err) {
                setError('メッセージの取得に失敗しました');
            }
        };

        fetchMessages();
    }, []);

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (messageList.length === 0) {
        return <div>メッセージはありません</div>;
    }

    return (
        <div className="space-y-4">
            {messageList.map((message) => (
                <MessageCard key={message.id} message={message} />
            ))}
        </div>
    );
} 
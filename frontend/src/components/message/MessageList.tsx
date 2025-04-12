'use client';

import { useEffect, useState } from 'react';
import { messages, Message } from '@/lib/api';
import MessageCard from './MessageCard';

interface MessageListProps {
    type: 'sent' | 'received';
}

function MessageList({ type }: MessageListProps) {
    const [messageList, setMessageList] = useState<Message[]>([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                const data = type === 'sent'
                    ? await messages.list_sent()
                    : await messages.list_received();
                setMessageList(data.messages);
            } catch (err) {
                setError('メッセージの取得に失敗しました');
            }
        };

        fetchMessages();
    }, [type]);

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

export const SentMessageList = () => <MessageList type="sent" />;
export const ReceivedMessageList = () => <MessageList type="received" />;
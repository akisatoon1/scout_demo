'use client';

import { useState } from 'react';
import { messages } from '@/lib/api';

interface MessageFormProps {
    receiverId: number;
    onSuccess?: () => void;
}

export default function MessageForm({ receiverId, onSuccess }: MessageFormProps) {
    const [content, setContent] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await messages.create({ receiver_id: receiverId, content });
            setContent('');
            setError('');
            onSuccess?.();
        } catch (err) {
            setError('メッセージの送信に失敗しました');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            {error && <div className="text-red-500">{error}</div>}
            <div>
                <label htmlFor="content" className="block text-sm font-medium text-gray-700">
                    メッセージ
                </label>
                <textarea
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                    required
                />
            </div>
            <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
                送信
            </button>
        </form>
    );
} 
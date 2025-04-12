'use client';

import { useEffect, useState } from 'react';
import { Intern, interns } from '@/lib/api';
import MessageForm from '@/components/message/MessageForm';

export default function InternList() {
    const [internList, setInternList] = useState<Intern[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [selectedIntern, setSelectedIntern] = useState<Intern | null>(null);

    useEffect(() => {
        const fetchInterns = async () => {
            try {
                const response = await interns.list();
                setInternList(response.interns);
            } catch (err) {
                setError('インターン生の取得に失敗しました');
                console.error('Error fetching interns:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchInterns();
    }, []);

    const handleMessageSuccess = () => {
        setSelectedIntern(null);
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-[200px]">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-600 p-4">
                {error}
            </div>
        );
    }

    if (internList.length === 0) {
        return (
            <div className="text-center text-gray-600 p-4">
                インターン生が見つかりませんでした
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
                {internList.map((intern) => (
                    <div
                        key={intern.id}
                        className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                    >
                        <h3 className="text-xl font-semibold mb-2">{intern.name}</h3>
                        <button
                            onClick={() => setSelectedIntern(intern)}
                            className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
                        >
                            メッセージを送る
                        </button>
                    </div>
                ))}
            </div>

            {selectedIntern && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold">{selectedIntern.name}さんにメッセージを送る</h2>
                            <button
                                onClick={() => setSelectedIntern(null)}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                ✕
                            </button>
                        </div>
                        <MessageForm
                            receiverId={selectedIntern.id}
                            onSuccess={handleMessageSuccess}
                        />
                    </div>
                </div>
            )}
        </div>
    );
} 
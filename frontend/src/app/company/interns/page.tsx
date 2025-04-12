'use client';

import { useEffect, useState } from 'react';
import { InternProfile } from '@/lib/api';

export default function InternsPage() {
    const [interns, setInterns] = useState<InternProfile[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchInterns = async () => {
            try {
                // APIからインターン生一覧を取得する処理を実装
                // 仮のデータを使用
                const mockInterns: InternProfile[] = [
                    {
                        id: 1,
                        user_id: 1,
                        university: '東京大学',
                        introduction: 'プログラミングに興味があります。',
                        created_at: '2023-01-01T00:00:00.000Z',
                        updated_at: '2023-01-01T00:00:00.000Z'
                    },
                    {
                        id: 2,
                        user_id: 2,
                        university: '京都大学',
                        introduction: 'Web開発を学びたいです。',
                        created_at: '2023-01-02T00:00:00.000Z',
                        updated_at: '2023-01-02T00:00:00.000Z'
                    }
                ];
                setInterns(mockInterns);
                setLoading(false);
            } catch (err) {
                setError('インターン生一覧の取得に失敗しました');
                setLoading(false);
            }
        };

        fetchInterns();
    }, []);

    if (loading) {
        return <div>読み込み中...</div>;
    }

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h1 className="text-3xl font-extrabold text-gray-900">インターン生一覧</h1>
                    <div className="mt-6">
                        {interns.length > 0 ? (
                            <ul className="divide-y divide-gray-200">
                                {interns.map((intern) => (
                                    <li key={intern.id} className="py-4">
                                        <div className="flex space-x-3">
                                            <div className="flex-1 space-y-1">
                                                <div className="flex items-center justify-between">
                                                    <h3 className="text-sm font-medium">大学: {intern.university}</h3>
                                                </div>
                                                <p className="text-sm text-gray-500">{intern.introduction}</p>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p className="text-gray-500">インターン生が見つかりませんでした</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
} 
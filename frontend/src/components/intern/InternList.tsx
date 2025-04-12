'use client';

import { useEffect, useState } from 'react';
import { Intern, interns } from '@/lib/api';

export default function InternList() {
    const [internList, setInternList] = useState<Intern[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            {internList.map((intern) => (
                <div
                    key={intern.id}
                    className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
                >
                    <h3 className="text-xl font-semibold mb-2">{intern.name}</h3>
                    {intern.profile && (
                        <div className="space-y-2">
                            <p className="text-gray-600">
                                <span className="font-medium">大学：</span>
                                {intern.profile.university}
                            </p>
                            <p className="text-gray-600">
                                <span className="font-medium">自己紹介：</span>
                                {intern.profile.introduction}
                            </p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
} 
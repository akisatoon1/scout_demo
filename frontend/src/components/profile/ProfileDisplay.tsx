'use client';

import { useEffect, useState } from 'react';
import { profile, User, InternProfile, CompanyProfile } from '@/lib/api';

export default function ProfileDisplay() {
    const [userData, setUserData] = useState<(User & { profile: InternProfile | CompanyProfile | null }) | null>(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const data = await profile.get();
                setUserData(data);
            } catch (err) {
                setError('プロフィールの取得に失敗しました');
            }
        };

        fetchProfile();
    }, []);

    if (error) {
        return <div className="text-red-500">{error}</div>;
    }

    if (!userData) {
        return <div>読み込み中...</div>;
    }

    return (
        <div className="space-y-4">
            <div>
                <h2 className="text-lg font-medium text-gray-900">基本情報</h2>
                <dl className="mt-2 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                    <div>
                        <dt className="text-sm font-medium text-gray-500">名前</dt>
                        <dd className="mt-1 text-sm text-gray-900">{userData.name}</dd>
                    </div>
                    <div>
                        <dt className="text-sm font-medium text-gray-500">メールアドレス</dt>
                        <dd className="mt-1 text-sm text-gray-900">{userData.email}</dd>
                    </div>
                    <div>
                        <dt className="text-sm font-medium text-gray-500">種別</dt>
                        <dd className="mt-1 text-sm text-gray-900">
                            {userData.role === 'intern' ? 'インターン生' : '企業'}
                        </dd>
                    </div>
                </dl>
            </div>

            <div>
                <h2 className="text-lg font-medium text-gray-900">プロフィール情報</h2>
                {userData.profile ? (
                    <dl className="mt-2 grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                        {userData.role === 'intern' ? (
                            <>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">大学</dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {(userData.profile as InternProfile).university}
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">自己紹介</dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {(userData.profile as InternProfile).introduction}
                                    </dd>
                                </div>
                            </>
                        ) : (
                            <>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">業界</dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {(userData.profile as CompanyProfile).industry}
                                    </dd>
                                </div>
                                <div>
                                    <dt className="text-sm font-medium text-gray-500">企業説明</dt>
                                    <dd className="mt-1 text-sm text-gray-900">
                                        {(userData.profile as CompanyProfile).description}
                                    </dd>
                                </div>
                            </>
                        )}
                    </dl>
                ) : (
                    <div className="mt-2 text-sm text-gray-500">プロフィール情報がありません</div>
                )}
            </div>
        </div>
    );
} 
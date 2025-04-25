import ProfileDisplay from '@/components/profile/ProfileDisplay';
import Link from 'next/link';

export default function InternProfilePage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-extrabold text-gray-900">インターン生プロフィール</h1>
                        <Link href="/intern/messages" className="text-indigo-600 hover:text-indigo-500 font-medium">
                            メッセージ一覧を見る
                        </Link>
                    </div>
                    <div className="mt-6">
                        <ProfileDisplay />
                    </div>
                </div>
            </div>
        </div>
    );
} 
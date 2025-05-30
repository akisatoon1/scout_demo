import CompanyLoginForm from '@/components/auth/CompanyLoginForm';
import Link from 'next/link';

export default function CompanyLoginPage() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                        企業としてログイン
                    </h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        または{' '}
                        <Link href="/auth/register" className="font-medium text-indigo-600 hover:text-indigo-500">
                            新規登録はこちら
                        </Link>
                    </p>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        <Link href="/auth/login/intern" className="font-medium text-indigo-600 hover:text-indigo-500">
                            インターン生としてログイン
                        </Link>
                    </p>
                </div>
                <CompanyLoginForm />
            </div>
        </div>
    );
} 
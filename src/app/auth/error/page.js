'use client';

import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';

export default function AuthError() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t } = useLanguage();
  const error = searchParams.get('error');

  useEffect(() => {
    if (!error) {
      router.replace('/auth/signin');
    }
  }, [error, router]);

  const getErrorMessage = () => {
    switch (error) {
      case 'Signin':
        return t('app.auth.errors.general');
      case 'OAuthSignin':
        return t('app.auth.errors.oauthSignin');
      case 'OAuthCallback':
        return t('app.auth.errors.oauthCallback');
      case 'OAuthCreateAccount':
        return t('app.auth.errors.oauthCreateAccount');
      case 'EmailCreateAccount':
        return t('app.auth.errors.emailCreateAccount');
      case 'Callback':
        return t('app.auth.errors.callback');
      case 'OAuthAccountNotLinked':
        return t('app.auth.errors.oauthAccountNotLinked');
      case 'EmailSignin':
        return t('app.auth.errors.emailSignin');
      case 'CredentialsSignin':
        return t('app.auth.errors.invalidCredentials');
      case 'SessionRequired':
        return t('app.auth.errors.sessionRequired');
      default:
        return t('app.auth.errors.default');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {t('app.auth.errors.title')}
          </h2>
          <div className="mt-2 text-center text-sm text-gray-600">
            <p className="font-medium text-red-600">
              {getErrorMessage()}
            </p>
          </div>
        </div>
        <div className="mt-5 flex justify-center">
          <button
            onClick={() => router.replace('/auth/signin')}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            {t('app.auth.errors.backToSignIn')}
          </button>
        </div>
      </div>
    </div>
  );
}

'use client';

import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import Image from 'next/image';

export default function ProfileMenu() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const { t, locale, changeLanguage } = useLanguage();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/auth/signin');
  };

  const getInitials = (name) => {
    if (!name) return '';
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  const toggleLanguage = () => {
    changeLanguage(locale === 'es' ? 'en' : 'es');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        {session?.user?.image ? (
          <Image
            src={session.user.image}
            alt={session.user.name}
            width={40}
            height={40}
            className="rounded-full"
          />
        ) : (
          <span className="text-sm font-medium">
            {getInitials(session?.user?.name)}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5">
          <div className="px-4 py-3 text-sm text-gray-700 border-b border-gray-200">
            <p className="font-medium">{session?.user?.name}</p>
            <p className="text-xs text-gray-500">{session?.user?.email}</p>
          </div>

          <div className="px-4 py-3 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-700">{t('app.language')}</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLanguage();
                }}
                className="relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                style={{
                  backgroundColor: locale === 'es' ? '#3B82F6' : '#9CA3AF'
                }}
              >
                <span className="sr-only">
                  {locale === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'}
                </span>
                <span
                  className={`
                    ${locale === 'es' ? 'translate-x-6' : 'translate-x-1'}
                    inline-block w-4 h-4 transform bg-white rounded-full transition-transform duration-200 ease-in-out
                  `}
                />
                <span className={`
                  absolute text-xs font-medium text-white
                  ${locale === 'es' ? 'left-1.5' : 'right-1.5'}
                `}>
                  {locale.toUpperCase()}
                </span>
              </button>
            </div>
          </div>

          <Link
            href="/profile"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            onClick={() => setIsOpen(false)}
          >
            {t('profile.title')}
          </Link>

          <button
            onClick={handleSignOut}
            className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
          >
            {t('app.auth.signOut')}
          </button>
        </div>
      )}
    </div>
  );
}

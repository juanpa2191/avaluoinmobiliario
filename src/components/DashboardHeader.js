'use client';

import { useLanguage } from '@/context/LanguageContext';
import ProfileMenu from './ProfileMenu';
import Link from 'next/link';
import { HiPlus } from 'react-icons/hi';
import { usePathname } from 'next/navigation';

export default function DashboardHeader() {
  const { t } = useLanguage();
  const pathname = usePathname();

  const isActive = (path) => pathname.startsWith(path);

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between items-center">
          <div className="flex items-center">
            <Link 
              href="/dashboard" 
              className="flex items-center"
            >
              <h1 className="text-xl font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                {t('app.general.appName')}
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <ProfileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from '@/context/LanguageContext';
import { useSession } from 'next-auth/react';
import { HiUsers, HiHome, HiClipboardList, HiChartBar } from 'react-icons/hi';

export default function Sidebar() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const { data: session } = useSession();

  const isAdmin = session?.user?.role === 'admin';

  const menuItems = [
    {
      name: t('app.sidebar.dashboard'),
      href: '/dashboard',
      icon: HiChartBar,
      show: true,
      description: t('app.sidebar.dashboardDesc')
    },
    {
      name: t('app.sidebar.appraisals'),
      href: '/avaluo',
      icon: HiClipboardList,
      show: true,
      description: t('app.sidebar.appraisalsDesc')
    },
    {
      name: t('app.sidebar.users'),
      href: '/usuarios',
      icon: HiUsers,
      show: isAdmin,
      description: t('app.sidebar.usersDesc')
    }
  ];

  const isActive = (path) => pathname === path;

  return (
    <aside className="hidden md:flex flex-col w-72 bg-gray-50 border-r border-gray-200">
      <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto">
        <div className="flex-shrink-0 px-4">
          <img
            className="h-8 w-auto"
            src="/logo.png"
            alt={t('app.general.appName')}
          />
        </div>
        <nav className="mt-8 flex-1 px-4 space-y-2">
          {menuItems.filter(item => item.show).map((item) => {
            const Icon = item.icon;
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  group flex items-center px-3 py-3 text-sm font-medium rounded-lg
                  ${active 
                    ? 'bg-blue-50 text-blue-600' 
                    : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  }
                `}
              >
                <Icon
                  className={`
                    mr-3 h-6 w-6 flex-shrink-0
                    ${active
                      ? 'text-blue-600'
                      : 'text-gray-400 group-hover:text-gray-500'
                    }
                  `}
                  aria-hidden="true"
                />
                <div>
                  <span className="block">{item.name}</span>
                  <span className={`
                    block text-xs mt-0.5
                    ${active ? 'text-blue-500' : 'text-gray-500'}
                  `}>
                    {item.description}
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
        <div className="flex-shrink-0 w-full group block">
          <div className="flex items-center">
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                {session?.user?.name}
              </p>
              <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700">
                {session?.user?.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

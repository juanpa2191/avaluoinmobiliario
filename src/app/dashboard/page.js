'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { FaFileAlt, FaUserAlt, FaChartBar } from 'react-icons/fa';
import Link from 'next/link';

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { t } = useLanguage();

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.push('/auth/signin');
    }
  }, [status, router]);

  if (status === 'loading') {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  const cards = [
    {
      title: t('app.avaluo.title'),
      icon: <FaFileAlt className="h-6 w-6" />,
      stats: '0',
      actions: [
        {
          label: t('app.avaluo.new'),
          href: '/avaluo/nuevo',
          primary: true
        },
        {
          label: t('app.avaluo.list'),
          href: '/avaluo',
          primary: false
        }
      ]
    },
    {
      title: t('app.users.title'),
      icon: <FaUserAlt className="h-6 w-6" />,
      stats: '0',
      actions: [
        {
          label: t('app.users.new'),
          href: '/usuarios/nuevo',
          primary: true
        },
        {
          label: t('app.users.list'),
          href: '/usuarios',
          primary: false
        }
      ]
    },
    {
      title: t('app.dashboard.stats.title'),
      icon: <FaChartBar className="h-6 w-6" />,
      stats: '0',
      actions: [
        {
          label: t('app.dashboard.stats.view'),
          href: '/estadisticas',
          primary: true
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-8">
        {t('app.dashboard.welcome')}, {session?.user?.name}!
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold">{card.title}</h2>
              <div className="text-blue-600">{card.icon}</div>
            </div>
            <p className="text-3xl font-bold text-gray-700 mb-4">{card.stats}</p>
            <div className="space-y-2">
              {card.actions.map((action, actionIndex) => (
                <Link
                  key={actionIndex}
                  href={action.href}
                  className={`block w-full text-center px-4 py-2 rounded-md ${
                    action.primary
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {action.label}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

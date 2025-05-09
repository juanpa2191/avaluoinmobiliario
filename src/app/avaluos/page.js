'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { HiPlus } from 'react-icons/hi';

export default function Avaluos() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const { t } = useLanguage();
  const [appraisals, setAppraisals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/auth/signin');
      return;
    }

    const fetchAppraisals = async () => {
      try {
        const response = await fetch('/api/appraisals');
        const data = await response.json();
        
        if (!response.ok) {
          throw new Error(data.error);
        }

        setAppraisals(data);
      } catch (error) {
        console.error('Error fetching appraisals:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAppraisals();
  }, [status, router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold text-gray-900">
          {t('app.appraisal.list.title')}
        </h1>
        <button
          onClick={() => router.push('/avaluo/nuevo')}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
        >
          <HiPlus className="h-5 w-5 mr-2" />
          {t('app.appraisal.new.title')}
        </button>
      </div>

      <div className="bg-white shadow-sm rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t('app.appraisal.address')}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t('app.appraisal.propertyType')}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t('app.appraisal.statusLabel')}
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t('app.general.date')}
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                {t('app.general.actions')}
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {appraisals.map((appraisal) => (
              <tr key={appraisal._id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {appraisal.address}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {t(`app.appraisal.types.${appraisal.propertyType}`)}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                    ${appraisal.status === 'completed' ? 'bg-green-100 text-green-800' : 
                      appraisal.status === 'in_progress' ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-gray-100 text-gray-800'}`}>
                    {t(`app.appraisal.status.${appraisal.status}`)}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {new Date(appraisal.createdAt).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => router.push(`/avaluo/${appraisal._id}`)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    {t('app.general.view')}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

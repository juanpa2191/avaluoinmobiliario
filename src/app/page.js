'use client';

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { useRouter } from 'next/navigation';

export default function Home() {
  const { t } = useLanguage();
  const router = useRouter();
  
  return (
    <>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={180}
            height={38}
            priority
          />
          
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{t('app.general.appName')}</h1>
            <p className="text-xl text-gray-600 mb-8">{t('app.landing.description')}</p>
            
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => router.push('/auth/signin')}
                className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                {t('app.auth.signIn')}
              </button>
              <button
                onClick={() => router.push('/auth/signup')}
                className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium"
              >
                {t('app.auth.signUp')}
              </button>
            </div>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">{t('app.landing.features.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="font-bold mb-2">{t('app.landing.features.professionalAppraisals.title')}</h3>
                <p className="text-gray-600">{t('app.landing.features.professionalAppraisals.description')}</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="font-bold mb-2">{t('app.landing.features.detailedReports.title')}</h3>
                <p className="text-gray-600">{t('app.landing.features.detailedReports.description')}</p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md">
                <h3 className="font-bold mb-2">{t('app.landing.features.efficientManagement.title')}</h3>
                <p className="text-gray-600">{t('app.landing.features.efficientManagement.description')}</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

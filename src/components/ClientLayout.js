'use client';

import { SessionProvider } from 'next-auth/react';
import { LanguageProvider } from '@/context/LanguageContext';
import { Toaster } from 'react-hot-toast';
import Header from './Header';
import DashboardHeader from './DashboardHeader';
import Sidebar from './Sidebar';
import { usePathname } from 'next/navigation';

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  // Consideramos páginas públicas: página principal y autenticación
  const isPublicPage = pathname === '/' || pathname?.startsWith('/auth');

  return (
    <SessionProvider>
      <LanguageProvider>
        <Toaster 
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#333',
              color: '#fff',
            },
            success: {
              style: {
                background: '#22c55e',
              },
            },
            error: {
              style: {
                background: '#ef4444',
              },
            },
          }}
        />
        <div className="min-h-screen">
          {isPublicPage ? (
            <>
              <Header />
              {children}
            </>
          ) : (
            <>
              <DashboardHeader />
              <div className="flex h-[calc(100vh-64px)]">
                <Sidebar />
                <main className="flex-1 overflow-auto bg-gray-50">
                  <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    {children}
                  </div>
                </main>
              </div>
            </>
          )}
        </div>
      </LanguageProvider>
    </SessionProvider>
  );
}

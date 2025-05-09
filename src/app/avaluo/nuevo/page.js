'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { toast } from 'react-hot-toast';
import AvaluoForm from '@/components/avaluo/AvaluoForm';

export default function NuevoAvaluo() {
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

  const handleSave = async (data) => {
    try {
      const response = await fetch('/api/avaluo', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(t('errors.saveAvaluo'));
      }

      const result = await response.json();
      toast.success(t('success.avaluoSaved'));
      router.push(`/avaluo/${result.id}`);
    } catch (error) {
      console.error('Error al guardar:', error);
      toast.error(error.message);
    }
  };

  const handleFinalize = async (data) => {
    try {
      const response = await fetch('/api/avaluo/finalize', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(t('errors.finalizeAvaluo'));
      }

      const result = await response.json();
      toast.success(t('success.avaluoFinalized'));
      router.push(`/avaluo/${result.id}`);
    } catch (error) {
      console.error('Error al finalizar:', error);
      toast.error(error.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">{t('avaluo.new')}</h1>
      <AvaluoForm onSave={handleSave} onFinalize={handleFinalize} />
    </div>
  );
}

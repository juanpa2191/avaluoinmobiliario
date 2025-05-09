'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useLanguage } from '@/context/LanguageContext';
import toast from 'react-hot-toast';

export default function EditarUsuario({ params }) {
  const router = useRouter();
  const { data: session, status } = useSession();
  const { t } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [user, setUser] = useState({
    name: '',
    phone: '',
    role: 'user'
  });

  useEffect(() => {
    if (status === 'unauthenticated') {
      router.replace('/auth/signin');
      return;
    }

    if (session?.user?.role !== 'admin') {
      router.replace('/dashboard');
      return;
    }

    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/user/${params.id}`);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error);
        }

        setUser(data);
      } catch (error) {
        console.error('Error fetching user:', error);
        toast.error(t('app.errors.fetchUser'));
      } finally {
        setLoading(false);
      }
    };

    if (params.id !== 'nuevo') {
      fetchUser();
    } else {
      setLoading(false);
    }
  }, [params.id, session, status, router, t]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSaving(true);

    try {
      const url = params.id === 'nuevo' 
        ? '/api/user/create'
        : `/api/user/${params.id}`;
      
      const method = params.id === 'nuevo' ? 'POST' : 'PUT';

      const response = await fetch(url, {
        method,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      toast.success(t(params.id === 'nuevo' ? 'app.users.created' : 'app.users.updated'));
      router.push('/usuarios');
    } catch (error) {
      console.error('Error:', error);
      toast.error(t('app.errors.saveUser'));
    } finally {
      setSaving(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,
      [name]: value
    }));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:items-center md:justify-between mb-6">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
              {params.id === 'nuevo' ? t('app.users.new') : t('app.users.edit')}
            </h2>
          </div>
        </div>

        <div className="bg-white shadow rounded-lg">
          <form onSubmit={handleSubmit} className="space-y-6 p-6">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  {t('app.users.name')}
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={user.name}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  {t('app.users.phone')}
                </label>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={user.phone}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                  {t('app.users.role')}
                </label>
                <div className="mt-1">
                  <select
                    id="role"
                    name="role"
                    value={user.role}
                    onChange={handleChange}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  >
                    <option value="user">{t('app.users.roles.user')}</option>
                    <option value="admin">{t('app.users.roles.admin')}</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-5">
              <button
                type="button"
                onClick={() => router.push('/usuarios')}
                className="inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {t('app.general.cancel')}
              </button>
              <button
                type="submit"
                disabled={saving}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                {saving ? t('app.general.saving') : t('app.general.save')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

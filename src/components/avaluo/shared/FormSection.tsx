'use client';

import { ReactNode } from 'react';
import { Tab } from '@headlessui/react';
import { HiCheck, HiExclamation } from 'react-icons/hi';

interface FormSectionProps {
  title: string;
  children: ReactNode;
  isValid?: boolean;
  isDirty?: boolean;
  onSave?: () => void;
}

export default function FormSection({ title, children, isValid, isDirty, onSave }: FormSectionProps) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            {title}
          </h3>
          <div className="flex items-center mt-1">
            {isValid !== undefined && (
              <div className={`flex items-center ${isValid ? 'text-green-600' : 'text-yellow-600'}`}>
                {isValid ? (
                  <HiCheck className="h-5 w-5" />
                ) : (
                  <HiExclamation className="h-5 w-5" />
                )}
                <span className="ml-1 text-sm">
                  {isValid ? 'Sección completa' : 'Campos requeridos pendientes'}
                </span>
              </div>
            )}
          </div>
        </div>
        {onSave && (
          <button
            type="button"
            onClick={onSave}
            disabled={!isDirty}
            className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white
              ${isDirty
                ? 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                : 'bg-gray-300 cursor-not-allowed'
              }`}
          >
            Guardar cambios
          </button>
        )}
      </div>
      <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
        {children}
      </div>
    </div>
  );
}

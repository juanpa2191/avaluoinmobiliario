'use client';

import { useFormContext } from 'react-hook-form';
import { useLanguage } from '@/context/LanguageContext';
import FormField from '../shared/FormField';
import type { Avaluo } from '@/types/avaluo.types';

export default function InformacionGeneral() {
  const { register, formState: { errors } } = useFormContext<Avaluo>();
  const error = errors.informacionGeneral;
  const { t } = useLanguage();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <FormField
        label={t('app.appraisal.informacionGeneral.fechaEntrega')}
        required
        error={error?.fechaEntrega?.message as string}
      >
        <input
          type="date"
          {...register('informacionGeneral.fechaEntrega')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </FormField>

      <FormField
        label={t('appraisal.informacionGeneral.fechaVisita')}
        required
        error={error?.fechaVisita?.message as string}
      >
        <input
          type="date"
          {...register('informacionGeneral.fechaVisita')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </FormField>

      <FormField
        label={t('appraisal.informacionGeneral.vigenciaAvaluo')}
        error={error?.vigenciaAvaluo?.message as string}
      >
        <input
          type="text"
          {...register('informacionGeneral.vigenciaAvaluo')}
          placeholder={t('appraisal.informacionGeneral.vigenciaAvaluoPlaceholder')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </FormField>

      <FormField
        label={t('appraisal.informacionGeneral.solicitante')}
        required
        error={error?.solicitante?.message as string}
      >
        <input
          type="text"
          {...register('informacionGeneral.solicitante')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </FormField>

      <FormField
        label={t('appraisal.informacionGeneral.departamento')}
        required
        error={error?.departamento?.message as string}
      >
        <input
          type="text"
          {...register('informacionGeneral.departamento')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </FormField>

      <FormField
        label={t('appraisal.informacionGeneral.municipio')}
        required
        error={error?.municipio?.message as string}
      >
        <input
          type="text"
          {...register('informacionGeneral.municipio')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </FormField>

      <FormField
        label={t('appraisal.informacionGeneral.barrioVereda')}
        error={error?.barrioVereda?.message as string}
      >
        <input
          type="text"
          {...register('informacionGeneral.barrioVereda')}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </FormField>

      <FormField
        label={t('appraisal.informacionGeneral.objetoAvaluo')}
        required
        error={error?.objetoAvaluo?.message as string}
      >
        <textarea
          {...register('informacionGeneral.objetoAvaluo')}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
        />
      </FormField>

      <div className="col-span-2">
        <FormField
          label={t('appraisal.informacionGeneral.destinoAvaluo')}
          error={error?.destinoAvaluo?.message as string}
        >
          <textarea
            {...register('informacionGeneral.destinoAvaluo')}
            rows={3}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </FormField>
      </div>

      <div className="col-span-2">
        <FormField
          label={t('appraisal.informacionGeneral.responsabilidadesAvaluador')}
          error={error?.responsabilidadesAvaluador?.message as string}
        >
          <div className="space-y-2">
            {(() => {
              const list = t('appraisal.informacionGeneral.responsabilidadesList.list', { returnObjects: true });
              const responsabilidades = Array.isArray(list) ? list : [];
              return responsabilidades.map((resp: string, index: number) => (
                <label key={index} className="flex items-center">
                  <input
                    type="checkbox"
                    value={resp}
                    {...register('informacionGeneral.responsabilidadesAvaluador')}
                    className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm text-gray-700">{resp}</span>
                </label>
              ));
            })()
          }</div>
        </FormField>
      </div>
    </div>
  );
}

'use client';

import { useFormContext, useFieldArray } from 'react-hook-form';
import FormField from '../shared/FormField';
import type { Avaluo } from '@/types/avaluo.types';
import { HiPlus, HiTrash } from 'react-icons/hi';
import { useLanguage } from '@/context/LanguageContext';

export default function InspeccionFisica() {
  const { register, formState: { errors }, control } = useFormContext<Avaluo>();
  const error = errors.inspeccionFisica;
  const { t } = useLanguage();

  const { fields: especificacionesFields, append: appendEspecificacion, remove: removeEspecificacion } = useFieldArray({
    control,
    name: 'inspeccionFisica.especificacionesConstructivas.especificacionConstructiva'
  });

  const { fields: acabadosFields, append: appendAcabado, remove: removeAcabado } = useFieldArray({
    control,
    name: 'inspeccionFisica.especificacionesConstructivas.acabados'
  });

  const { fields: distribucionFields, append: appendDistribucion, remove: removeDistribucion } = useFieldArray({
    control,
    name: 'inspeccionFisica.especificacionesConstructivas.distribucionInteriorApartamento'
  });

  return (
    <div className="space-y-8">
      {/* Esquema normativo */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="text-lg font-medium text-gray-900 mb-4">{t('appraisal.inspeccionFisica.esquemaNormativo.titulo')}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label={t('appraisal.inspeccionFisica.esquemaNormativo.esquema')}
            error={error?.esquemaNormativo?.message as string}
          >
            <textarea
              {...register('inspeccionFisica.esquemaNormativo')}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </FormField>

          <FormField
            label={t('appraisal.inspeccionFisica.esquemaNormativo.zonaBarrio')}
            error={error?.zonaBarrio?.message as string}
          >
            <input
              type="text"
              {...register('inspeccionFisica.zonaBarrio')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </FormField>

          <FormField
            label={t('appraisal.inspeccionFisica.esquemaNormativo.clasificacionSuelo.titulo')}
            error={error?.clasificacionSuelo?.message as string}
          >
            <select
              {...register('inspeccionFisica.clasificacionSuelo')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="">{t('appraisal.inspeccionFisica.esquemaNormativo.clasificacionSuelo.opciones.seleccione')}</option>
              <option value="URBANO">{t('appraisal.inspeccionFisica.esquemaNormativo.clasificacionSuelo.opciones.urbano')}</option>
              <option value="RURAL">{t('appraisal.inspeccionFisica.esquemaNormativo.clasificacionSuelo.opciones.rural')}</option>
              <option value="EXPANSION">{t('appraisal.inspeccionFisica.esquemaNormativo.clasificacionSuelo.opciones.expansion')}</option>
            </select>
          </FormField>

          <FormField
            label={t('appraisal.inspeccionFisica.esquemaNormativo.categoriaUso')}
            error={error?.categoriaUso?.message as string}
          >
            <input
              type="text"
              {...register('inspeccionFisica.categoriaUso')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </FormField>
        </div>
      </div>

      {/* Especificaciones constructivas */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-medium text-gray-900">{t('appraisal.inspeccionFisica.especificacionesConstructivas.titulo')}</h4>
          <button
            type="button"
            onClick={() => appendEspecificacion({ tipo: '', identificacion: '', sistemaEstructural: '', tipoMamposteria: '', espesorMuros: '', cubierta: '' })}
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <HiPlus className="h-4 w-4 mr-1" />
            {t('appraisal.inspeccionFisica.especificacionesConstructivas.agregar')}
          </button>
        </div>

        <div className="space-y-4">
          {especificacionesFields.map((field, index) => (
            <div key={field.id} className="relative border rounded-lg p-4">
              <button
                type="button"
                onClick={() => removeEspecificacion(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                <HiTrash className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label={t('appraisal.inspeccionFisica.especificacionesConstructivas.tipo')}
                  error={error?.especificacionesConstructivas?.especificacionConstructiva?.[index]?.tipo?.message as string}
                >
                  <input
                    type="text"
                    {...register(`inspeccionFisica.especificacionesConstructivas.especificacionConstructiva.${index}.tipo`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </FormField>

                <FormField
                  label={t('appraisal.inspeccionFisica.especificacionesConstructivas.identificacion')}
                  error={error?.especificacionesConstructivas?.especificacionConstructiva?.[index]?.identificacion?.message as string}
                >
                  <input
                    type="text"
                    {...register(`inspeccionFisica.especificacionesConstructivas.especificacionConstructiva.${index}.identificacion`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </FormField>

                <FormField
                  label={t('appraisal.inspeccionFisica.especificacionesConstructivas.sistemaEstructural')}
                  error={error?.especificacionesConstructivas?.especificacionConstructiva?.[index]?.sistemaEstructural?.message as string}
                >
                  <input
                    type="text"
                    {...register(`inspeccionFisica.especificacionesConstructivas.especificacionConstructiva.${index}.sistemaEstructural`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </FormField>

                <FormField
                  label={t('appraisal.inspeccionFisica.especificacionesConstructivas.tipoMamposteria')}
                  error={error?.especificacionesConstructivas?.especificacionConstructiva?.[index]?.tipoMamposteria?.message as string}
                >
                  <input
                    type="text"
                    {...register(`inspeccionFisica.especificacionesConstructivas.especificacionConstructiva.${index}.tipoMamposteria`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </FormField>

                <FormField
                  label={t('appraisal.inspeccionFisica.especificacionesConstructivas.espesorMuros')}
                  error={error?.especificacionesConstructivas?.especificacionConstructiva?.[index]?.espesorMuros?.message as string}
                >
                  <input
                    type="text"
                    {...register(`inspeccionFisica.especificacionesConstructivas.especificacionConstructiva.${index}.espesorMuros`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </FormField>

                <FormField
                  label={t('appraisal.inspeccionFisica.especificacionesConstructivas.cubierta')}
                  error={error?.especificacionesConstructivas?.especificacionConstructiva?.[index]?.cubierta?.message as string}
                >
                  <input
                    type="text"
                    {...register(`inspeccionFisica.especificacionesConstructivas.especificacionConstructiva.${index}.cubierta`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </FormField>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Acabados */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-medium text-gray-900">{t('appraisal.inspeccionFisica.acabados.titulo')}</h4>
          <button
            type="button"
            onClick={() => appendAcabado({ tipo: '', identificacion: '', descripcion: '', acabadosYmateriales: '' })}
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <HiPlus className="h-4 w-4 mr-1" />
            {t('appraisal.inspeccionFisica.acabados.agregar')}
          </button>
        </div>

        <div className="space-y-4">
          {acabadosFields.map((field, index) => (
            <div key={field.id} className="relative border rounded-lg p-4">
              <button
                type="button"
                onClick={() => removeAcabado(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                <HiTrash className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label="Tipo"
                  error={error?.especificacionesConstructivas?.acabados?.[index]?.tipo?.message as string}
                >
                  <input
                    type="text"
                    {...register(`inspeccionFisica.especificacionesConstructivas.acabados.${index}.tipo`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </FormField>

                <FormField
                  label={t('appraisal.inspeccionFisica.acabados.identificacion')}
                  error={error?.especificacionesConstructivas?.acabados?.[index]?.identificacion?.message as string}
                >
                  <input
                    type="text"
                    {...register(`inspeccionFisica.especificacionesConstructivas.acabados.${index}.identificacion`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </FormField>

                <FormField
                  label={t('appraisal.inspeccionFisica.acabados.descripcion')}
                  error={error?.especificacionesConstructivas?.acabados?.[index]?.descripcion?.message as string}
                >
                  <textarea
                    {...register(`inspeccionFisica.especificacionesConstructivas.acabados.${index}.descripcion`)}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </FormField>

                <FormField
                  label={t('appraisal.inspeccionFisica.acabados.acabadosYmateriales')}
                  error={error?.especificacionesConstructivas?.acabados?.[index]?.acabadosYmateriales?.message as string}
                >
                  <textarea
                    {...register(`inspeccionFisica.especificacionesConstructivas.acabados.${index}.acabadosYmateriales`)}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </FormField>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Distribución interior */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-medium text-gray-900">{t('appraisal.inspeccionFisica.distribucionInterior.titulo')}</h4>
          <button
            type="button"
            onClick={() => appendDistribucion({ numeroInterior: '', tipo: '', descripcion: [], cantidad: [] })}
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <HiPlus className="h-4 w-4 mr-1" />
            {t('appraisal.inspeccionFisica.distribucionInterior.agregar')}
          </button>
        </div>

        <div className="space-y-4">
          {distribucionFields.map((field, index) => (
            <div key={field.id} className="relative border rounded-lg p-4">
              <button
                type="button"
                onClick={() => removeDistribucion(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                <HiTrash className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label={t('appraisal.inspeccionFisica.distribucionInterior.numeroInterior')}
                  error={error?.especificacionesConstructivas?.distribucionInteriorApartamento?.[index]?.numeroInterior?.message as string}
                >
                  <input
                    type="text"
                    {...register(`inspeccionFisica.especificacionesConstructivas.distribucionInteriorApartamento.${index}.numeroInterior`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </FormField>

                <FormField
                  label={t('appraisal.inspeccionFisica.distribucionInterior.tipo')}
                  error={error?.especificacionesConstructivas?.distribucionInteriorApartamento?.[index]?.tipo?.message as string}
                >
                  <input
                    type="text"
                    {...register(`inspeccionFisica.especificacionesConstructivas.distribucionInteriorApartamento.${index}.tipo`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </FormField>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useFormContext, useFieldArray } from 'react-hook-form';
import { useLanguage } from '@/context/LanguageContext';
import FormField from '../shared/FormField';
import ImageUploader from '../shared/ImageUploader';
import type { Avaluo } from '@/types/avaluo.types';
import { HiPlus, HiTrash } from 'react-icons/hi';

export default function CaracteristicasGenerales() {
  const { register, formState: { errors }, control } = useFormContext<Avaluo>();
  const error = errors.caracteristicasGenerales;
  const { t } = useLanguage();

  const { fields: serviciosFields, append: appendServicio, remove: removeServicio } = useFieldArray({
    control,
    name: 'caracteristicasGenerales.serviciosPublicos'
  });

  return (
    <div className="space-y-8">
      {/* Forma geométrica y dimensiones */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="text-lg font-medium text-gray-900 mb-4">{t('appraisal.caracteristicasGenerales.formaGeometricaYdimensionDelPredio.titulo')}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label={t('appraisal.caracteristicasGenerales.formaGeometricaYdimensionDelPredio.formaTerreno')}
            error={error?.formaGeometricaYdimensionDelPredio?.formaTerreno?.message as string}
          >
            <select
              {...register('caracteristicasGenerales.formaGeometricaYdimensionDelPredio.formaTerreno')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="">{t('general.select')}</option>
              {(() => {
                const formas = t('appraisal.caracteristicasGenerales.formaGeometricaYdimensionDelPredio.formas', { returnObjects: true });
                return Array.isArray(formas) ? formas.map((forma) => (
                  <option key={forma.value} value={forma.value}>{forma.label}</option>
                )) : null;
              })()}
            </select>
          </FormField>

          <FormField
            label={t('appraisal.caracteristicasGenerales.formaGeometricaYdimensionDelPredio.anchoTerreno')}
            error={error?.formaGeometricaYdimensionDelPredio?.anchoTerreno?.message as string}
          >
            <input
              type="number"
              step="0.01"
              {...register('caracteristicasGenerales.formaGeometricaYdimensionDelPredio.anchoTerreno', {
                valueAsNumber: true
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </FormField>

          <FormField
            label={t('appraisal.caracteristicasGenerales.formaGeometricaYdimensionDelPredio.largoTerreno')}
            error={error?.formaGeometricaYdimensionDelPredio?.largoTerreno?.message as string}
          >
            <input
              type="number"
              step="0.01"
              {...register('caracteristicasGenerales.formaGeometricaYdimensionDelPredio.largoTerreno', {
                valueAsNumber: true
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </FormField>

          <FormField
            label={t('appraisal.caracteristicasGenerales.formaGeometricaYdimensionDelPredio.areaTerreno')}
            error={error?.formaGeometricaYdimensionDelPredio?.areaTerreno?.message as string}
          >
            <input
              type="number"
              step="0.01"
              {...register('caracteristicasGenerales.formaGeometricaYdimensionDelPredio.areaTerreno', {
                valueAsNumber: true
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </FormField>
        </div>
      </div>

      {/* Descripción condiciones del sector */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <FormField
          label={t('appraisal.caracteristicasGenerales.descripcionCondicionesSector')}
          error={error?.descripcionCondicionesSector?.message as string}
        >
          <textarea
            {...register('caracteristicasGenerales.descripcionCondicionesSector')}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </FormField>
      </div>

      {/* Estrato socioeconómico */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="text-lg font-medium text-gray-900 mb-4">{t('appraisal.caracteristicasGenerales.estratoSocioeconomico.titulo')}</h4>
        <div className="space-y-4">
          <FormField
            label={t('appraisal.caracteristicasGenerales.estratoSocioeconomico.descripcion')}
            error={error?.estratoSocioeconomico?.descripcion?.message as string}
          >
            <textarea
              {...register('caracteristicasGenerales.estratoSocioeconomico.descripcion')}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </FormField>

          <FormField
            label={t('appraisal.caracteristicasGenerales.estratoSocioeconomico.estrato')}
            error={error?.estratoSocioeconomico?.estrato?.message as string}
          >
            <select
              {...register('caracteristicasGenerales.estratoSocioeconomico.estrato')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="">{t('general.select')}</option>
              {(() => {
                const estratos = t('appraisal.caracteristicasGenerales.estratoSocioeconomico.estratos', { returnObjects: true });
                return Array.isArray(estratos) ? estratos.map((estrato) => (
                  <option key={estrato.value} value={estrato.value}>{estrato.label}</option>
                )) : null;
              })()}
            </select>
          </FormField>
        </div>
      </div>

      {/* Servicios públicos */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-medium text-gray-900 mb-4">{t('appraisal.caracteristicasGenerales.serviciosPublicos.titulo')}</h4>
          <button
            type="button"
            onClick={() => appendServicio({ nombre: '', disponible: false })}
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <HiPlus className="h-4 w-4 mr-1" />
            {t('appraisal.caracteristicasGenerales.serviciosPublicos.agregar')}
          </button>
        </div>

        <div className="space-y-4">
          {serviciosFields.map((field, index) => (
            <div key={field.id} className="flex items-center space-x-4">
              <FormField
                label={t('appraisal.caracteristicasGenerales.serviciosPublicos.nombre')}
                error={error?.serviciosPublicos?.[index]?.nombre?.message as string}
              >
                <input
                  type="text"
                  {...register(`caracteristicasGenerales.serviciosPublicos.${index}.nombre`)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                />
              </FormField>

              <FormField
                label={t('appraisal.caracteristicasGenerales.serviciosPublicos.disponible')}
                error={error?.serviciosPublicos?.[index]?.disponible?.message as string}
              >
                <input
                  type="checkbox"
                  {...register(`caracteristicasGenerales.serviciosPublicos.${index}.disponible`)}
                  className="mt-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
              </FormField>

              <button
                type="button"
                onClick={() => removeServicio(index)}
                className="mt-6 text-red-500 hover:text-red-700"
              >
                <HiTrash className="h-5 w-5" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Infraestructura ecológica */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="text-lg font-medium text-gray-900 mb-4">{t('appraisal.caracteristicasGenerales.infraestructuraEcologica.titulo')}</h4>
        <div className="space-y-6">
          <FormField
            label={t('appraisal.caracteristicasGenerales.infraestructuraEcologica.descripcion')}
            error={error?.infraestructuraEcologica?.descripcion?.message as string}
          >
            <textarea
              {...register('caracteristicasGenerales.infraestructuraEcologica.descripcion')}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </FormField>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              label={t('appraisal.caracteristicasGenerales.infraestructuraEcologica.coberturaVegetal')}
              error={error?.infraestructuraEcologica?.coberturaVegetal?.message as string}
            >
              <textarea
                {...register('caracteristicasGenerales.infraestructuraEcologica.coberturaVegetal')}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </FormField>

            <FormField
              label={t('appraisal.caracteristicasGenerales.infraestructuraEcologica.fauna')}
              error={error?.infraestructuraEcologica?.fauna?.message as string}
            >
              <textarea
                {...register('caracteristicasGenerales.infraestructuraEcologica.fauna')}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </FormField>

            <FormField
              label={t('appraisal.caracteristicasGenerales.infraestructuraEcologica.hidrologia')}
              error={error?.infraestructuraEcologica?.hidrologia?.message as string}
            >
              <textarea
                {...register('caracteristicasGenerales.infraestructuraEcologica.hidrologia')}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </FormField>

            <FormField
              label={t('appraisal.caracteristicasGenerales.infraestructuraEcologica.usoSuelo')}
              error={error?.infraestructuraEcologica?.usoSuelo?.message as string}
            >
              <textarea
                {...register('caracteristicasGenerales.infraestructuraEcologica.usoSuelo')}
                rows={3}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
              />
            </FormField>
          </div>

          <FormField
            label={t('appraisal.caracteristicasGenerales.infraestructuraEcologica.conservacionManejo')}
            error={error?.infraestructuraEcologica?.conservacionManejo?.message as string}
          >
            <textarea
              {...register('caracteristicasGenerales.infraestructuraEcologica.conservacionManejo')}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </FormField>

          <FormField
            label={t('appraisal.caracteristicasGenerales.infraestructuraEcologica.imagenes')}
            error={error?.infraestructuraEcologica?.imagenes?.message as string}
          >
            <ImageUploader
              onImageUploaded={(url) => {
                // Aquí se maneja la URL de la imagen subida
              }}
            />
          </FormField>
        </div>
      </div>
    </div>
  );
}

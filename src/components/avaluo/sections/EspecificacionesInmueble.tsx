'use client';

import { useFormContext, useFieldArray } from 'react-hook-form';
import FormField from '../shared/FormField';
import ImageUploader from '../shared/ImageUploader';
import type { Avaluo } from '@/types/avaluo.types';
import { HiPlus, HiTrash } from 'react-icons/hi';
import { useLanguage } from '@/context/LanguageContext';

export default function EspecificacionesInmueble() {
  const { register, formState: { errors }, control } = useFormContext<Avaluo>();
  const error = errors.especificacionesInmueble;
  const imagenesError = errors.imagenesInmueble;
  const { t } = useLanguage();

  const { fields: imagenesFields, append: appendImagen, remove: removeImagen } = useFieldArray({
    control,
    name: 'imagenesInmueble'
  });

  return (
    <div className="space-y-8">
      {/* Características específicas */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="text-lg font-medium text-gray-900 mb-4">{t('appraisal.especificacionesInmueble.caracteristicasEspecificas.titulo')}</h4>
        <FormField
          label={t('appraisal.especificacionesInmueble.caracteristicasEspecificas.descripcion')}
          error={error?.caracteristicasEspecificas?.message as string}
        >
          <textarea
            {...register('especificacionesInmueble.caracteristicasEspecificas')}
            rows={4}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          />
        </FormField>
      </div>

      {/* Estado de conservación */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="text-lg font-medium text-gray-900 mb-4">{t('appraisal.especificacionesInmueble.estadoConservacion.titulo')}</h4>
        <FormField
          label={t('appraisal.especificacionesInmueble.estadoConservacion.estado')}
          error={error?.estadoConservacion?.message as string}
        >
          <select
            {...register('especificacionesInmueble.estadoConservacion')}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
          >
            <option value="">{t('appraisal.especificacionesInmueble.estadoConservacion.opciones.seleccione')}</option>
            <option value="EXCELENTE">{t('appraisal.especificacionesInmueble.estadoConservacion.opciones.excelente')}</option>
            <option value="BUENO">{t('appraisal.especificacionesInmueble.estadoConservacion.opciones.bueno')}</option>
            <option value="REGULAR">{t('appraisal.especificacionesInmueble.estadoConservacion.opciones.regular')}</option>
            <option value="MALO">{t('appraisal.especificacionesInmueble.estadoConservacion.opciones.malo')}</option>
            <option value="MUY_MALO">{t('appraisal.especificacionesInmueble.estadoConservacion.opciones.muyMalo')}</option>
          </select>
        </FormField>
      </div>

      {/* Imágenes del inmueble */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-medium text-gray-900">{t('appraisal.especificacionesInmueble.imagenesInmueble.titulo')}</h4>
          <button
            type="button"
            onClick={() => appendImagen({ tipoInmueble: '', identificacion: '', descripcion: '', tipoDistribucion: '', ruta: '' })}
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <HiPlus className="h-4 w-4 mr-1" />
            {t('appraisal.especificacionesInmueble.imagenesInmueble.agregar')}
          </button>
        </div>

        <div className="space-y-4">
          {imagenesFields.map((field, index) => (
            <div key={field.id} className="relative border rounded-lg p-4">
              <button
                type="button"
                onClick={() => removeImagen(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                <HiTrash className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  label={t('appraisal.especificacionesInmueble.imagenesInmueble.tipoInmueble.titulo')}
                  error={imagenesError?.[index]?.tipoInmueble?.message as string}
                >
                  <select
                    {...register(`imagenesInmueble.${index}.tipoInmueble`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="">{t('appraisal.especificacionesInmueble.imagenesInmueble.tipoInmueble.opciones.seleccione')}</option>
                    <option value="CASA">{t('appraisal.especificacionesInmueble.imagenesInmueble.tipoInmueble.opciones.casa')}</option>
                    <option value="APARTAMENTO">{t('appraisal.especificacionesInmueble.imagenesInmueble.tipoInmueble.opciones.apartamento')}</option>
                    <option value="LOCAL">{t('appraisal.especificacionesInmueble.imagenesInmueble.tipoInmueble.opciones.local')}</option>
                    <option value="BODEGA">{t('appraisal.especificacionesInmueble.imagenesInmueble.tipoInmueble.opciones.bodega')}</option>
                    <option value="TERRENO">{t('appraisal.especificacionesInmueble.imagenesInmueble.tipoInmueble.opciones.terreno')}</option>
                    <option value="OTRO">{t('appraisal.especificacionesInmueble.imagenesInmueble.tipoInmueble.opciones.otro')}</option>
                  </select>
                </FormField>

                <FormField
                  label={t('appraisal.especificacionesInmueble.imagenesInmueble.identificacion')}
                  error={imagenesError?.[index]?.identificacion?.message as string}
                >
                  <input
                    type="text"
                    {...register(`imagenesInmueble.${index}.identificacion`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </FormField>

                <FormField
                  label={t('appraisal.especificacionesInmueble.imagenesInmueble.descripcion')}
                  error={imagenesError?.[index]?.descripcion?.message as string}
                >
                  <textarea
                    {...register(`imagenesInmueble.${index}.descripcion`)}
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </FormField>

                <FormField
                  label={t('appraisal.especificacionesInmueble.imagenesInmueble.tipoDistribucion.titulo')}
                  error={imagenesError?.[index]?.tipoDistribucion?.message as string}
                >
                  <select
                    {...register(`imagenesInmueble.${index}.tipoDistribucion`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="">{t('appraisal.especificacionesInmueble.imagenesInmueble.tipoDistribucion.opciones.seleccione')}</option>
                    <option value="FACHADA">{t('appraisal.especificacionesInmueble.imagenesInmueble.tipoDistribucion.opciones.fachada')}</option>
                    <option value="INTERIOR">{t('appraisal.especificacionesInmueble.imagenesInmueble.tipoDistribucion.opciones.interior')}</option>
                    <option value="EXTERIOR">{t('appraisal.especificacionesInmueble.imagenesInmueble.tipoDistribucion.opciones.exterior')}</option>
                    <option value="PLANO">{t('appraisal.especificacionesInmueble.imagenesInmueble.tipoDistribucion.opciones.plano')}</option>
                    <option value="OTRO">{t('appraisal.especificacionesInmueble.imagenesInmueble.tipoDistribucion.opciones.otro')}</option>
                  </select>
                </FormField>

                <div className="col-span-2">
                  <FormField
                    label={t('appraisal.especificacionesInmueble.imagenesInmueble.imagen')}
                    error={imagenesError?.[index]?.ruta?.message as string}
                  >
                    <ImageUploader
                      currentImage={field.ruta}
                      onImageUploaded={(url) => {
                        // Aquí se maneja la URL de la imagen subida
                      }}
                    />
                  </FormField>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

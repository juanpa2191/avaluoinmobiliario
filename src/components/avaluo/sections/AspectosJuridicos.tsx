'use client';

import { useFieldArray, useFormContext } from 'react-hook-form';
import { useLanguage } from '@/context/LanguageContext';
import FormField from '../shared/FormField';
import ImageUploader from '../shared/ImageUploader';
import type { Avaluo } from '@/types/avaluo.types';
import { HiPlus, HiTrash } from 'react-icons/hi';

export default function AspectosJuridicos() {
  const { register, formState: { errors }, control } = useFormContext<Avaluo>();
  const error = errors.aspectosJuridicos;
  const { t } = useLanguage();

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'aspectosJuridicos.propietarios'
  });

  return (
    <div className="space-y-8">
      {/* Inmueble objeto del avalúo */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="text-lg font-medium text-gray-900 mb-4">{t('appraisal.aspectosJuridicos.inmuebleObjetoAvaluo.titulo')}</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            label={t('appraisal.aspectosJuridicos.inmuebleObjetoAvaluo.escrituraPublica')}
            error={error?.inmuebleObjetoAvaluo?.escrituraPublica?.message as string}
          >
            <input
              type="text"
              {...register('aspectosJuridicos.inmuebleObjetoAvaluo.escrituraPublica')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </FormField>

          <FormField
            label={t('appraisal.aspectosJuridicos.inmuebleObjetoAvaluo.modoAdquisicion')}
            error={error?.inmuebleObjetoAvaluo?.modoAdquisicion?.message as string}
          >
            <input
              type="text"
              {...register('aspectosJuridicos.inmuebleObjetoAvaluo.modoAdquisicion')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </FormField>

          <FormField
            label={t('appraisal.aspectosJuridicos.inmuebleObjetoAvaluo.matriculaInmobiliaria')}
            error={error?.inmuebleObjetoAvaluo?.matriculaInmobiliaria?.message as string}
          >
            <input
              type="text"
              {...register('aspectosJuridicos.inmuebleObjetoAvaluo.matriculaInmobiliaria')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </FormField>

          <FormField
            label={t('appraisal.aspectosJuridicos.inmuebleObjetoAvaluo.fichaInmobiliaria')}
            error={error?.inmuebleObjetoAvaluo?.fichaInmobiliaria?.message as string}
          >
            <input
              type="text"
              {...register('aspectosJuridicos.inmuebleObjetoAvaluo.fichaInmobiliaria')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </FormField>

          <FormField
            label={t('appraisal.aspectosJuridicos.inmuebleObjetoAvaluo.codigoCatastral')}
            error={error?.inmuebleObjetoAvaluo?.codigoCatastral?.message as string}
          >
            <input
              type="text"
              {...register('aspectosJuridicos.inmuebleObjetoAvaluo.codigoCatastral')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </FormField>
        </div>
      </div>

      {/* Propietarios */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h4 className="text-lg font-medium text-gray-900">{t('appraisal.aspectosJuridicos.propietarios.titulo')}</h4>
          <button
            type="button"
            onClick={() => append({ propietario: '', tipoIdentificacion: '', numeroIdentificacion: '' })}
            className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            <HiPlus className="h-4 w-4 mr-1" />
            {t('appraisal.aspectosJuridicos.propietarios.agregar')}
          </button>
        </div>

        <div className="space-y-4">
          {fields.map((field, index) => (
            <div key={field.id} className="relative border rounded-lg p-4">
              <button
                type="button"
                onClick={() => remove(index)}
                className="absolute top-2 right-2 text-red-500 hover:text-red-700"
              >
                <HiTrash className="h-5 w-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField
                  label={t('appraisal.aspectosJuridicos.propietarios.nombrePropietario')}
                  required
                  error={error?.propietarios?.[index]?.propietario?.message as string}
                >
                  <input
                    type="text"
                    {...register(`aspectosJuridicos.propietarios.${index}.propietario`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </FormField>

                <FormField
                  label={t('appraisal.aspectosJuridicos.propietarios.tipoIdentificacion')}
                  required
                  error={error?.propietarios?.[index]?.tipoIdentificacion?.message as string}
                >
                  <select
                    {...register(`aspectosJuridicos.propietarios.${index}.tipoIdentificacion`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  >
                    <option value="">{t('general.select')}</option>
                    <option value="CC">Cédula de ciudadanía</option>
                    <option value="CE">Cédula de extranjería</option>
                    <option value="NIT">NIT</option>
                    <option value="PASAPORTE">Pasaporte</option>
                  </select>
                </FormField>

                <FormField
                  label={t('appraisal.aspectosJuridicos.propietarios.numeroIdentificacion')}
                  required
                  error={error?.propietarios?.[index]?.numeroIdentificacion?.message as string}
                >
                  <input
                    type="text"
                    {...register(`aspectosJuridicos.propietarios.${index}.numeroIdentificacion`)}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </FormField>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tipo de inmueble */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="text-lg font-medium text-gray-900 mb-4">{t('appraisal.aspectosJuridicos.tipoInmueble.titulo')}</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FormField
            label={t('appraisal.aspectosJuridicos.tipoInmueble.tipo')}
            required
            error={error?.tipoInmueble?.tipo?.message as string}
          >
            <select
              {...register('aspectosJuridicos.tipoInmueble.tipo')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="">{t('general.select')}</option>
              {(() => {
                const tipos = t('appraisal.aspectosJuridicos.tipoInmueble.tipos', { returnObjects: true });
                return Array.isArray(tipos) ? tipos.map((tipo: { value: string, label: string }) => (
                  <option key={tipo.value} value={tipo.value}>{tipo.label}</option>
                )) : null;
              })()}
            </select>
          </FormField>

          <FormField
            label={t('appraisal.aspectosJuridicos.tipoInmueble.regimen')}
            error={error?.tipoInmueble?.regimen?.message as string}
          >
            <select
              {...register('aspectosJuridicos.tipoInmueble.regimen')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="">{t('general.select')}</option>
              {(() => {
                const regimenes = t('appraisal.aspectosJuridicos.tipoInmueble.regimenes', { returnObjects: true });
                return Array.isArray(regimenes) ? regimenes.map((regimen: { value: string, label: string }) => (
                  <option key={regimen.value} value={regimen.value}>{regimen.label}</option>
                )) : null;
              })()}
            </select>
          </FormField>

          <FormField
            label="Zona"
            error={error?.tipoInmueble?.zona?.message as string}
          >
            <select
              {...register('aspectosJuridicos.tipoInmueble.zona')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="">{t('general.select')}</option>
              {(() => {
                const zonas = t('appraisal.aspectosJuridicos.tipoInmueble.zonas', { returnObjects: true });
                return Array.isArray(zonas) ? zonas.map((zona: { value: string, label: string }) => (
                  <option key={zona.value} value={zona.value}>{zona.label}</option>
                )) : null;
              })()}
            </select>
          </FormField>
        </div>
      </div>

      {/* Dirección y destinación económica */}
      <div className="bg-gray-50 p-4 rounded-lg">
        <h4 className="text-lg font-medium text-gray-900 mb-4">{t('appraisal.aspectosJuridicos.direccionYdestinacionEconomica.titulo')}</h4>
        <div className="grid grid-cols-1 gap-6">
          <FormField
            label={t('appraisal.aspectosJuridicos.direccionYdestinacionEconomica.direccion')}
            required
            error={error?.direccionYdestinacionEconomica?.direccion?.message as string}
          >
            <input
              type="text"
              {...register('aspectosJuridicos.direccionYdestinacionEconomica.direccion')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </FormField>

          <FormField
            label={t('appraisal.aspectosJuridicos.direccionYdestinacionEconomica.destinacionEconomica')}
            error={error?.direccionYdestinacionEconomica?.destinacionEconomica?.message as string}
          >
            <select
              {...register('aspectosJuridicos.direccionYdestinacionEconomica.destinacionEconomica')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            >
              <option value="">{t('general.select')}</option>
              {(() => {
                const destinaciones = t('appraisal.aspectosJuridicos.direccionYdestinacionEconomica.destinaciones', { returnObjects: true });
                return Array.isArray(destinaciones) ? destinaciones.map((destinacion: { value: string, label: string }) => (
                  <option key={destinacion.value} value={destinacion.value}>{destinacion.label}</option>
                )) : null;
              })()}
            </select>
          </FormField>

          <FormField
            label={t('appraisal.aspectosJuridicos.direccionYdestinacionEconomica.imagen')}
            error={error?.direccionYdestinacionEconomica?.imagen?.message as string}
          >
            <ImageUploader
              onImageUploaded={(url) => {
                // Aquí se maneja la URL de la imagen subida
              }}
            />
          </FormField>

          <FormField
            label={t('appraisal.aspectosJuridicos.direccionYdestinacionEconomica.descripcion')}
            error={error?.direccionYdestinacionEconomica?.descripcion?.message as string}
          >
            <textarea
              {...register('aspectosJuridicos.direccionYdestinacionEconomica.descripcion')}
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
            />
          </FormField>
        </div>
      </div>
    </div>
  );
}

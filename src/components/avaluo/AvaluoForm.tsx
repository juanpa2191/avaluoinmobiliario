import { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Tab } from '@headlessui/react';
import { avaluoSchema, avaluoBorradorSchema, type Avaluo } from '@/schemas/avaluo.schema';
import { useLanguage } from '@/context/LanguageContext';
import FormSection from './shared/FormSection';
import InformacionGeneral from './sections/InformacionGeneral';
import AspectosJuridicos from './sections/AspectosJuridicos';
import CaracteristicasGenerales from './sections/CaracteristicasGenerales';
import InspeccionFisica from './sections/InspeccionFisica';
import EspecificacionesInmueble from './sections/EspecificacionesInmueble';

interface AvaluoFormProps {
  initialData?: Partial<Avaluo>;
  onSave: (data: Avaluo) => Promise<void>;
  onFinalize?: (data: Avaluo) => Promise<void>;
}

export default function AvaluoForm({ initialData, onSave, onFinalize }: AvaluoFormProps) {
  const [selectedTab, setSelectedTab] = useState(0);
  const [saving, setSaving] = useState(false);
  const { t } = useLanguage();

  const methods = useForm<Avaluo>({
    resolver: zodResolver(avaluoBorradorSchema) as any,
    defaultValues: {
      estado: 'borrador',
      fechaCreacion: new Date().toISOString(),
      informacionGeneral: {
        responsabilidadesAvaluador: []
      },
      aspectosJuridicos: {
        propietarios: []
      },
      caracteristicasGenerales: {
        serviciosPublicos: [],
        estratoSocioeconomico: {
          tablaEstratificacionNacional: []
        }
      },
      imagenesInmueble: [],
      ...initialData
    }
  });

  const { handleSubmit, formState: { errors, dirtyFields }, watch } = methods;

  const handleSave = async (data: Avaluo) => {
    setSaving(true);
    try {
      await onSave(data);
    } finally {
      setSaving(false);
    }
  };

  const handleFinalize = async (data: Avaluo) => {
    if (onFinalize) {
      await onFinalize(data);
    }
  };

  const sections = [
    { 
      name: t('appraisal.sections.informacionGeneral'),
      component: <InformacionGeneral />,
      hasErrors: !!errors.informacionGeneral
    },
    {
      name: t('appraisal.sections.aspectosJuridicos'),
      component: <AspectosJuridicos />,
      hasErrors: !!errors.aspectosJuridicos
    },
    {
      name: t('appraisal.sections.caracteristicasGenerales'),
      component: <CaracteristicasGenerales />,
      hasErrors: !!errors.caracteristicasGenerales
    },
    {
      name: t('appraisal.sections.inspeccionFisica'),
      component: <InspeccionFisica />,
      hasErrors: !!errors.inspeccionFisica
    },
    {
      name: t('appraisal.sections.especificacionesInmueble'),
      component: <EspecificacionesInmueble />,
      hasErrors: !!errors.especificacionesInmueble || !!errors.imagenesInmueble
    }
  ];

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(handleSave)} className="space-y-6">
        <Tab.Group selectedIndex={selectedTab} onChange={setSelectedTab}>
          <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
            {sections.map((section, index) => (
              <Tab
                key={index}
                className={({ selected }) => `
                  w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700
                  ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2
                  ${selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  }
                  ${section.hasErrors ? 'text-red-500' : ''}
                `}
              >
                {section.name}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {sections.map((section, index) => (
              <Tab.Panel key={index}>
                <FormSection
                  title={section.name}
                  onSave={handleSubmit(handleSave)}
                  isDirty={Object.keys(dirtyFields).length > 0}
                  isValid={!section.hasErrors}
                >
                  {section.component}
                </FormSection>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>

        <div className="flex justify-end space-x-4 pt-5">
          <button
            type="submit"
            disabled={saving || Object.keys(dirtyFields).length === 0}
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-300 disabled:cursor-not-allowed"
          >
            {saving ? t('appraisal.actions.saving') : t('appraisal.actions.saveDraft')}
          </button>
          {onFinalize && (
            <button
              type="button"
              onClick={handleSubmit(handleFinalize)}
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
            >
              {t('appraisal.actions.finalize')}
            </button>
          )}
        </div>
      </form>
    </FormProvider>
  );
}

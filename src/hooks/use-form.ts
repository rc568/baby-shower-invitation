import { type Guest, type GuestErrors } from '@/interfaces/guest.interface';
import { apiMapper } from '@/lib/api-mapper';
import supabase from '@/utils/supabase';
import { useState, type SyntheticEvent } from 'react';
import { toast } from 'sonner';

const defaultValues: Guest = {
  name: '',
  isAttending: true,
  numGuests: 0,
  message: '',
};

export const useForm = () => {
  const [errors, setErrors] = useState<GuestErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Guest>(defaultValues);

  const updateForm = (updateObject: Partial<Guest>) => {
    setFormData((prev) => ({ ...prev, ...updateObject }));
  };

  const handleSubmit = async (e: SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const formObject = Object.fromEntries(formData.entries());
    const { errors, payload } = apiMapper(formObject);

    if (errors) {
      setErrors(errors);
      setIsSubmitting(false);
      return;
    }

    try {
      const { error } = await supabase.from('guest').insert([payload]).single();

      if (error) throw error;

      toast.success('¡Gracias por confirmar tu asistencia!');
      setFormData(defaultValues);
    } catch {
      toast.error('Ocurrió un error inesperado. ¡Vuelve a intentar!');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    form: formData,
    errors,
    isSubmitting,
    handleSubmit,
    updateForm,
  };
};

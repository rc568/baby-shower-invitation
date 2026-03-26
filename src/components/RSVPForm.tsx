import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from '@/hooks/use-form';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

export const RSVPForm = () => {
  const { form, errors, isSubmitting, handleSubmit, updateForm } = useForm();

  return (
    <section
      id="asistencia"
      className="flex items-center justify-center z-10 min-h-dvh mx-auto p-6 py-12 sm:px-12 sm:max-w-160"
    >
      <div className="font-main">
        <div className="text-center mb-12">
          <h2 className="font-main font-semibold text-xl sm:text-3xl text-foreground mb-2">
            Acompáñanos a darle la bienvenida <br className="sm:hidden" /> a
            nuestra nueva personita
          </h2>
          <p className="text-muted-foreground">
            ¡Nos encantaría contar contigo en este día tan especial!
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card/0 backdrop-blur-none rounded-none border border-none space-y-4 sm:space-y-6"
        >
          <div>
            <div className="sm:grid sm:grid-cols-[240px_1fr] sm:items-center">
              <label
                htmlFor="name"
                className="block text-sm sm:text-base text-foreground mb-1.5 sm:mb-0"
              >
                Nombre completo
              </label>
              <Input
                id="name"
                name="name"
                required
                value={form.name}
                onChange={(e) => updateForm({ name: e.target.value })}
                placeholder="Tu nombre"
                className="block bg-background/60 border-border focus-visible:ring-primary focus-visible:ring-1 text-sm"
              />
            </div>
            {errors.name && (
              <span className="text-destructive text-xs sm:text-sm mt-2">
                {errors.name}
              </span>
            )}
          </div>

          <div className="sm:grid sm:grid-cols-[240px_1fr] sm:items-center">
            <span className="block text-sm sm:text-base text-foreground mb-1.5 sm:mb-0">
              ¿Asistirás?
            </span>
            <RadioGroup
              name="isAttending"
              defaultValue={form.isAttending?.toString()}
              onValueChange={(val) =>
                updateForm({ isAttending: val === 'true' })
              }
              className="flex items-center gap-3"
            >
              {[true, false].map((val) => (
                <div key={val.toString()} className="flex-1">
                  <RadioGroupItem
                    value={val.toString()}
                    id={`option-${val}`}
                    className="peer sr-only size-0"
                  />
                  <label
                    htmlFor={`option-${val}`}
                    className="flex items-center justify-center px-3 py-2 text-sm cursor-pointer transition-colors duration-200 border peer-data-[state=checked]:border-2 peer-data-[state=checked]:border-primary peer-data-[state=checked]:shadow-md peer-data-[state=unchecked]:bg-background/60 peer-data-[state=unchecked]:text-muted-foreground peer-data-[state=unchecked]:border-border hover:border-primary/50 uppercase tracking-widest"
                  >
                    {val ? '¡Si!' : 'No'}
                  </label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {form.isAttending && (
            <div>
              <div className="sm:grid sm:grid-cols-[240px_1fr] sm:items-center">
                <label
                  htmlFor="numGuests"
                  className="block text-sm sm:text-base text-foreground mb-1.5 sm:mb-0"
                >
                  Número de acompañantes
                </label>

                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() =>
                      updateForm({
                        numGuests: Math.max(0, (form.numGuests || 0) - 1),
                      })
                    }
                    className="w-8 h-8 pb-1 border border-border bg-background/60 flex items-center justify-center text-lg hover:border-2 hover:border-ring focus-visible:border-2 focus-visible:border-ring transition-colors disabled:opacity-40"
                    disabled={!form.numGuests || form.numGuests <= 0}
                    aria-label="Reducir acompañantes"
                  >
                    −
                  </button>

                  <span className="w-6 text-center text-sm tabular-nums">
                    {isNaN(form.numGuests ?? 0) ? 0 : form.numGuests}
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      updateForm({
                        numGuests: Math.min(4, (form.numGuests || 0) + 1),
                      })
                    }
                    className="w-8 h-8 pb-1 border border-border bg-background/60 flex items-center justify-center text-lg hover:border-2 hover:border-ring focus-visible:border-2 focus-visible:border-ring transition-colors disabled:opacity-40"
                    disabled={(form.numGuests ?? 0) >= 4}
                    aria-label="Aumentar acompañantes"
                  >
                    +
                  </button>
                </div>
              </div>

              <input
                type="hidden"
                id="numGuests"
                name="numGuests"
                value={isNaN(form.numGuests ?? 0) ? 0 : form.numGuests}
              />

              {errors.numGuests && (
                <span className="text-destructive text-xs sm:text-sm mt-2 block">
                  {errors.numGuests}
                </span>
              )}
            </div>
          )}

          <div>
            <div className="sm:grid sm:grid-cols-[240px_1fr] sm:items-start">
              <label
                htmlFor="message"
                className="block text-sm sm:text-base text-foreground mb-1.5 sm:mb-0"
              >
                Mensaje para los papás (opcional)
              </label>
              <Textarea
                id="message"
                name="message"
                value={form.message}
                onChange={(e) =>
                  updateForm({ ...form, message: e.target.value })
                }
                placeholder="Escribe un mensaje..."
                rows={4}
                className="bg-background/60 border-border focus-visible:ring-primary focus-visible:ring-1 resize-none text-sm"
              />
            </div>
          </div>

          <Button
            type="submit"
            className={cn(
              'w-full py-6 text-base bg-primary text-primary-foreground hover:opacity-90 cursor-pointer transition-opacity shadow-md',
              { 'bg-primary/65': isSubmitting },
            )}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Confirmar Asistencia'}
          </Button>
        </form>
      </div>
    </section>
  );
};

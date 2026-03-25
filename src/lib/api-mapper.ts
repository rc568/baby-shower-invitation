import type { GuestErrors, GuestPayload } from '@/interfaces/guest.interface';

interface Props {
  [k: string]: FormDataEntryValue;
}

type Output =
  | { errors: GuestErrors; payload?: never }
  | { payload: GuestPayload; errors?: never };

export const apiMapper = (formObject: Props): Output => {
  const errors: GuestErrors = {};

  const name = formObject.name?.toString().trim() ?? '';
  const isAttending = formObject.isAttending === 'true';
  const numGuests = isAttending
    ? parseInt(formObject.numGuests as string)
    : undefined;
  const message = formObject.message.toString().trim() || undefined;

  if (name.length === 0) {
    errors.name = 'El nombre no puede estar vacío.';
  }

  if (
    isAttending &&
    numGuests &&
    (Number.isNaN(numGuests) || numGuests < 0 || numGuests > 4)
  ) {
    errors.numGuests = 'El número de acompañantes es de 0 a 4 como máximo.';
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  const payload: GuestPayload = {
    name: name,
    is_attending: isAttending,
  };

  if (message) payload.message = message;
  if (numGuests !== undefined && numGuests >= 0 && numGuests <= 4)
    payload.num_guests = numGuests;

  return { payload };
};

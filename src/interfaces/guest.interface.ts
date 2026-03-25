export interface Guest {
  name: string;
  isAttending: boolean;
  numGuests?: number;
  message?: string;
}

export interface GuestPayload {
  name: string;
  is_attending: boolean;
  num_guests?: number;
  message?: string;
}

export type GuestErrors = Partial<Record<keyof Guest, string>>;

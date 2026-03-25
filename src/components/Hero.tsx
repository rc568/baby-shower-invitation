import { cn } from '@/lib/utils';
import { InvitationAnimation } from './invitation/InvitationAnimation';

export const Hero = ({ color }: { color: 'red' | 'green' | 'white' }) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center h-svh mx-auto px-4 py-8 sm:px-8 sm:py-16 relative bg-repeat bg-size-[60%] sm:bg-size-[30%] bg-position-[80px_-20px] sm:bg-position-[40px_-20px] overflow-hidden',
        {
          'bg-red-600/95': color === 'red',
          'bg-[#859b98]': color === 'green',
          'bg-[#b7d1ca]': color === 'white',
        },
      )}
    >
      <InvitationAnimation />
    </div>
  );
};

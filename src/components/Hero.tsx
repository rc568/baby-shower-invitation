import { scrollToElement } from '@/lib/scroll';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { InvitationAnimation } from './invitation/InvitationAnimation';

export const Hero = ({ color }: { color: 'red' | 'green' | 'white' }) => {
  const [showButton, setShowButton] = useState(false);

  const handleConfirmClick = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToElement('#asistencia', 1200);
  };

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
      <InvitationAnimation onAnimationComplete={setShowButton} />
      {showButton && (
        <a
          href="#asistencia"
          onClick={handleConfirmClick}
          className="absolute inset-x-0 bottom-0 text-center h-10 sm:h-12 flex items-center justify-center bg-primary text-primary-foreground translate-y-full animate-show-up z-100"
        >
          <div className="text-sm sm:text-base flex gap-2 items-center justify-center">
            <span className="inline-block">¡Completa el formulario aquí!</span>
            <div
              className="w-3 h-3 border-b-2 border-r-2 border-primary-foreground/80 rotate-45 rounded-[1px] -translate-y-0.5"
              aria-hidden="true"
            />
          </div>
        </a>
      )}
    </div>
  );
};

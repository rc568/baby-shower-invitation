import BgInvitation from '@/assets/bg/bg-invitation.jpg';
import InvitationLgJpg from '@/assets/images/invitacion-baby-lg.jpg';
import InvitationLgWebp from '@/assets/images/invitacion-baby-lg.webp';
import { cn } from '@/lib/utils';
import { useState, type AnimationEventHandler } from 'react';
import styles from './invitation.module.css';

interface Props {
  onAnimationComplete: (val: boolean) => void;
}

export const InvitationAnimation = ({ onAnimationComplete }: Props) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleAnimationEnd: AnimationEventHandler<HTMLDivElement> = (e) => {
    if (e.animationName.includes('cardReveal')) {
      onAnimationComplete(true);
    }
  };

  return (
    <div className="h-full w-full flex justify-center items-center relative">
      <div className={styles.scene}>
        <div
          className={cn(styles['envelope-wrapper'], { paused: !isImageLoaded })}
        >
          <div className={styles['envelope-back']}></div>

          <div
            className={cn(styles.invitation, { paused: !isImageLoaded })}
            onAnimationEnd={handleAnimationEnd}
          >
            <div
              className="border border-none relative shadow-[-8px_12px_16px_rgba(0,0,0,0.35)] sm:shadow-[-10px_14px_20px_rgba(0,0,0,0.35)] overflow-hidden"
              style={{
                backgroundImage: `url(${BgInvitation})`,
                backgroundColor: 'rgba(240, 241, 238, 0.25)',
                backgroundBlendMode: 'overlay',
                backgroundRepeat: 'repeat',
                backgroundSize: '100%',
              }}
            >
              <picture>
                <source
                  media="(min-width: 640px)"
                  srcSet={InvitationLgWebp}
                  type="image/webp"
                />

                <img
                  src={InvitationLgJpg}
                  alt="invitación"
                  className="element"
                  onLoad={() => setIsImageLoaded(true)}
                />
              </picture>
              <div className="absolute inset-x-0 top-[75%] w-full text-center font-invitation text-[10px] sm:text-lg text-foreground tracking-wider opacity-75">
                <p className="mb-4 sm:mb-4 leading-tight -mt-1 sm:mt-0">
                  Sáb 18.04.2026
                  <span className="block">04:00 pm</span>
                </p>
                <span className="block leading-tight">
                  Calle Los Eucaliptos 456
                </span>
                <span className="block leading-tight">
                  Urb. Jardínes Virú - Bellavista
                </span>
              </div>
            </div>
          </div>

          <div className={styles['envelope-fold-left']}></div>
          <div className={styles['envelope-fold-right']}></div>
          <div className={styles['envelope-fold-bottom']}></div>
          <div
            className={cn(styles['envelope-flap'], { paused: !isImageLoaded })}
          >
            <div className={styles['envelope-flap-shadow']}></div>
            <div className={styles['envelope-flap-front']}></div>
            <div className={styles['envelope-flap-back']}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

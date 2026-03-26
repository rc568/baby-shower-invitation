const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};

export const scrollToElement = (targetId: string, duration: number = 1500) => {
  const targetElement = document.querySelector(targetId);
  if (!targetElement) return;

  const start = window.scrollY;
  const targetPosition =
    targetElement.getBoundingClientRect().top + window.scrollY;
  const change = targetPosition - start;
  let startTime: number | null = null;

  const animateScroll = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    const nextScrollY = easeInOutQuad(timeElapsed, start, change, duration);

    window.scrollTo(0, nextScrollY);

    if (timeElapsed < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      window.scrollTo(0, targetPosition);
    }
  };

  requestAnimationFrame(animateScroll);
};

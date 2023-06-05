export function deviceDetect() {
  let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;
  const isLaptop = screenWidth <= 1440;
  if (!isMobile) {
    isMobile = screenWidth < 480 || screenHeight < 768;
  }

  if (!isMobile) {
    isMobile = 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.maxTouchPoints > 0;
  }

  if (!isMobile) {
    const bodyElement = document.getElementsByTagName('body')[0];
    isMobile = window.getComputedStyle(bodyElement).getPropertyValue('content').indexOf('mobile') !== -1;
  }
  return {
    isMobile,
    isLaptop,
  };
}

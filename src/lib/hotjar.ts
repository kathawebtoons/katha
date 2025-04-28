import hotjar from '@hotjar/browser';

const siteId = 6385763; // Your Hotjar site ID
const hotjarVersion = 6;

export const initializeHotjar = () => {
  if (typeof window !== 'undefined') {
    hotjar.init(siteId, hotjarVersion);
  }
}; 
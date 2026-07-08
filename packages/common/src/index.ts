/**
 * Shared configuration and helper utilities for CityADPro.
 */

export const APP_NAME: string = 'CityADPro';

export const API_ENDPOINTS = {
  DEV: 'http://localhost:3030',
  PROD: 'https://api.cityadpro.com'
};

interface LayoutConfig {
  width: number;
  height: number;
  orientation: 'portrait' | 'landscape';
}

/**
 * Returns basic configuration for screen layout.
 * @param mode - The screen mode ('portrait' | 'landscape')
 * @returns Layout configurations
 */
export function getLayoutConfig(mode: 'portrait' | 'landscape'): LayoutConfig {
  if (mode === 'portrait') {
    return {
      width: 1080,
      height: 1920,
      orientation: 'portrait'
    };
  }
  return {
    width: 1920,
    height: 1080,
    orientation: 'landscape'
  };
}

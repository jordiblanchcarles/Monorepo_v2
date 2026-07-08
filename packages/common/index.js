/**
 * Shared configuration and helper utilities for CityADPro.
 */

export const APP_NAME = 'CityADPro';

export const API_ENDPOINTS = {
  DEV: 'http://localhost:3030',
  PROD: 'https://api.cityadpro.com'
};

/**
 * Returns basic configuration for screen layout.
 * @param {string} mode - The screen mode (e.g. 'portrait', 'landscape')
 * @returns {object} Layout configurations
 */
export function getLayoutConfig(mode) {
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

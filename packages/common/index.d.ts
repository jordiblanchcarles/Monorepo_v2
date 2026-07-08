export const APP_NAME: string;

export const API_ENDPOINTS: {
  DEV: string;
  PROD: string;
};

export function getLayoutConfig(mode: string): {
  width: number;
  height: number;
  orientation: string;
};

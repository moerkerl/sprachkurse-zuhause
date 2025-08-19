declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'consent' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: unknown[];
  }
}

export {};
declare global {
  interface Window {
    gtag: ((
      command: 'config' | 'event' | 'js' | 'consent',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void) & ((
      command: 'set',
      config: Record<string, unknown>
    ) => void);
    dataLayer: unknown[];
  }
}

export {};
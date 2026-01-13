// global.d.ts
export {};

declare global {
  interface Window {
    fbq?: (
      command: string,
      action: string,
      data?: Record<string, string>,
      options?: { eventID?: string }
    ) => void;
  }
}

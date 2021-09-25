// To be able to use google analytics gtag
export {};

declare global {
  interface Window {
    gtag: (action: string, field: string, value?: string) => void;
  }
}

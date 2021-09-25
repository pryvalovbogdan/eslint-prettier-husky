// To be able to use google analytics gtag
export {};

declare global {
  interface Window {
    gtag: any;
  }
}

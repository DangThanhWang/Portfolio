declare module 'locomotive-scroll' {
  export default class LocomotiveScroll {
    constructor(options: any)
    update(): void
    destroy(): void
    scrollTo(target: any, options?: any): void
    on(event: string, callback: () => void): void
  }
}

interface Window {
  ScrollTrigger?: {
    update: () => void;
  };
}

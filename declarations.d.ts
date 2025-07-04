declare module 'locomotive-scroll' {
  export default class LocomotiveScroll {
    constructor(options: any);
    update(): void;
    destroy(): void;
    scrollTo(target: any, options?: any): void;
  }
}

interface Window {
  ScrollTrigger?: {
    update: () => void;
  };
}

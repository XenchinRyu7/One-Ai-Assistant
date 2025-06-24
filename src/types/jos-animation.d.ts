declare module 'jos-animation' {
  interface JOSOptions {
    duration?: number;
    once?: boolean;
    threshold?: number;
    animation?: string;
    timingFunction?: string;
    mirror?: boolean;
    startVisible?: boolean;
    intersectionRatio?: number;
    scrollDirection?: string;
    disable?: boolean;
  }

  interface JOS {
    init(options?: JOSOptions): void;
    refresh(): void;
  }

  const JOS: JOS;
  export default JOS;
}

declare module 'jos-animation/dist/jos.js' {
  const jos: any;
  export default jos;
}

// src/shim-jsx.d.ts
import 'vue';

declare global {
  namespace JSX {
    interface Element {}
    interface ElementClass {
      $props: any;
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}

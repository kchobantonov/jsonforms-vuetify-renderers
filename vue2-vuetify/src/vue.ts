import { AsyncComponent, Component } from 'vue';

/**
 * Switch between Vue 3 and Vue 2 '@vue/composition-api'.
 */
export {
  computed,
  defineComponent,
  inject,
  onBeforeMount,
  onUnmounted,
  reactive,
  ref,
  unref,
  watch,
  watchEffect,
  provide,
} from '@vue/composition-api';
export type {
  Ref,
  ComputedRef,
  ComputedOptions,
  MethodOptions,
} from '@vue/composition-api';
/**
 * Compatibility type as defineComponent of '@vue/composition-api' can't properly handle PropTypes.
 */
export type CompType<_S, V> = V;

export type Components = {
  [key: string]:
    | Component<any, any, any, any>
    | AsyncComponent<any, any, any, any>;
};

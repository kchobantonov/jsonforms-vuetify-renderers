// Pathify
import { make } from 'vuex-pathify';
import { AppState } from './types';
import { RootState } from '../types';
import { Module } from 'vuex';
// import {
//   createAjv,
//   extendedVuetifyRenderers as vuetifyRenderers,
// } from '@jsonforms/vue2-vuetify';

// async load of compiler to enable code split
const compileToFunctions = () =>
  import('vue-template-compiler').then((module) => {
    const { compileToFunctions } = module;
    return compileToFunctions;
  });
import { createAjv, advancedVuetifyRenderers } from '@jsonforms/vue2-vuetify';
const vuetifyRenderers = advancedVuetifyRenderers(compileToFunctions);

const ajv = createAjv({ useDefaults: true });

// Data
const state: AppState = {
  drawer: null,
  jsonforms: {
    readonly: false,
    validationMode: 'ValidateAndShow',
    config: {
      restrict: true,
      trim: false,
      showUnfocusedDescription: false,
      hideRequiredAsterisk: true,
      collapseNewItems: false,
      breakHorizontal: false,
      initCollapsed: false,
      hideAvatar: false,
      hideArraySummaryValidation: false,
    },
    renderers: vuetifyRenderers,
    cells: vuetifyRenderers,
    ajv,
    locale: 'en',
  },
  monaco: {
    schemaModel: undefined,
    uischemaModel: undefined,
    dataModel: undefined,
  },
};

const mutations = make.mutations(state);

const actions = make.actions(state);

const getters = {};

const app: Module<AppState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};

export default app;

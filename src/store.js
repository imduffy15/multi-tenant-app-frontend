import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import { vuexOidcCreateStoreModule } from "vuex-oidc";

import { oidcSettings } from "@/config";

Vue.use(Vuex);

const vuexLocalStorage = new VuexPersist({
  key: "vuex", // The key to store the state on in the storage provider.
  storage: window.localStorage // or window.sessionStorage or localForage
  // Function that passes the state and returns the state with only the objects you want to store.
  // reducer: state => state,
  // Function that passes a mutation and lets you decide if it should update the state in localStorage.
  // filter: mutation => (true)
});

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    authentication: vuexOidcCreateStoreModule(
      oidcSettings,
      {
        dispatchEventsOnWindow: true
      },
      {}
    )
  },
  plugins: [vuexLocalStorage.plugin]
});

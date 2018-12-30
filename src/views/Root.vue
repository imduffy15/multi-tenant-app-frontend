<template>
  <div>
    <div>Authenticated: {{oidcIsAuthenticated}}</div>
    <div v-if="oidcIsAuthenticated">
	    User Info: <pre>{{oidcUser}}</pre>
	    <v-btn @click="signOutOidc">Logout</v-btn>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "root",
  computed: {
    ...mapGetters(["oidcIsAuthenticated"]),
    ...mapGetters(["oidcUser"])
  },
  methods: {
    ...mapActions(["signOutOidc"]),
    ...mapActions(["authenticateOidc"])
  }
};
</script>

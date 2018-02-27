<template>
  <v-layout row wrap>
    <v-flex xs12>
      <v-btn
        v-show="loggedIn"
        absolute
        dark
        fab
        bottom
        right
        color="purple"
        to="/create"
        class="mb-5"
      >
        <v-icon>add</v-icon>
      </v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'home',

    computed: {
      ...mapGetters('user', {
        loggedIn: 'loggedIn'
      })
    }
  }
</script>
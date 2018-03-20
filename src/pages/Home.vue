<template>
  <v-layout row wrap>
    <quiz-card
      v-for="quiz in quizes"
      :key="quiz.id"
      :title="quiz.title"
      :description="quiz.description"
      :id="quiz.id"
    />

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
  import { mapGetters, mapActions } from 'vuex';

  import QuizCard from '@/components/quiz/QuizCard';

  export default {
    name: 'home',

    components: {
      QuizCard
    },

    created() {
      this.findQuizes();
    },

    computed: {
      ...mapGetters('user', {
        loggedIn: 'loggedIn'
      }),

      ...mapGetters('quiz', {
        quizes: 'list'
      })
    },

    methods: {
      ...mapActions('quiz', {
        findQuizes: 'list'
      })
    }
  }
</script>
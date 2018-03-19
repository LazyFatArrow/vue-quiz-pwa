<template>
  <v-container>
    <v-layout>
      <v-btn
        v-show="value.length < 10"
        class="mt-4"
        color="primary"
        @click="addQuestion"
      > Add Question </v-btn>
    </v-layout>
    <v-card-actions>
      <b>Total Points: {{totalPoints}}</b>
      <v-spacer></v-spacer>
      <v-btn flat to="/">Cancel</v-btn>
      <v-btn flat color="purple">Create</v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex';

  export default {
    name: 'quiz-actions',

    computed: {
      ...mapGetters('quiz', {quiz: 'newQuiz'}),
      totalPoints() {
        return this.quiz.questions.reduce((curr, question) =>
          parseInt(question.points) + curr, 0);
        // we used parseInt because the value coming from the input is a string.
      }
    },

    methods: {
      ...mapMutations('quiz', {
        addQuestion: 'addQuestion'
      })
    }
  }
</script>
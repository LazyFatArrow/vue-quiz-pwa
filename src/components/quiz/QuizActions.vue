<template>
  <v-container>
    <v-layout>
      <v-btn
        v-show="quiz.questions.length < 10"
        class="mt-4"
        color="primary"
        @click="addQuestion"
      > Add Question </v-btn>
    </v-layout>
    <v-card-actions>
      <b>Total Points: {{totalPoints}}</b>
      <v-spacer></v-spacer>
      <v-btn flat to="/">Cancel</v-btn>
      <v-btn flat color="warning" @click="reset">Reset</v-btn>
      <v-btn flat @click="action" color="purple">{{actionName}}</v-btn>
    </v-card-actions>
  </v-container>
</template>

<script>
  import { mapMutations, mapGetters } from 'vuex';

  import {
    RESET_QUIZ,
    ADD_QUESTION
  } from '@/store/quiz/mutations';

  export default {
    name: 'quiz-actions',

    props: ['action', 'actionName'],

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
        addQuestion: ADD_QUESTION,
        reset: RESET_QUIZ
      })
    }
  }
</script>
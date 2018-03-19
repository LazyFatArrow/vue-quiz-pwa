<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <div class="headline">
          <v-icon>question_answer</v-icon> New Quiz
        </div>
      </div>
    </v-card-title>
    <v-subheader>Quiz Information</v-subheader>
    <quiz-information />

    <v-subheader>Quiz Questions</v-subheader>
    <quiz-questions />

    <!-- <quiz-actions/> -->

  </v-card>
</template>

<script>
  import QuizInformation from '@/components/quiz/QuizInformation';
  import QuizQuestions from '@/components/quiz/QuizQuestions';
  import QuizActions from '@/components/quiz/QuizActions';

  export default {
    name: 'create-quiz',

    components: {
      QuizInformation,
      QuizQuestions,
      QuizActions
    }
  }
</script>
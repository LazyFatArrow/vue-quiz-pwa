<template>
  <v-card v-if="quiz">
    <v-container>
      <v-layout v-if="done">
        <v-flex sm12>
          <p>Your score is {{score}} / {{totalScore}}</p>
          <div v-if="mistakes.length > 0">
            <h3>Your Mistakes:</h3>
            <p
              v-for="(m, i) in mistakes"
              :key="i"
            >
              question: {{m.question}} <br />
              your answer: {{m.chosenAnswer}} <br />
              right answer: {{m.rightAnswer}}
              <br />
            </p>
          </div>

          <v-btn to="/">Go Home</v-btn>
        </v-flex>
      </v-layout>
      <v-stepper v-model="step" v-else>
        <v-stepper-header>
          <template v-for="s in steps">
            <v-stepper-step
              :key="s"
              :step="s"
              :complete="step > s"
            />
          </template>
          <v-divider></v-divider>
        </v-stepper-header>
        <v-stepper-items>
          <v-stepper-content
            v-for="(question, i) in quiz.questions"
            :key="i"
            :step="i + 1"
          >
            <h3>{{question.question}}</h3>
            <v-radio-group v-model="stepAnswer">
              <v-radio
                v-for="(answer, j) in question.answers"
                :key="j"
                :label="answer.answer"
                :value="j"
              ></v-radio>
            </v-radio-group>
            <v-btn color="primary" @click.native="next">Next</v-btn>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-container>
  </v-card>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';

  export default {
    name: 'quiz',

    created() {
      this.getQuiz(this.$route.params.id);
    },

    computed: {
      ...mapGetters('quiz', {quiz: 'quiz'}),

      steps() {
        return this.quiz && this.quiz.questions.length || 0;
      },

      totalScore() {
        return this.quiz.questions.reduce((curr, question)   => {
          return curr + question.points;
        }, 0);
      }
    },

    methods: {
      ...mapActions('quiz', {getQuiz: 'get'}),

      next() {
        if (this.stepAnswer == null) return;

        const question = this.quiz.questions[this.step - 1];
        const answer = question.answers[this.stepAnswer];

        if (answer.isRight) this.score += question.points;
        else {
          this.mistakes.push({
            question: question.question,
            rightAnswer: question.answers.filter(answer => answer.isRight)[0].answer,
            chosenAnswer: answer.answer
          });
        }

        if (this.step < this.steps) {
          this.step++;
          this.stepAnswer = null;
        } else {
          this.done = true;
        }
      }
    },

    data() {
      return {
        step: 1,
        score: 0,
        stepAnswer: null,
        done: false,
        mistakes: []
      }
    }
  }
</script>
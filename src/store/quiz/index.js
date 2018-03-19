import {
  UPDATE_INFORMAITON,
  ADD_QUESTION,
  REMOVE_QUESTION,
  ADD_ANSWER,
  REMOVE_ANSWER,
  SET_ANSWER_RIGHT,
  RESET_NEW_QUIZ,
  UPDATE_ANSWER
} from './mutations';

const state = {
  newQuiz: {
    title: "Quiz 2018",
    description: "An awesome quiz!",
    questions: [
      {
        question: "First Question",
        points: "First Points",
        answers: [
          {
            isRight: true,
            answer: "First answer"
          },
          {
            answer: "Second answer"
          },
          {
            answer: "Third answer"
          }
        ]
      }
    ]
  }
};

const getters = {
  newQuiz: ({newQuiz}) => newQuiz
};

const mutations = {
  [UPDATE_INFORMAITON](state, info) {
    state.newQuiz.title = info.title;
    state.newQuiz.description = info.description;
  },

  [ADD_QUESTION](state) {
    state.newQuiz
      .questions
      .push({
        question: "Question",
        points: 0,
        answers: []
      })
  },

  [REMOVE_QUESTION](state, questionIndex) {
    if (state.newQuiz.questions.length > 1) {
      state.newQuiz
        .questions
        .splice(questionIndex, 1);
    }
  },

  [ADD_ANSWER](state, questionIndex) {
    const answers = state.newQuiz.questions[questionIndex].answers;
    if (answers.length < 5) {
      answers.push({
        answer: "Anotha one!"
      });
    }
  },

  [UPDATE_ANSWER](state, payload) {
    const questionIndex = payload.questionIndex;
    const answerIndex = payload.answerIndex;
    const answerText = payload.answer;
    const isRight = payload.isRight;

    const answer = state.newQuiz
      .questions[questionIndex]
      .answers[answerIndex]

    answer.isRight = payload.isRight;
    answer.answer = answerText;
  },

  [REMOVE_ANSWER](state, payload) {
    const questionIndex = payload.questionIndex;
    const answerIndex = payload.answerIndex;

    const question = state.newQuiz.questions[questionIndex];

    if (question.answers.length > 1) {
      question.answers.splice(answerIndex, 1);
    }
  },
};

const actions = {

};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
};

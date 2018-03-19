<template>
  <v-container>
    <v-layout
      wrap
      v-for="(answer, i) in value"
      :key="i"
    >
      <v-flex xs10>
        <v-text-field
          label="Answer"
          v-model="answer.text"
        ></v-text-field>
      </v-flex>
      <v-flex xs2>
        <v-btn fab dark small color="red" @click="removeAnswer(questionIndex, i)">
          <v-icon>remove</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'quiz-answers',
    props: [
      'value',
      'questionIndex',
      'removeAnswer'
    ],
  }
</script>
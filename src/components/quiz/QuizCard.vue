<template>
  <v-flex xs12 sm6 md6 xl2 class="pa-2">
    <v-card :color="randomColor()" class="white--text">
      <v-card-title primary-title>
        <div class="headline">{{title}}</div>
      </v-card-title>
      <v-card-text>{{description}}</v-card-text>

      <v-card-actions>
        <v-btn flat dark :to="`/quiz/${id}`">Take it now</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template>

<script>
  export default {
    name: 'quiz-card',
    props: [ 'title', 'description', 'id' ],
    methods: {
      randomColor() {
        const colorsList = [
          "grey", "deep-orange", "brown", "blue-grey", "orange",
          "green", "cyan", "teal", "blue", "indigo",
          "pink", "red", "purple"
        ]

        const rand = Math.floor(Math.random() * (colorsList.length));

        return colorsList[rand];
      }
    }
  }
</script>
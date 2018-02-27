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
    <v-container>
      <v-layout wrap>
        <v-flex xs12>
          <v-text-field
            label="Title"
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-text-field
            label="Description"
            multi-line
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>

    <v-subheader>Quiz Questions</v-subheader>
    <v-container>
      <v-layout wrap>
        <v-flex xs12>
          <v-expansion-panel focusable>
            <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
              <div slot="header">What will be the result of 1 + "1" in Javascript</div>
              <v-card>
                <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-flex>
      </v-layout>
    </v-container>

    <v-layout>
      <v-btn flat class="mt-4">Add Question</v-btn>
    </v-layout>

    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn flat to="/">Cancel</v-btn>
      <v-btn flat color="purple">Create</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default {
    name: 'create-quiz'
  }
</script>
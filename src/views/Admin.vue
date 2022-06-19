<template>
  <div class="page-wrapper">
    <v-container class="container">
      <v-row class="mb-50">
        <v-col cols="12" sm="12"> </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="12" md="6" lg="4" v-for="message, index in messages" :key="index">
          <v-card class="mx-auto" max-width="344">
            <v-card-text>
              <div>{{message.name}}</div>
              <p class="text-h4 text--primary">{{message.subject}}</p>
              <p>{{message.email}}</p>
              <div class="text--primary">
               {{message.message}}
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
</style>

<script>
export default {
  data() {
    return {
      messages: [],
    };
  },
  mounted() {
    this.messages = JSON.parse(localStorage.getItem("messages")) ?? [];
    console.log(this.messages);
  },
};
</script>

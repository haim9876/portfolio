<template>
  <div class="page-wrapper">
    <v-container class="container">
      <v-row class="mb-50">
        <v-col cols="12" sm="12">
          <div class="section-title">
            <h2 class="text-center">Movies</h2>
          </div>
        </v-col>
      </v-row>

      <v-row>        
        <v-col cols="12" sm="12" md="6" lg="4" v-for="video in videos" :key="video.title">
          <v-card class="mx-auto" max-width="344">
            <v-img
              :src="video.thumbnail"
              height="200px"
            ></v-img>

            <v-card-title> {{video.title}} </v-card-title>

            <v-card-actions>
              <v-btn 
                color="orange lighten-2" 
                text
                @click="viewVideo(video.url)"
              >
              View
            </v-btn>
            </v-card-actions>
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
      videos: [
        {
          title: 'Vue JS 3 Tutorial for Beginners #1 - Introduction',
          thumbnail: 'https://i3.ytimg.com/vi/YrxBCBibVo0/maxresdefault.jpg',
          url: 'https://www.youtube.com/watch?v=YrxBCBibVo0&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1'
        },
        {
          title: 'Vue JS 3 Tutorial for Beginners #2 - Vue.js Basics (part 1)',
          thumbnail: 'https://i3.ytimg.com/vi/F7PLPJqVotk/maxresdefault.jpg',
          url: 'https://www.youtube.com/watch?v=F7PLPJqVotk&list=PL4cUxeGkcC9hYYGbV60Vq3IXYNfDk8At1&index=2'
        }
      ]
    }
  },
  methods: {
    viewVideo(link) {
      window.open(link, '_blank')
    }
  }
};
</script>
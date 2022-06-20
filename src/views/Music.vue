<template>
  <div class="page-wrapper">
    <v-container class="container">
      <v-row class="mb-50">
        <v-col cols="12" sm="12">
          <div class="section-title">
            <h2 class="text-center">Music</h2>
            <h3 class="text-center-music">Here are a few tracks that I have been listening to on repeat!</h3>
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
//import { text } from 'body-parser';

export default {
  data() {
    return {
      videos: [
        {
          title: 'Kate Bush: Running Up That Hill (A Deal With God)',
          thumbnail: 'http://i3.ytimg.com/vi/wp43OdtAAkM/hqdefault.jpg',
          url: 'https://www.youtube.com/watch?v=wp43OdtAAkM'
        },
        {
          title: 'Harry Styles: Daylight',
          thumbnail: 'http://i3.ytimg.com/vi/MdLx4iINoMM/hqdefault.jpg',
          url: 'https://www.youtube.com/watch?v=MdLx4iINoMM'
        },
        {
          title: 'Bad Bunny: Me Porto Bonito',
          thumbnail: 'http://i3.ytimg.com/vi/xn21hH7kyx8/hqdefault.jpg',
          url: 'https://www.youtube.com/watch?v=xn21hH7kyx8'
        },
        {
          title: 'Bad Bunny: Ojitos Lindos',
          thumbnail: 'http://i3.ytimg.com/vi/CNwGJQntC6Y/hqdefault.jpg',
          url: 'https://www.youtube.com/watch?v=CNwGJQntC6Y'
        },
        {
          title: 'Lord Huron: The Night We Met',
          thumbnail: 'http://i3.ytimg.com/vi/KtlgYxa6BMU/hqdefault.jpg',
          url: 'https://www.youtube.com/watch?v=KtlgYxa6BMU'
        },
        {
          title: 'Cigarettes After Sex: K',
          thumbnail: 'http://i3.ytimg.com/vi/L4sbDxR22z4/hqdefault.jpg',
          url: 'https://www.youtube.com/watch?v=L4sbDxR22z4'
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
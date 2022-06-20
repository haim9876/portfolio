<template>
  <div class="page-wrapper">
    <v-container class="container">
      <v-row class="mb-50">
        <v-col cols="12" sm="12">
          <div class="section-title">
            <h2 class="text-center">Hobbies</h2>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6" md="4" lg="4">
          <div class="team">
            <div class="thumbnail">
              <img src="/images/badminton.jpg" alt="" width="100%" height="100%">
            </div>
            <div class="content">
              <h4 class="">Favorite Sport</h4>
              <p class="">Badminton: I love playing badminton with my sister.</p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="4">
          <div class="team">
            <div class="thumbnail">
              <img src="/images/painting.jpg" alt="" width="100%" height="100%">
            </div>
            <div class="content">
              <h4 class="">Art</h4>
              <p class="">Painting: I paint with my sister; I find it a form of therapy.</p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="4">
          <div class="team">
            <div class="thumbnail">
              <img src="/images/cooking.jpg" alt="" width="100%" height="100%">
            </div>
            <div class="content">
              <h4 class="">Cooking & Baking</h4>
              <p class="">Cooking/Baking: I love baking cakes and cooking different savory dishes.</p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="4">
          <div class="team">
            <div class="thumbnail">
              <img src="/images/spotify.jpg" alt="" width="100%" height="100%">
            </div>
            <div class="content">
              <h4 class="">Music</h4>
              <p class="">Music: I enjoy listening to spotify when I work or do homework.</p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="4">
          <div class="team">
            <div class="thumbnail">
              <img src="/images/travel.jpg" alt="" width="100%" height="100%">
            </div>
            <div class="content">
              <h4 class="">Travel</h4>
              <p class="">Travel: I enjoy traveling during my free time. My next vacation spot will be Los Angeles, California.</p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="4">
          <div class="team">
            <div class="thumbnail">
              <img src="/images/makeup.jpg" alt="" width="100%" height="100%">
            </div>
            <div class="content">
              <h4 class="">Makeup</h4>
              <p class="">Makeup: I enjoy watching viral makeup trends and testing them out with makeup products from Sephora and Ulta.</p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.team {
  margin-top: 30px;
  overflow: hidden;
  border-radius: 6px;
  position: relative;
  height: 100%;
}
.team .thumbnail {
  display: flex;
  position: relative;
  z-index: 1;
  height: 100%;
}
.team .thumbnail img {
  width: 100%;
}
.team .thumbnail:after {
  background: linear-gradient(180deg,#fc004d 0,#000);
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  content: "";
  z-index: 1;
  opacity: 0;
  transition: all .3s cubic-bezier(.645,.045,.355,1);
}
.team .content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 35px 40px;
  z-index: 2;
}
.team .content h4 {
  color: #fff;
  margin: 0;
  opacity: 0;
  visibility: hidden;
  transition-delay: .25s;
  transform: translateY(10px);
  transition: all .45s cubic-bezier(.23,.88,.34,.99);
}
.team .content p {
  color: #c6c9d8;
  font-size: 14px;
  line-height: 34px;
  opacity: 0;
  visibility: hidden;
  transition: all .45s cubic-bezier(.23,.88,.34,.99);
  transform: translateY(10px);
}
.team:hover .thumbnail:after {
  opacity: .85;
  top: 0;
}
.team:hover .content {
  opacity: 1;
  visibility: visible;
}
.team:hover .content h4 {
  transition-delay: .25s;
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
.team:hover .content p {
  transition-delay: .33s;
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
</style>

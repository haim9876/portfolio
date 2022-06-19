<template>
  <div class="page-wrapper">
    <v-container class="container">
      <v-row class="mb-50">
        <v-col cols="12" sm="12">
          <div class="section-title">
            <h2 class="text-center">Friends</h2>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6" md="4" lg="4">
          <div class="team">
            <div class="thumbnail">
              <img src="/images/team-1.jpg" alt="">
            </div>
            <div class="content">
              <h4 class="">Jone Due</h4>
              <p class="">Sr. Web Developer</p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="4">
          <div class="team">
            <div class="thumbnail">
              <img src="/images/team-2.jpg" alt="">
            </div>
            <div class="content">
              <h4 class="">Fatima-Asrafi</h4>
              <p class="">Front-end Engineer</p>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="4" lg="4">
          <div class="team">
            <div class="thumbnail">
              <img src="/images/team-3.jpg" alt="">
            </div>
            <div class="content">
              <h4 class="">Al-Amin Bali</h4>
              <p class="">Sr. Graphic Designer</p>
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
}
.team .thumbnail {
  display: flex;
  position: relative;
  z-index: 1;
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
<template>
  <div class="page-wrapper">
    <v-container class="container">
      <v-row class="mb-50">
        <v-col cols="12" sm="12">
          <div class="section-title">
            <h2 class="text-center">Skills</h2>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="12" md="6">
          <div class="progress-wrap">
            <h5>Photoshop(90%)</h5>
            <div class="progress">
              <v-slider
                class="align-self-stretch"
                min="0"
                max="10"
                value="9"
                readonly
              ></v-slider>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="12" md="6">
          <div class="progress-wrap">
            <h5>jQuery(85%)</h5>
            <div class="progress">
              <v-slider
                class="align-self-stretch"
                min="0"
                max="10"
                value="8.5"
                readonly
              ></v-slider>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="12" md="6">
          <div class="progress-wrap">
            <h5>HTML(95%)</h5>
            <div class="progress">
              <v-slider
                class="align-self-stretch"
                min="0"
                max="10"
                value="9.5"
                readonly
              ></v-slider>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="12" md="6">
          <div class="progress-wrap">
            <h5>CSS3(90%)</h5>
            <div class="progress">
              <v-slider
                class="align-self-stretch"
                min="0"
                max="10"
                value="9"
                readonly
              ></v-slider>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="12" md="6">
          <div class="progress-wrap">
            <h5>Vue(90%)</h5>
            <div class="progress">
              <v-slider
                class="align-self-stretch"
                min="0"
                max="10"
                value="9"
                readonly
              ></v-slider>
            </div>
          </div>
        </v-col>

        <v-col cols="12" sm="12" md="6">
          <div class="progress-wrap">
            <h5>SEO(70%)</h5>
            <div class="progress">
              <v-slider
                class="align-self-stretch"
                min="0"
                max="10"
                value="7"
                readonly
              ></v-slider>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.progress-wrap {
  width: 100%;
}
.progress-wrap h5 {
  font-size: 16px;
  margin-bottom: 0;
  font-weight: 500;
}
</style>
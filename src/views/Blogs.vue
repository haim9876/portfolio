<template>
   <div class="page-wrapper blogs">
    <v-container class="container">
      <v-row class="mb-50">
        <v-col cols="12" sm="12">
          <div class="section-title">
            <h2 class="text-center">Latest Blogs</h2>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="12" lg="6" offset-lg="3">
           <div class="media">
            <div class="media-left">
              <img src="/images/blog-media2.jpg" alt="">
            </div>
            <div class="media-body">
              <br/>
              <br/>
              <br/>
              <br/>
              <h1>Bhool Bhulaiya 2</h1>
              <a href="">
                <small>
                  16 JUNE 2022
                </small>
              </a>
              <p>
                I recently watched the movie Bhool Bhulaiya 2 at the movie theatres with my friends.
                It was a movie filled with comedy and horror at the same time. Me and friends laughed 
                and had jump scares get us at times. In my opinion it's a rating of 11/10 for me.
              </p>
            </div>
          </div>

          <div class="media">
            <div class="media-left">
              <img src="/images/blog-media1.jpg" alt="">
            </div>
            <div class="media-body">
              <br/>
              <br/>
              <br/>
              <br/>
              <h1>Birthday Dinner</h1>
              <a href="">
                <small>
                  04 JUNE 2022
                </small>
              </a>
              <p>
                I went to Nuser-Et on my birthday and had steak with my family. 
                We ordered the Tomahawk steak, lamb chops, macaroni and cheese, 
                french fries, baklava, sparkling water, and ate my birthday cake.
              </p>
            </div>
          </div>

          <div class="media">
            <div class="media-left">
              <img src="/images/blog-media3.jpg" alt="">
            </div>
            <div class="media-body">
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <h1>Graduation Day</h1>
              <a href="">
                <small>
                  21 May 2022
                </small>
              </a>
              <p>
                I attended my graduation ceremony at Boston University Metropolitan College with my family.
                I graduated with my Master's in Software Development.
              </p>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>

.media {
  margin-bottom: 30px;
  display: flex;    
  align-items: flex-start;
}
.media-body {
  padding-left: 30px;
  flex: 1;
}
.media-body h4 {
  font-size: 18px;
}
.media-body small {
  display: block;
  color: #e45447;
  padding: 4px 0px;
  font-size: 14px;
}
</style>
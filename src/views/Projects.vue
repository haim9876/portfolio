<template>
  <div class="page-wrapper">
    <v-container class="container">
      <v-row class="mb-50">
        <v-col cols="12" sm="12">
          <div class="section-title">
            <h2 class="text-center">My Projects: Assignments</h2>
          </div>
        </v-col>
      </v-row>
      <div class="contents">
        <div class="row grid projects">
          <v-col cols="12" md="6" lg="4" sm="12" class="single-work all creative" 
            style="position: absolute; left: 0%; top: 0px;"
          >
            <div class="position-relative">
              <div class="thumb">
                <img src="/images/w1.jpg" class="image img-fluid" alt="">
              </div>
              <a href="https://haim9876.github.io/Hw-1/Welcome.html" target="_blank" class="overlay transition"></a>
              <div class="short-info transition">
                <h4>Module 1: Biography</h4>
                <div class="cat">Project 1</div>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6" lg="4" sm="12" class="single-work all creative" 
            style="position: absolute; left: 33.3333%; top: 0px;"
          >
            <div class="position-relative">
              <div class="thumb">
                <img src="/images/w2.jpg" class="image img-fluid" alt="">
              </div>
              <a href="https://haim9876.github.io/Hw-2/Cook.html" target="_blank" class="overlay transition"></a>
              <div class="short-info transition">
                <h4>Module 2: Styled Biography</h4>
                <div class="cat">Project 2</div>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6" lg="4" sm="12" class="single-work all creative" 
            style="position: absolute; left: 66.6667%; top: 0px;"
          >
            <div class="position-relative">
              <div class="thumb">
                <img src="/images/w3.jpg" class="image img-fluid" alt="">
              </div>
              <a href="https://haim9876.github.io/Hw-3/" target="_blank" class="overlay transition"></a>
              <div class="short-info transition">
                <h4>Module 3: Simple Javascript Calculator</h4>
                <div class="cat">Project 3</div>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6" lg="4" sm="12" class="single-work all creative" 
            style="position: absolute; left: 0%; top: 409px;"
          >
            <div class="position-relative">
              <div class="thumb">
                <img src="/images/w6.jpg" class="image img-fluid" alt="">
              </div>
              <a href="https://haim9876.github.io/Hw-4/" target="_blank" class="overlay transition"></a>
              <div class="short-info transition">
                <h4>Module 4: Form Validation and Submission</h4>
                <div class="cat">Project 4</div>
              </div>
            </div>
          </v-col>

           <v-col cols="12" md="6" lg="4" sm="12" class="single-work all creative" 
            style="position: absolute; left: 33.3333%; top: 460px;"
          >
            <div class="position-relative">
              <div class="thumb">
                <img src="/images/w4.jpg" class="image img-fluid" alt="">
              </div>
              <a href="https://haim9876.github.io/gitpublicdomainfree/" target="_blank" class="overlay transition"></a>
              <div class="short-info transition">
                <h4>Module 5: AJAX and JSON</h4>
                <div class="cat">Project 5</div>
              </div>
            </div>
          </v-col>

          <v-col cols="12" md="6" lg="4" sm="12" class="single-work all creative" 
            style="position: absolute; left: 66.6667%; top: 455px;"
          >
            <div class="position-relative">
              <div class="thumb">
                <img src="/images/w5.jpg" class="image img-fluid" alt="">
              </div>
              <a href="https://ephemeral-sundae-568037.netlify.app/" target="_blank" class="overlay transition"></a>
              <div class="short-info transition">
                <h4>Module 6: Vue Show & Hide</h4>
                <div class="cat">Project 6</div>
              </div>
            </div>
          </v-col>
        </div>
      </div>
    </v-container>
  </div>
</template>

<style scoped>
  .projects {
    position: relative;
    height: 726.828px;
  }
  .projects .single-work:first-of-type, .projects .single-work:nth-of-type(2), .projects .single-work:nth-of-type(3) {
    margin-bottom: 30px;
  }
  .single-work img {
    width: 100%;
  }
  .single-work .overlay {
    position: absolute;
    left: 0;
    opacity: 0.9;
    top: 0;
    height: 100%;
    width: 100%;
  }
  .single-work .short-info {
    position: absolute;
    bottom: 44px;
    font-size: 14px;
    left: 80px;
    color: #ffffff;
    opacity: 0;
    visibility: hidden;
  }
  .single-work h4 {
    color: #fff;
    font-size: 20px;
    margin-bottom: 8px;
  }
  .single-work:hover .overlay {
    top: 20px;
    background: #e45447;
    left: 20px;
  }
  .single-work:hover .short-info {
    bottom: 24px;
    left: 60px;
    opacity: 1;
    visibility: visible;
  }
    .text-center{
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  }
</style>

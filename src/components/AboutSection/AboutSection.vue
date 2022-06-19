<template>
  <div class="about">
    <v-container class="container">
      <v-row align="center">
        <v-col cols="12" sm="12" md="12" lg="6" class="d-lg-block">
          <div class="img-about">
            <img src="/images/about.jpg" alt="" class="img-fluid" />
          </div>
        </v-col>
        <v-col cols="12" sm="12" md="12" lg="6">
          <div class="about-details">
            <div class="section-title">
              <h2>About Me</h2>
            </div>
            <p id="about">
              Hi, my name is Moushume Hai. I am a Software Developer who loves to cook, paint, watch shows, watch tiktoks,
              listen to music, do photography, drink tea with my dad, sit in my backyard and enjoy the weather, and travel.
              I also enjoy spending quality time with my family and friends like eating out or eating at home with my sister.
              I currently have two pets; a pet cat named Goldie and a betta fish named Lucia. 
              My current favorite song at the moment is: Running Up That Hill (A Deal With God) 
              as played in Stranger Things in Season 4. Speaking of Stranger Things that is the show that I am currently
              watching right now.
            </p>
            <ul class="about-info">
              <li>
                <span>Name:</span>
                <span>Moushume Hai</span>
              </li>
              <li>
                <span>Date of birth:</span>
                <span>June 4th, 1998</span>
              </li>
              <li>
                <span>Age:</span>
                <span>24</span>
              </li>
              <li>
                <span>Height:</span>
                <span>5'6</span>
              </li>
              <li>
                <span>Favorite Shows:</span>
                <span>You, Stranger Things, Gilmore Girls, & Gossip Girls.</span>
              </li>
              <li>
                <span>Favorite Artists:</span>
                <span>Weeknd, Drake, Rihanna, Harry Styles, & Ariana Grande.</span>
              </li>
            </ul>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<style scoped>
.about {
  /* background: #f9f9ff; */
  padding: 180px 0 0;
}
.img-about img {
  outline: 10px solid #90acd1;
  outline-offset: -54px;
  border: 44px solid transparent;
  border-width: 0px 10px 0px 85px;
}
.img-fluid {
  max-width: 100%;
  height: auto;
}

.section-title h2::before {
  transform: translateX(0);
  left: 0;
}

.section-title h2::after {
  transform: translateX(0);
  left: 0;
}

.about-info {
  margin-top: 1.5rem!important;
  margin-left: 0;
  padding-left: 0;
}

.about-info li {
  display: flex;
  margin-bottom: 10px;
}

.about-details .about-info li span:first-child {
  font-size: 16px;
  font-weight: 600;
  color: #222222;
  width: 130px;
}

.about-details .about-info li span {
  width: calc(100% - 130px);
}

.section-title {
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

.about{
  font-family:Verdana, Geneva, Tahoma, sans-serif;
}
</style>
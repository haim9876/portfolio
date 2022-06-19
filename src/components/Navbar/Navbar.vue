<template>
  <v-app-bar
    absolute
    color="#43a047"
    dark
    shrink-on-scroll
    prominent
    src="https://c.tenor.com/J6soBVUzulIAAAAC/aesthetic-banner.gif"
    fade-img-on-scroll
    scroll-target="#scrolling-techniques-5"
    scroll-threshold="500"
  >
    <template v-slot:img="{ props }">
      <v-img
        v-bind="props"
        gradient="to top right, rgba(55,236,186,.7), rgba(25,32,72,.7)"
      ></v-img>
    </template>

    <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

    <v-app-bar-title>Moushume Hai</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn text class="nav-link" @click="handleNavigate('/')" >
      Home
    </v-btn>

    <v-btn text class="nav-link" @click="handleNavigate('/about')">
      About
    </v-btn>

    <v-btn text class="nav-link" @click="handleNavigate('/contact')">
      Contact
    </v-btn>
    <v-btn text class="nav-link" @click="handleNavigate('/hobbies')">
      Hobbies
    </v-btn>
    <v-btn text class="nav-link" @click="handleNavigate('/experience')">
      Experience
    </v-btn>
    <v-btn text class="nav-link" @click="handleNavigate('/movies')">
      Movies
    </v-btn>
    <v-btn text class="nav-link" @click="handleNavigate('/skills')">
      Skills
    </v-btn>
    <v-btn text class="nav-link" @click="handleNavigate('/works')">
      Works
    </v-btn>
    <v-btn text class="nav-link" @click="handleNavigate('/blogs')">
      Blog
    </v-btn>
     <v-btn text class="nav-link" @click="handleNavigate('/friends')">
      Friends
    </v-btn>
    <v-btn text class="nav-link" @click="handleNavigate('/login')" v-if="!logged">
      Login
    </v-btn>
    <v-btn text class="nav-link" @click="handleNavigate('/admin')" v-if="logged">
      Admin
    </v-btn>
  </v-app-bar>
</template>

<style scoped>
  .nav-link {
    margin-top: 9px;
  }
</style>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      logged: false
    }
  },
  methods: {
    handleNavigate (path) {
      this.$router.push(path)
    }
  },
  mounted() {
    console.log(localStorage.getItem('logged'))
    if (localStorage.getItem('logged') === 'true') {
      this.logged = true
    }
  }
};
</script>

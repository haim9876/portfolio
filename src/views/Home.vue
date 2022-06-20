<template>
  <div class="home">
    <div class="carousel-section">
      <v-carousel height="700">
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
        ></v-carousel-item>
      </v-carousel>
    </div>
    <div>
      <AboutSection />
    </div>
  </div>
</template>

<style scoped>
.home {
  padding-top: 120px;
}

</style>

<script>
import AboutSection from '@/components/AboutSection'
export default {
  name: "Home",
  components: {AboutSection},
  data() {
    return {
      items: [
        {
          src: "/images/home-background.jpg",
        },
        {
          src: "/images/home-background2.jpg",
        },
        {
          src: "/images/home-background3.jpg",
        },
        {
          src: "/images/home-background4.jpg",
        },
      ],
    };
  },
};
</script>
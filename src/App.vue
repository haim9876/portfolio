<template>
  <v-app>
    <v-card class="overflow-hidden">
      <Navbar />
      <v-sheet
        id="scrolling-techniques-5"
        class="overflow-y-auto"
        max-height="100vh"
      >
        <v-main>
          <router-view />
          <Footer />
        </v-main>
      </v-sheet>
    </v-card>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer'

export default {
  name: "App",
  components: {
    Navbar,
    Footer
  },
  data: () => ({
    //
  }),
};
</script>

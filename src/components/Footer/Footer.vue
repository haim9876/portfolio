<template>
  <footer class="footer">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12">
          <div class="footer-top">
            <div class="footer-logo text-center">
              <h2>Follow Me!</h2>
            </div>
            <div class="footer-social text-center">
              <a href="https://www.linkedin.com/in/hai98" target="_blank">
                <v-icon large class="transition"> mdi-linkedin </v-icon>
              </a>
              <a href="https://github.com/haim9876" target="_blank">
                <v-icon large class="transition"> mdi-github </v-icon>
              </a>
            </div>
          </div>
        </v-col>
        <v-col cols="12" sm="12">
          <p class="text-center footer-text">
            Copyright © 2022 Moushume Hai
          </p>
        </v-col>
      </v-row>
    </v-container>
  </footer>
</template>

<style scoped>
.footer {
  padding: 100px 0 !important;
  background: #f9f9ff;
}
.footer-logo h4 {
  font-size: 40px;
  color: #777777;
  font-weight: 700;
  margin-top: 48px;
  margin-bottom: 0;
}
.footer-social {
  margin: 25px 0px 50px;
}
.footer-social a {
  padding: 0 20px;
  transition: all 0.3s ease 0s;
  text-decoration: none;
}
.footer-social a i {
  color: #cccccc;
  font-size: 50px;
}
.footer-social a i:hover {
  color: #e45447;
}
.footer-text {
  margin-bottom: 0;
  color: #777777;
  font-size: 20px;
}
</style>

<script>
export default {
  data: () => ({}),
};
</script>

<template>
  <div class="page-wrapper">
    <v-container class="container">
      <v-row class="mb-50">
        <v-col cols="12" sm="12">
          <div style="text-align:center">
            <div class="dropdown">
              <button class="dropbtn">Download My Resume</button>
              <div class="dropdown-content">
                <a href="./Resume.pdf" download="">In pdf Format</a>
                <a href="./Resume.docx" download>In word Format</a>
              </div>
            </div>
            <br /><br /><br /><br />
            <div>
              <embed src="/Resume.pdf" type="application/pdf" />
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
embed, iframe {
  width: 100%;
  height: 1100px;
}
.dropdown-content a {
  display: block;
}
</style>

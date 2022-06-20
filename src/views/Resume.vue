<template>
  <div class="page-wrapper">
    <v-container class="container">
      <v-row class="mb-50">
        <v-col cols="12" sm="12">
          <div style="text-align:center">
            <div class="dropdown">
              <button class="drop">Download My Resume</button>
              <div class="document-types">
                <a href="./Resume.pdf" download>PDF Format</a>
                <a href="./Resume.docx" download>Word Format</a>
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
  height: 800px;
}
.document-types a {
  display: block;
  cursor: pointer;
  padding: 16px;
  text-align: center;
  justify-content: center
}
.document-types a:hover{background-color: #f1f1f1}

.drop {
  padding: 16px;
  font-size: 30px;
  border: none;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
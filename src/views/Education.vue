<template>
  <div class="page-wrapper">
    <v-container class="container">
      <v-row class="mb-50">
        <v-col cols="12" sm="12">
          <div class="section-title">
            <h2 class="text-center">Education</h2>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="12">
          <div>
            <Resume 
              date="2021-2022"
              title="M.S in Software Development"
              position="Kuger"
              description="Currently"
              resumeType="education"
            />

            <Resume 
              date="2016-2020"
              title="B.S in Computer Science"
              position="Wayne"
              description="Computer Science."
              resumeType="education"
            />

            <Resume 
              date="2012-2016"
              title="High School"
              position="Alexander"
              description="Obtained my high school diploma from Alexander"
              resumeType="education"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>

</style>

<script>
import Resume from "@/components/Resume";
export default {
  components: {
    Resume,
  },
};
</script>
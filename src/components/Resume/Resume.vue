<template>
  <div class="resume d-flex transition">
    <div class="icon d-flex align-items-center justify-content-center">
      <v-icon class="icon" v-if="resumeType === 'education'">
        mdi-school-outline
      </v-icon>
      <v-icon class="icon" v-if="resumeType === 'experience'">
        mdi-briefcase-outline
      </v-icon>
      <v-icon class="icon" v-if="resumeType === 'awards'">
        mdi-police-badge-outline
      </v-icon>
    </div>
    <div class="text pl-3">
      <span class="date">{{date}}</span>
      <h4>{{title}}</h4>
      <span class="position">{{position}}</span>
      <p>
        {{description}}
      </p>
    </div>
  </div>
</template>

<style scoped>
.resume {
  width: 100%;
  margin-bottom: 30px;
  background-color: #f9f9ff;
  padding: 40px 30px;
  border-radius: 10px;
}
.resume .icon {
  width: 50px;
  height: 50px;
  background: #90acd1;
  border-radius: 50%;
}
.resume .text {
  width: calc(100% - 100px);
  padding: 0 0 10px;
}
.resume .date {
  font-weight: 700;
  font-size: 16px;  
}
.resume h4 {
  font-size: 20px;
  font-weight: 700;
}
.resume .position {
  display: inline-block;
  margin-bottom: 10px;
}
.resume .icon {
  color: white;
  font-size: 24px;
}
.resume:hover {
  background: #90acd1;
  color: #ffffff;
}
.resume:hover .icon {
  background: #fff;
}
.resume:hover .icon .v-icon {
  color: #222222;
}
</style>

<script>

export default {
  props: {
    date: String,
    title: String,
    position: String,
    description: String,
    resumeType: String
  }
}
</script>

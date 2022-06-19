<template>
  <div class="contact">
    <v-container class="container">
      <v-row class="mb-50">
        <v-col cols="12" sm="12">
          <div class="section-title">
            Login
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="12">
          <div class="row">
            <v-col cols="12">
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Email"
                  class="form-control"
                  @change="changeEmail"
                />
              </div>
            </v-col>
            <v-col cols="12">
              <div class="form-group">
                <input
                  type="password"
                  placeholder="Password"
                  class="form-control"
                  @change="changePassword"
                />
              </div>
            </v-col>
            <v-col cols="12" sm="12">
              <div class="button-field">
                <button class="btn radius-btn" @click="handleSubmit">
                  Login
                </button>
              </div>
            </v-col>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.section-title {
  font-size: 30px;
  text-align: center;
}
.contact {
  padding: 180px 0 90px;
}
.contact .btn {
    background: #e45447;
    margin-top: 15px;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    changeEmail(e) {
      this.email = e.target.value
    },
    changePassword (e) {
      this.password = e.target.value
    },
    handleSubmit() {
      if (this.email === 'admin@admin.com' && this.password === '111') {
        localStorage.setItem("logged", 'true')
        window.open('/admin', '_self')
      }
    }
  }
}
</script>

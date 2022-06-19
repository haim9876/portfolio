<template>
  <div class="contact">
    <v-container class="container">
      <v-row class="mb-50">
        <v-col cols="12" sm="12">
          <div class="section-title">
            <img src="/images/contact.jpeg" alt="" class="center" />
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="12">
          <div class="row">
            <v-col cols="12" sm="12" md="6">
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Name"
                  class="form-control"
                  v-model="name"
                  @change="changeName"
                />
              </div>
            </v-col>
            <v-col cols="12" sm="12" md="6">
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Email Address"
                  class="form-control"
                  @change="changeEmail"
                  v-model="email"
                />
              </div>
            </v-col>
            <v-col cols="12" sm="12">
              <div class="form-group">
                <input
                  type="text"
                  placeholder="Subject"
                  class="form-control"
                  @change="changeSubject"
                  v-model="subject"
                />
              </div>
            </v-col>
            <v-col cols="12" sm="12">
              <div class="form-group">
                <textarea
                  rows="5"
                  placeholder="Write your message"
                  class="form-control"
                  @change="changeMessage"
                  v-model="message"
                />
              </div>
            </v-col>
            <v-col cols="12" sm="12">
              <div class="button-field">
                <button class="btn radius-btn" @click="handleSubmit">
                  Send Message
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
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    changeName(e) {
      this.name = e.target.value;
    },
    changeEmail(e) {
      this.email = e.target.value;
    },
    changeSubject(e) {
      this.subject = e.target.value;
    },
    changeMessage(e) {
      this.message = e.target.value;
    },
    handleSubmit() {
      if (
        this.name !== "" &&
        this.message !== "" &&
        this.email !== "" &&
        this.subject !== ""
      ) {
        var messageList = JSON.parse(localStorage.getItem("messages")) ?? [];
        messageList.push({
          id: new Date().getTime(),
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        });
        localStorage.setItem("messages", JSON.stringify(messageList));
        this.name = this.email = this.subject = this.message = "";
      }
    },
  },
};
</script>
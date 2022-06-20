import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from '@/views/Contact.vue'
import Resume from '@/views/Resume.vue'
import Music from '@/views/Music.vue'
import Skills from '@/views/Skills.vue'
import Works from '@/views/Works.vue'
import Blogs from '@/views/Blogs.vue'
import Login from '@/views/Login.vue'
import Admin from '@/views/Admin.vue'
import Hobbies from '@/views/Hobbies.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/resume",
    name: "Resume",
    component: Resume,
  },
  {
    path: "/music",
    name: "Music",
    component: Music,
  },
  {
    path: "/skills",
    name: "Skills",
    component: Skills,
  },
  {
    path: "/works",
    name: "Works",
    component: Works
  },
  {
    path: "/blogs",
    name: "Blogs",
    component: Blogs
  },
  {
    path: "/login",
    name: "Login",
    component: Login
  },
  {
    path: "/admin",
    name: "Admin",
    component: Admin
  },
  {
    path: "/hobbies",
    name: "Hobbies",
    component: Hobbies
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

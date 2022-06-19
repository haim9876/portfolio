import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from '@/views/Contact.vue'
import Experience from '@/views/Experience.vue'
import Movies from '@/views/Movies.vue'
import Skills from '@/views/Skills.vue'
import Works from '@/views/Works.vue'
import Blogs from '@/views/Blogs.vue'
import Friends from '@/views/Friends.vue'
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
    path: "/experience",
    name: "Experience",
    component: Experience,
  },
  {
    path: "/movies",
    name: "Movies",
    component: Movies,
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
    path: "/friends",
    name: "Friends",
    component: Friends
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

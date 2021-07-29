import Component1 from "./Component1.js";
import Component2 from "./Component2.js";
import Component3 from "./Component3.js";

const Auth = {
  isAdmin: false,
  isLogged: false,
};

const Home = {
  template: `<h2>Ini Home</h2>`,
};

const routes = [
  {
    path: "/",
    alias: "/home",
    component: Home,
  },
  {
    path: "/halaman1",
    component: Component1,
  },
  {
    path: "/halaman2",
    component: Component2,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/halaman3",
    component: Component3,
    meta: {
      requiresAuth: true,
      requiresAdmin: true,
    },
  },
];

const router = new VueRouter({ routes });
router.beforeEach((to, _, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (to.matched.some((record) => record.meta.requiresAdmin)) {
      if (Auth.isAdmin && Auth.isLogged) {
        next();
      } else {
        alert(
          "Anda harus login terlebih dahulu sebagai admin untuk mengakses halaman ini"
        );
        next(false);
      }
    } else {
      if (Auth.isLogged) {
        next();
      } else {
        alert("Anda harus login dulu untuk mengakses halaman ini");
        next(false);
      }
    }
  } else {
    next();
  }
});

const vm = new Vue({
  router,
  data: {
    authMirror: Auth,
  },
  el: "#app",
  methods: {
    onLogin(isAdmin = false) {
      Auth.isAdmin = isAdmin;
      Auth.isLogged = true;
      this.authMirror = Auth;
    },
    onLogout() {
      Auth.isAdmin = false;
      Auth.isLogged = false;
      this.authMirror = Auth;
    },
  },
  computed: {
    auth() {
      return this.authMirror;
    },
  },
});

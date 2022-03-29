import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/home.vue";
import Login from "../views/Login.vue";
Vue.use(VueRouter);
const routes = [{
    path: "/",
    name: "home",
    meta: ["首页"],
    component: HomeView,
    children: [
      {
        path: "/",
        component: () => import("../views/home/liebiao.vue"),
      },
      {
        path: "2-1",
        component: () => import("../views/home/liebiao.vue"),
      },
      {
        path: "2-2",
        component: () => import("../views/home/shili.vue"),
      },
    ]
  },
  {
    path:"/Login",
    name:Login,
    component:Login
  }
];

const router = new VueRouter({
  routes,
});
//权限管理
router.beforeEach(function (to, from, next) {
  // 如果打开界面跳转的是My就让他跳转
  if (to.name == "Login") {
    next()
  } else {
    // 如果没有token的话就跳转到MyLogin 
    // 有token直接跳转
    let token = localStorage.getItem("token")
    if (!token) next({
      name: "Login"
    })
    if (token) {
      next()
    }
  }
})
export default router;
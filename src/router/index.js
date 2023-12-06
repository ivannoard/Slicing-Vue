import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from "vue-router";
import {
  Home,
  AboutUs,
  Cart,
  Login,
  Register,
  Menu,
  MenuDetail,
  Checkout,
  Reservation,
  Account,
  ForgotPassword,
  Payment,
} from "../pages";
import { AuthLayout, HomeLayout } from "../layouts";

const appRoutes = [
  {
    component: HomeLayout,
    path: "/",
    children: [
      {
        name: "Register",
        component: Register,
        path: "/auth/register",
        beforeEnter: (to, from) => {
          console.log("register");
          console.log(to);
          console.log(from);
        },
      },
      {
        name: "Homepage",
        path: "/",
        component: Home,
        beforeEnter: (to, from) => {
          console.log(to);
          console.log(from);
        },
      },
      {
        name: "Menu",
        path: "/menu",
        component: Menu,
      },
      {
        name: "Menu Detail",
        path: "/menu/:menuId",
        component: MenuDetail,
      },
      {
        name: "About Us",
        path: "/about-us",
        component: AboutUs,
      },
      {
        name: "Cart",
        path: "/cart",
        component: Cart,
      },
      {
        name: "Checkout",
        path: "/check-out",
        component: Checkout,
      },
      {
        name: "Reservation",
        path: "/reservation",
        component: Reservation,
      },
      {
        name: "Account",
        path: "/account",
        component: Account,
      },
      {
        name: "Payment",
        path: "/payment",
        component: Payment,
      },
    ],
  },
  {
    component: AuthLayout,
    path: "/auth",
    children: [
      {
        name: "Login",
        component: Login,
        path: "login",
        beforeEnter: (to, from) => {
          console.log("login");
          console.log(to);
          console.log(from);
        },
      },
    ],
  },
  {
    path: "/auth/forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/auth/forgot-password/:token",
    component: ForgotPassword,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: appRoutes,
});

export default router;

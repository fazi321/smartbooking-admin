import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Categories from "../views/Categories.vue";
import Vendors from "../views/Vendors.vue";
import Deals from "../views/Deals.vue";
import Notifications from "../views/Notifications.vue";
import Booking from "../views/bookings.vue";
import SMS from "../views/SMS.vue";
import Services from "../views/Services.vue";
import CancelationRequest from "../views/CancelationRequest.vue";
import Users from "../views/Users.vue";
import Cities from "../views/Cities.vue";
import Balance from "../views/Balance.vue";
import PaymentMethod from "../views/PaymentMethod.vue";
import PaymentSettings from "../views/PaymentSettings.vue";
import ApiSettings from "../views/ApiSettings.vue";
import BookingDetails from "../views/BookingDetails.vue";
import Login from "../views/Login.vue";
import AddUser from "../views/AddUser.vue";
import FrontEnd from "../views/FrontEnd.vue";

const routes = [
  {
    path: "/",
    name: "dashboard",
    component: Home,
  },
  {
    path: "/categories",
    name: "categories",
    component: Categories,
  },
  {
    path: "/vendor",
    name: "vendor",
    component: Vendors,
  },
  {
    path: "/settings/api-settings",
    name: "apiSettings",
    component: ApiSettings,
  },
  {
    path: "/bookings",
    name: "booking",
    component: Booking,
  },
  {
    path: "/booking/:cat",
    name: "bookingDetails",
    component: BookingDetails,
  },
  {
    path: "/cities",
    name: "cities",
    component: Cities,
  },
  {
    path: "/balance",
    name: "Balance",
    component: Balance,
  },
  {
    path: "/deals",
    name: "deals",
    component: Deals,
  },
  {
    path: "/services",
    name: "services",
    component: Services,
  },
  {
    path: "/users",
    name: "users",
    component: Users,
  },
  {
    path: "/cancelation-requests",
    name: "cancelation-requests",
    component: CancelationRequest,
  },
  {
    path: "/settings/notifications",
    name: "notifications",
    component: Notifications,
  },
  {
    path: "/settings/sms",
    name: "sms",
    component: SMS,
  },
  {
    path: "/settings/payment-setting",
    name: "payment-setting",
    component: PaymentSettings,
  },
  {
    path: "/settings/payment-method",
    name: "payment-method",
    component: PaymentMethod,
  },
  {
    path: "/Frontend/:page",
    name: "Frontend",
    component: FrontEnd,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  }, {
    path: "/add-user",
    name: "adduser",
    component: AddUser,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

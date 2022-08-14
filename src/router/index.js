import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Categories from "../views/Categories.vue";
import Vendors from "../views/Vendors.vue";
import Deals from "../views/Deals.vue";
import Notifications from "../views/Notifications.vue";
import Booking from "../views/bookings.vue";
import SMS from "../views/SMS.vue";
import Services from "../views/Services.vue";
import Cities from "../views/Cities.vue";
import PaymentMethod from "../views/PaymentMethod.vue";
import PaymentSettings from "../views/PaymentSettings.vue";
import ApiSettings from "../views/ApiSettings.vue";
import Settings from "../views/Settings.vue";
import BookingDetails from "../views/BookingDetails.vue";

const routes = [
  {
    path: "/dashboard",
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
    path: "/api-settings",
    name: "apiSettings",
    component: ApiSettings,
  },
  {
    path: "/bookings",
    name: "booking",
    component: Booking,
  },
  {
    path: "/booking-details",
    name: "bookingDetails",
    component: BookingDetails,
  },
  {
    path: "/cities",
    name: "cities",
    component: Cities,
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
    path: "/notifications",
    name: "notifications",
    component: Notifications,
  },
  {
    path: "/sms",
    name: "sms",
    component: SMS,
  },
  {
    path: "/settings",
    name: "settings",
    component: Settings,
  },
  {
    path: "/payment-setting",
    name: "payment-setting",
    component: PaymentSettings,
  },
  {
    path: "/payment-method",
    name: "payment-method",
    component: PaymentMethod,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

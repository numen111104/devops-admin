import { createRouter, createWebHistory } from "vue-router"
import Dashboard from "../pages/Dashboard.vue"
import Analytics from "../pages/Analytics.vue"
import Users from "../pages/Users.vue"
import Settings from "../pages/Settings.vue"

const routes = [
  { path: "/", name: "Dashboard", component: Dashboard },
  { path: "/analytics", name: "Analytics", component: Analytics },
  { path: "/users", name: "Users", component: Users },
  { path: "/settings", name: "Settings", component: Settings },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router

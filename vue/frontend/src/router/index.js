import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/admin/stores/auth";
import PublicLayout from "@/layouts/PublicLayout.vue";
import AdminLayout from "@/admin/layouts/AdminLayout.vue";
import HomePage from "@/pages/public/HomePage.vue";
import PublicWorksPage from "@/pages/public/PublicWorksPage.vue";
import PublicReviewsPage from "@/pages/public/PublicReviewsPage.vue";
import DashboardPage from "@/admin/pages/DashboardPage.vue";
import LoginPage from "@/admin/pages/LoginPage.vue";
import SkillsPage from "@/admin/pages/SkillsPage.vue";
import WorksPage from "@/admin/pages/WorksPage.vue";
import ReviewsPage from "@/admin/pages/ReviewsPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: PublicLayout,
      children: [
        {
          path: "",
          name: "home",
          component: HomePage
        },
        {
          path: "works",
          name: "public-works",
          component: PublicWorksPage
        },
        {
          path: "reviews",
          name: "public-reviews",
          component: PublicReviewsPage
        }
      ]
    },
    {
      path: "/admin/login",
      name: "login",
      component: LoginPage,
      meta: { guestOnly: true }
    },
    {
      path: "/admin",
      component: AdminLayout,
      meta: { requiresAuth: true },
      children: [
        {
          path: "",
          name: "dashboard",
          component: DashboardPage
        },
        {
          path: "skills",
          name: "skills",
          component: SkillsPage
        },
        {
          path: "works",
          name: "works",
          component: WorksPage
        },
        {
          path: "reviews",
          name: "reviews",
          component: ReviewsPage
        }
      ]
    }
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth"
      };
    }

    return {
      top: 0
    };
  }
});

router.beforeEach((to) => {
  const authStore = useAuthStore();
  authStore.hydrate();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { name: "login" };
  }

  if (to.meta.guestOnly && authStore.isAuthenticated) {
    return { name: "dashboard" };
  }

  return true;
});

export default router;

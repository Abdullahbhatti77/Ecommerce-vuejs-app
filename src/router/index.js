import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import SignUpView from '../views/SignUpView.vue'
import DashboardView from '../views/DashboardView.vue'
import SidebarCom from '../components/SidebarCom.vue'
import ProductDetail from '../components/ProductDetail.vue'
import CategoriesCom from '../components/CategoriesCom.vue'
import ProductsOfCategory from '../components/ProductsOfCategory.vue'

// Defining a route guard function
const isAuthenticated = (to, from, next) => {
  // Checking if the user is logged in
  const userIsLoggedIn = checkIfUserIsLoggedIn();

  // If the user is logged in, allow navigation to the route
  if (userIsLoggedIn) {
    next();
  } else {
    // If the user is not logged in, redirect to the login page
    next({ component: LoginView });
  }
};

//Checking if a user is logged in based on a token
function checkIfUserIsLoggedIn() {
  const token = localStorage.getItem('token');
  return !!token;
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: LoginView
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUpView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      beforeEnter: isAuthenticated // Adding a beforeEnter route guard
    },
    
    { path: '/products', component: SidebarCom },
    { path: '/product/:id', component: ProductDetail, props: true }, // Dynamic route for product detail
    { path: '/', redirect: '/products' },

    { path: '/categories', name: 'CategoriesCom', component: CategoriesCom },
    { path: '/products/:category', name: 'ProductsOfCategory', component: ProductsOfCategory },
    { path: '/', redirect: '/categories' },

  ]
})

export default router

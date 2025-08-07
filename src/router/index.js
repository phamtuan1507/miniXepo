import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Shop from '@/components/Shop.vue'
import ProductDetail from '@/components/ProductDetail.vue'
import Blog from '@/components/Blog.vue'
import BlogDetail from '@/components/BlogDetail.vue'
import Cart from '@/components/Cart.vue'
import Checkout from '@/components/Checkout.vue'
import OrderReceived from '@/components/OrderReceived.vue'
import LoginRegister from '@/components/auth/LoginRegister.vue'
import Contact from '@/components/Contact.vue'
import Services from '@/components/Services.vue'
import ServiceDetails from '@/components/ServiceDetails.vue'
import Appointment from '@/components/Appointment.vue'
import About from '@/components/About.vue'
import Expert from '@/components/Expert.vue'
import LoginTest from '@/components/auth/LoginTest.vue'
import TeamListDetail from '@/components/home/TeamListDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/products', name: 'Shop', component: Shop, meta: { title: 'Sản phẩm' } },
  { path: '/products/:id', name: 'ProductDetail', component: ProductDetail, meta: { title: 'Chi tiết sản phẩm' } },
  { path: '/blogs', name: 'Blog', component: Blog, meta: { title: 'Tin tức' } },
  { path: '/blogs/:id', name: 'BlogDetail', component: BlogDetail, meta: { title: 'Chi tiết tin tức' } },
  { path: '/cart', name: 'Cart', component: Cart, meta: { title: 'Giỏ hàng' } },
  { path: '/checkout', name: 'Checkout', component: Checkout, meta: { title: 'Thanh toán' } },
  { path: '/order-received', name: 'OrderReceived', component: OrderReceived, meta: { title: 'Xác nhận đơn hàng' } },
  // { path: '/login', name: 'Login', component: Login, meta: { title: 'Đăng nhập' } },
  { path: '/contact', name: 'Contact', component: Contact, meta: { title: 'Liên hệ' } },
  { path: '/services', name: 'Services', component: Services, meta: { title: 'Spa thư giãn' } },
  { path: '/services/:id', name: 'ServiceDetails', component: ServiceDetails, meta: { title: 'Chi tiết dịch vụ' } },
  { path: '/appointment', name: 'Appointment', component: Appointment, meta: { title: 'Đặt lịch hẹn' } },
  { path: '/about', name: 'About', component: About, meta: { title: 'Giới thiệu' } },
  { path: '/team', name: 'Team', component: Expert, meta: { title: 'Chuyên gia' } },
  { path: '/experts/:id', name: 'TeamListDetail', component: TeamListDetail, meta: { title: 'Chi tiết chuyên gia' } },
  { path: '/logintest', name: 'Logintest', component: LoginTest, meta: { title: 'LoginTest' } },
  {
    path: "/login",
    name: "LoginRegister",
    component: LoginRegister,
    meta: { title: "Đăng nhập/Đăng ký", requiresAuth: false },
  },


  // thêm các route khác tại đây
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // xử lý scroll đến anchor ID
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token");
  if (to.meta.requiresAuth && !token) {
    next({ name: "LoginRegister" });
  } else {
    document.title = to.meta.title || "Website Sản phẩm";
    next();
  }
});

export default router
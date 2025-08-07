<template>
  <Header />
  <Breadcumb />
  <div class="container mx-auto pt-[120px] pb-[90px] bg-gray-100">
    <div class="flex items-center justify-center bg-gray-100 login-container">
      <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-lg login-box">
        <!-- Tab Switch -->
        <div class="flex justify-center gap-3 mb-4 border-b">
          <button
            @click="switchTab('login')"
            :class="{
              'bg-[#a05c3c] text-white': activeTab === 'login',
              'text-gray-500': activeTab !== 'login',
            }"
            class="px-4 py-2 transition-all duration-300 cursor-pointer focus:outline-none hover:bg-[#a05c3c] hover:text-white"
          >
            Đăng nhập
          </button>
          <button
            @click="switchTab('register')"
            :class="{
              'bg-[#a05c3c] text-white': activeTab === 'register',
              'text-gray-500': activeTab !== 'register',
            }"
            class="px-4 py-2 transition-all duration-300 cursor-pointer focus:outline-none hover:bg-[#a05c3c] hover:text-white"
          >
            Đăng ký
          </button>
        </div>

        <!-- Login Form -->
        <div v-if="activeTab === 'login'">
          <h2 class="mb-4 text-2xl font-bold text-center">Đăng nhập</h2>
          <form @submit.prevent="login">
            <div class="mb-4 form-group">
              <label for="email" class="block text-sm font-medium text-gray-700">Nhập email của bạn</label>
              <input
                id="email"
                type="email"
                v-model="loginForm.email"
                required
                autofocus
                autocomplete="username"
                class="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div class="mb-4 form-group">
              <label for="password" class="block text-sm font-medium text-gray-700">Nhập password của bạn</label>
              <input
                id="password"
                type="password"
                v-model="loginForm.password"
                required
                autocomplete="current-password"
                class="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div class="flex items-center justify-between mb-4 form-options">
              <label class="flex items-center">
                <input
                  id="remember_me"
                  v-model="loginForm.remember"
                  type="checkbox"
                  name="remember"
                  class="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <span class="ml-2 text-sm text-gray-700">Ghi nhớ mật khẩu</span>
              </label>
              <a
                href="#"
                class="text-sm text-gray-600 underline rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Quên mật khẩu?
              </a>
            </div>
            <button
              type="submit"
              class="relative z-[1] w-full inline-block px-[23px] py-[10px] text-sm font-bold uppercase tracking-wider text-white bg-[#a05c3c] border-none rounded-none overflow-hidden text-center group cursor-pointer"
            >
              Đăng nhập
              <span
                class="absolute bottom-0 left-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
              ></span>
              <span
                class="absolute top-0 right-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
              ></span>
            </button>
            <p class="mt-4 text-sm text-center text-gray-600 register-link">
              Nếu bạn chưa có tài khoản?
              <a href="#" @click.prevent="switchTab('register')" class="text-amber-700 hover:underline">Đăng ký tại đây.</a>
            </p>
          </form>
          <p v-if="error" class="mt-2 text-center text-red-500">{{ error }}</p>
        </div>

        <!-- Register Form -->
        <div v-if="activeTab === 'register'">
          <h2 class="mb-4 text-2xl font-bold text-center">Đăng ký</h2>
          <form @submit.prevent="register">
            <div class="mb-4 form-group">
              <label for="reg-username" class="block text-sm font-medium text-gray-700">Nhập username của bạn</label>
              <input
                id="reg-username"
                type="text"
                v-model="registerForm.username"
                required
                autofocus
                autocomplete="username"
                class="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div class="mb-4 form-group">
              <label for="reg-fullname" class="block text-sm font-medium text-gray-700">Nhập họ tên của bạn</label>
              <input
                id="reg-fullname"
                type="text"
                v-model="registerForm.fullname"
                required
                autofocus
                autocomplete="fullname"
                class="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div class="mb-4 form-group">
              <label for="reg-email" class="block text-sm font-medium text-gray-700">Nhập email của bạn</label>
              <input
                id="reg-email"
                type="email"
                v-model="registerForm.email"
                required
                autofocus
                autocomplete="email"
                class="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div class="mb-4 form-group">
              <label for="reg-password" class="block text-sm font-medium text-gray-700">Nhập password của bạn</label>
              <input
                id="reg-password"
                type="password"
                v-model="registerForm.password"
                required
                autocomplete="new-password"
                class="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <div class="mb-4 form-group">
              <label for="reg-confirm-password" class="block text-sm font-medium text-gray-700">Xác nhận password</label>
              <input
                id="reg-confirm-password"
                type="password"
                v-model="registerForm.confirmPassword"
                required
                autocomplete="new-password"
                class="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
            <button
              type="submit"
              class="relative z-[1] w-full inline-block px-[23px] py-[10px] text-sm font-bold uppercase tracking-wider text-white bg-[#a05c3c] border-none rounded-none overflow-hidden text-center group cursor-pointer"
            >
              Đăng ký
              <span
                class="absolute bottom-0 left-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
              ></span>
              <span
                class="absolute top-0 right-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
              ></span>
            </button>
            <p class="mt-4 text-sm text-center text-gray-600 register-link">
              Nếu bạn đã có tài khoản?
              <a href="#" @click.prevent="switchTab('login')" class="text-amber-700 hover:underline">Đăng nhập tại đây.</a>
            </p>
          </form>
          <p v-if="error" class="mt-2 text-center text-red-500">{{ error }}</p>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Breadcumb from "@/components/Breadcumb.vue";
import { ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import mitt from "mitt";

const route = useRoute();
const router = useRouter();
const emitter = mitt();

const activeTab = ref(route.query.tab === "register" ? "register" : "login");
const loginForm = ref({
  email: "",
  password: "",
  remember: false,
});
const registerForm = ref({
  username: "",
  fullname: "",
  email: "",
  password: "",
  confirmPassword: "",
});
const error = ref("");

// Cập nhật title dựa trên tab active
watch(activeTab, (newTab) => {
  if (newTab === "login") {
    document.title = "Đăng nhập";
  } else if (newTab === "register") {
    document.title = "Đăng ký";
  }
});

// Chuyển đổi tab và cập nhật query parameter
const switchTab = (tab) => {
  activeTab.value = tab;
  window.history.pushState({}, "", `/login?tab=${tab}`);
};

// Đăng nhập
const login = async () => {
  try {
    const response = await fetch("http://localhost:3000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: loginForm.value.email,
        password: loginForm.value.password,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.setItem("token", data.access_token); // Lưu token
      await fetchUserProfile(); // Lấy thông tin người dùng
      emitter.emit("user-updated", data.fullName || data.username); // Cập nhật tên người dùng
      router.push("/"); // Chuyển hướng sau khi đăng nhập
    } else {
      error.value = data.message || "Đăng nhập thất bại";
    }
  } catch (err) {
    error.value = "Lỗi kết nối server";
    console.error("Lỗi đăng nhập:", err);
  }
};

// Đăng ký
const register = async () => {
  if (registerForm.value.password !== registerForm.value.confirmPassword) {
    error.value = "Mật khẩu không khớp";
    return;
  }
  try {
    const response = await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: registerForm.value.username,
        password: registerForm.value.password,
        email: registerForm.value.email,
        fullName: registerForm.value.fullname,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      alert("Đăng ký thành công! Vui lòng đăng nhập.");
      switchTab("login");
    } else {
      error.value = data.message || "Đăng ký thất bại";
    }
  } catch (err) {
    error.value = "Lỗi kết nối server";
    console.error("Lỗi đăng ký:", err);
  }
};

// Lấy thông tin người dùng sau khi đăng nhập
const fetchUserProfile = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    error.value = "Không tìm thấy token, vui lòng đăng nhập lại.";
    router.push("/login");
    return;
  }
  console.log("Gửi token:", token); // Debug token
  try {
    const response = await fetch("http://localhost:3000/users/profile", {
      method: "GET",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    });
    const data = await response.json();
    console.log("Dữ liệu người dùng:", data); // Debug dữ liệu người dùng
    if (response.ok) {
      emitter.emit("user-updated", data.fullName || data.username); // Phát sự kiện cập nhật tên
    } else {
      console.error("Lấy thông tin người dùng thất bại:", data.message);
      error.value = "Phiên làm việc hết hạn, vui lòng đăng nhập lại.";
      localStorage.removeItem("token"); // Xóa token không hợp lệ
      router.push("/login");
    }
  } catch (err) {
    console.error("Lỗi kết nối:", err);
    error.value = "Lỗi kết nối server, vui lòng thử lại.";
    localStorage.removeItem("token"); // Xóa token nếu có lỗi
    router.push("/login");
  }
};
</script>
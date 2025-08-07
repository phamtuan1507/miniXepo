<template>
  <header class="container px-4 mx-auto bg-white shadow sm:px-6 lg:px-8">
    <div class="container flex items-center justify-between mx-auto">
      <!-- Logo -->
      <div class="flex items-center py-[10px]">
        <router-link to="/" class="hover:text-[#7a4a2f]">
          <img src="/logo.png" alt="Mona Beauty Blendz" class="h-[100px]" />
        </router-link>
      </div>
      <!-- Main menu desktop -->
      <nav class="flex-1 flex justify-center py-[27px]">
        <ul
          class="hidden md:flex space-x-8 color-[#121f38] text-[14px] font-medium"
        >
          <li>
            <router-link to="/about" class="hover:text-[#7a4a2f]"
              >GIỚI THIỆU</router-link
            >
          </li>
          <li class="relative group">
            <router-link
              to="/services"
              class="hover:text-[#7a4a2f] flex items-center"
            >
              DỊCH VỤ
              <svg
                class="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </router-link>
            <ul
              class="absolute left-0 top-full min-w-[180px] bg-white shadow-lg rounded-b z-20 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-all"
            >
              <li>
                <router-link
                  to="/portfolio"
                  class="flex items-center px-5 py-2 hover:text-[#7a4a2f]"
                >
                  <span class="mr-2 w-2 h-2 bg-[#7a4a2f] rounded-full"></span>
                  SPA THƯ GIÃN
                </router-link>
              </li>
              <li>
                <router-link
                  to="/team"
                  class="flex items-center px-5 py-2 hover:text-[#7a4a2f]"
                >
                  <span class="mr-2 w-2 h-2 bg-[#7a4a2f] rounded-full"></span>
                  CHUYÊN GIA
                </router-link>
              </li>
              <li>
                <router-link
                  to="/appointment"
                  class="flex items-center px-5 py-2 hover:text-[#7a4a2f]"
                >
                  <span class="mr-2 w-2 h-2 bg-[#7a4a2f] rounded-full"></span>
                  ĐẶT HẸN
                </router-link>
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/products" class="hover:text-[#7a4a2f]"
              >SẢN PHẨM</router-link
            >
          </li>
          <li>
            <router-link to="/blogs" class="hover:text-[#7a4a2f]"
              >TIN TỨC</router-link
            >
          </li>
          <li>
            <router-link to="/contact" class="hover:text-[#7a4a2f]"
              >LIÊN HỆ</router-link
            >
          </li>
          <li v-if="isAdmin">
            <router-link to="/admin/users" class="hover:text-[#7a4a2f]"
              >QUẢN LÝ NGƯỜI DÙNG</router-link
            >
          </li>
        </ul>
      </nav>
      <!-- Right icons -->
      <div class="flex items-center space-x-4">
        <!-- Search -->
        <button
          class="text-[#1a2233] hover:text-[#7a4a2f] focus:outline-none cursor-pointer"
          @click="openSearchForm"
        >
          <svg
            class="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="11" r="8" stroke-width="2" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" stroke-width="2" />
          </svg>
        </button>
        <!-- Cart -->
        <div class="relative">
          <button
            class="text-[#1a2233] hover:text-[#7a4a2f] focus:outline-none cursor-pointer"
            @click="goToCart"
          >
            <svg
              class="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="9" cy="21" r="1" stroke-width="2" />
              <circle cx="20" cy="21" r="1" stroke-width="2" />
              <path
                d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"
                stroke-width="2"
              />
            </svg>
          </button>
          <span
            class="absolute -top-2 -right-2 bg-[#7a4a2f] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
          >
            {{ cartItemCount }}
          </span>
        </div>
        <div v-if="isLoggedIn">
          <span
            class="cursor-pointer hover:text-[#7a4a2f]"
            @click="showProfile"
            >{{ userName }}</span
          >
          <button
            @click="logout"
            class="hover:text-[#7a4a2f] focus:outline-none"
          >
            Đăng xuất
          </button>
        </div>
        <div v-else>
          <router-link to="/login" class="hover:text-[#7a4a2f]">
            <button
              class="text-[#1a2233] hover:text-[#7a4a2f] focus:outline-none cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
                />
              </svg>
            </button>
          </router-link>
        </div>
        <div class="hidden md:inline-block">
          <router-link to="/contact" class="">
            <button
              class="relative z-[1] inline-block px-[23px] py-[10px] text-sm font-bold uppercase tracking-wider text-white bg-[#a05c3c] border-none rounded-none overflow-hidden text-center group cursor-pointer"
            >
              Liên Hệ Ngay
              <span
                class="absolute bottom-0 left-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
              ></span>
              <span
                class="absolute top-0 right-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
              ></span>
            </button>
          </router-link>
        </div>
        <!-- Hamburger menu -->
        <button
          class="md:hidden text-white bg-[#7a4a2f] p-2 focus:outline-none rounded"
          @click="openMobileMenu = true"
        >
          <svg
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </div>
    <!-- Mobile menu drawer -->
    <transition name="fade">
      <div
        v-if="openMobileMenu"
        class="fixed inset-0 z-50 flex bg-black bg-opacity-40"
      >
        <div class="w-4/5 max-w-xs bg-[#f8f3f0] h-full shadow-xl flex flex-col">
          <div class="flex items-center justify-between p-4 border-b">
            <div class="flex items-center">
              <img src="/logo.png" alt="Mona Beauty Blendz" class="h-10" />
            </div>
            <button
              class="text-white bg-[#7a4a2f] rounded-full w-8 h-8 flex items-center justify-center"
              @click="openMobileMenu = false"
            >
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <nav class="flex-1 overflow-y-auto">
            <ul class="mt-4 space-y-1 font-semibold text-[#1a2233]">
              <li>
                <router-link
                  to="/"
                  class="flex items-center px-5 py-3 hover:text-[#7a4a2f]"
                  @click="openMobileMenu = false"
                >
                  <span class="mr-2">&rsaquo;</span> TRANG CHỦ
                </router-link>
              </li>
              <li>
                <router-link
                  to="/about"
                  class="flex items-center px-5 py-3 hover:text-[#7a4a2f]"
                  @click="openMobileMenu = false"
                >
                  <span class="mr-2">&rsaquo;</span> GIỚI THIỆU
                </router-link>
              </li>
              <li>
                <button
                  @click="toggleServiceMenu"
                  class="flex items-center w-full px-5 py-3 hover:text-[#7a4a2f] focus:outline-none"
                >
                  <span
                    class="mr-2"
                    :class="{ 'text-[#7a4a2f]': mobileServiceOpen }"
                    >&rsaquo;</span
                  >
                  <span :class="{ 'text-[#7a4a2f]': mobileServiceOpen }"
                    >DỊCH VỤ</span
                  >
                  <span class="ml-auto">
                    <span
                      v-if="mobileServiceOpen"
                      class="bg-gray-100 rounded-full px-2 py-0.5 text-[#7a4a2f]"
                      >-</span
                    >
                    <span
                      v-else
                      class="bg-gray-100 rounded-full px-2 py-0.5 text-[#7a4a2f]"
                      >+</span
                    >
                  </span>
                </button>
                <ul
                  v-if="mobileServiceOpen"
                  class="ml-8 border-l border-[#e5e7eb]"
                >
                  <li>
                    <router-link
                      to="/services/spa"
                      class="block px-5 py-2 hover:text-[#7a4a2f]"
                      @click="openMobileMenu = false"
                      >Spa Thư Giãn</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/services/expert"
                      class="block px-5 py-2 hover:text-[#7a4a2f]"
                      @click="openMobileMenu = false"
                      >Chuyên Gia</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      to="/services/booking"
                      class="block px-5 py-2 hover:text-[#7a4a2f]"
                      @click="openMobileMenu = false"
                      >Đặt Hẹn</router-link
                    >
                  </li>
                </ul>
              </li>
              <li>
                <router-link
                  to="/products"
                  class="flex items-center px-5 py-3 hover:text-[#7a4a2f]"
                  @click="openMobileMenu = false"
                >
                  <span class="mr-2">&rsaquo;</span> SẢN PHẨM
                </router-link>
              </li>
              <li>
                <router-link
                  to="/news"
                  class="flex items-center px-5 py-3 hover:text-[#7a4a2f]"
                  @click="openMobileMenu = false"
                >
                  <span class="mr-2">&rsaquo;</span> TIN TỨC
                </router-link>
              </li>
              <li>
                <router-link
                  to="/contact"
                  class="flex items-center px-5 py-3 hover:text-[#7a4a2f]"
                  @click="openMobileMenu = false"
                >
                  <span class="mr-2">&rsaquo;</span> LIÊN HỆ
                </router-link>
              </li>
              <li v-if="isAdmin">
                <router-link
                  to="/admin/users"
                  class="flex items-center px-5 py-3 hover:text-[#7a4a2f]"
                  @click="openMobileMenu = false"
                >
                  <span class="mr-2">&rsaquo;</span> QUẢN LÝ NGƯỜI DÙNG
                </router-link>
              </li>
            </ul>
          </nav>
        </div>
        <div class="flex-1" @click="openMobileMenu = false"></div>
      </div>
    </transition>

    <!-- Search Bar -->
    <transition name="zoom-fade">
      <div
        v-if="openSearch"
        class="fixed inset-0 z-[100] bg-black bg-opacity-90 flex items-center justify-center"
      >
        <form class="relative w-full max-w-3xl px-4" @submit.prevent>
          <input
            type="text"
            placeholder="Tìm kiếm..."
            class="w-full py-6 pl-8 pr-16 rounded-full border-2 border-[#a05c3c] bg-transparent text-white text-2xl outline-none"
            autofocus
          />
          <button
            type="submit"
            class="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-[#a05c3c] transition-transform duration-300 hover:scale-125 cursor-pointer"
          >
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" stroke-width="2" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" stroke-width="2" />
            </svg>
          </button>
          <button
            type="button"
            class="absolute cursor-pointer right-0 top-0 -translate-y-1/2 translate-x-1/2 bg-white text-[#a05c3c] hover:bg-[#a05c3c] hover:text-white rounded-full w-14 h-14 flex items-center justify-center"
            @click="closeSearchForm"
          >
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </form>
      </div>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { useRouter } from "vue-router";
import mitt from "mitt";

const openMobileMenu = ref(false);
const mobileServiceOpen = ref(false);
const openSearch = ref(false);
function toggleServiceMenu() {
  mobileServiceOpen.value = !mobileServiceOpen.value;
}
function openSearchForm() {
  openSearch.value = true;
}
function closeSearchForm() {
  openSearch.value = false;
}

// Tạo EventBus
const emitter = mitt();

// State
const cartItems = ref(JSON.parse(localStorage.getItem("cart") || "[]"));
const token = ref(localStorage.getItem("token") || null); // Khai báo token
const userName = ref("");
const isAdmin = ref(false);

// Tải giỏ hàng từ localStorage
const cart = ref([]);
const loadCart = () => {
  const savedCart = localStorage.getItem("cart");
  cart.value = savedCart ? JSON.parse(savedCart) : [];
};

// Tính số lượng sản phẩm trong giỏ hàng
const cartItemCount = computed(() => {
  return cart.value.reduce((total, item) => total + (item.quantity || 0), 0);
});

// Điều hướng đến trang giỏ hàng
const router = useRouter();
const goToCart = () => {
  router.push("/cart");
};

// Lắng nghe sự kiện cart-updated
const handleCartUpdate = () => {
  loadCart();
};

// Lắng nghe sự kiện storage cho các tab khác
const handleStorageChange = (event) => {
  if (event.key === "cart") {
    loadCart();
  }
  if (event.key === "token") {
    token.value = localStorage.getItem("token") || null;
    fetchUserProfile();
  }
};

// Đăng ký sự kiện khi component được mount
onMounted(() => {
  loadCart();
  emitter.on("cart-updated", handleCartUpdate);
  window.addEventListener("storage", handleStorageChange);
  fetchUserProfile();
});

// Dọn dẹp sự kiện khi component bị unmount
onUnmounted(() => {
  emitter.off("cart-updated", handleCartUpdate);
  window.removeEventListener("storage", handleStorageChange);
});

// Kiểm tra trạng thái đăng nhập
const isLoggedIn = computed(() => !!token.value);

// Lấy thông tin người dùng khi đã đăng nhập
const fetchUserProfile = async () => {
  if (!token.value) {
    isAdmin.value = false;
    return;
  }
  try {
    const response = await fetch("http://localhost:3000/users/profile", {
      headers: { Authorization: `Bearer ${token.value}` },
    });
    const data = await response.json();
    if (response.ok) {
      userName.value = data.fullName || data.username;
      isAdmin.value = data.role === "admin"; // Giả định API trả về role
    } else {
      console.error("Lấy thông tin người dùng thất bại:", data.message);
      logout();
    }
  } catch (err) {
    console.error("Lỗi kết nối:", err);
    logout();
  }
};

// Đăng xuất
const logout = () => {
  localStorage.removeItem("token");
  token.value = null;
  userName.value = "";
  isAdmin.value = false;
  router.push("/login");
};

// Hiển thị profile (tạm thời chỉ log thông tin)
const showProfile = () => {
  console.log("Profile:", { name: userName.value, token: token.value });
  // Có thể thêm logic chuyển đến trang profile nếu cần
};

// Lắng nghe sự kiện cập nhật giỏ hàng và người dùng
emitter.on("cart-updated", () => {
  cartItems.value = JSON.parse(localStorage.getItem("cart") || "[]");
});
emitter.on("user-updated", (name) => {
  userName.value = name;
  fetchUserProfile(); // Cập nhật lại role khi user thay đổi
});

// Theo dõi thay đổi token từ localStorage
watch(
  () => localStorage.getItem("token"),
  (newToken) => {
    token.value = newToken || null;
    if (!newToken) {
      userName.value = "";
      isAdmin.value = false;
    } else {
      fetchUserProfile();
    }
  }
);
</script>

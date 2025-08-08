<template>
  <Header />
  <Breadcumb />
  <div class="container px-4 mx-auto lg:px-8 md:px-6 pt-[120px] pb-[90px]">
    <!-- Khi giỏ hàng rỗng -->
    <div v-if="cartItems.length === 0" class="text-center">
      <h2 class="text-[30px] font-bold text-[#121f38] mb-4">
        Giỏ hàng của bạn đang trống
      </h2>
      <p class="mb-6 text-gray-600">Hãy thêm sản phẩm để tiếp tục mua sắm!</p>
      <button
        class="relative inline-block px-[23px] py-[10px] text-sm font-bold uppercase tracking-wider text-white bg-[#a05c3c] border-none rounded-none overflow-hidden text-center group cursor-pointer"
        @click="continueShopping"
      >
        TIẾP TỤC MUA HÀNG
        <span
          class="absolute bottom-0 left-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
        ></span>
        <span
          class="absolute top-0 right-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
        ></span>
      </button>
    </div>

    <!-- Khi giỏ hàng có sản phẩm -->
    <div v-else>
      <!-- Cart Table -->
      <table class="w-full text-left border border-[#e7e5e5]">
        <thead>
          <tr class="text-white bg-amber-700">
            <th class="p-2">Hình ảnh</th>
            <th class="p-2">Tên sản phẩm</th>
            <th class="p-2">Đơn giá</th>
            <th class="p-2">Số lượng</th>
            <th class="p-2">Tổng</th>
            <th class="p-2">Xóa</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in cartItems"
            :key="item.id"
            class="border-b border-[#e7e5e5]"
          >
            <td class="p-2">
              <img
                :src="item.image || 'https://via.placeholder.com/64'"
                alt="Product"
                class="object-cover w-16 h-16 p-4 border border-[#e7e5e5]"
              />
            </td>
            <td
              class="p-2 font-bold text-[#9a563a] hover:text-[#131e35] cursor-pointer"
            >
              {{ item.name }}
            </td>
            <td class="p-2">{{ item.price }}đ</td>
            <td class="p-2">
              <div class="flex items-center gap-2">
                <button
                  @click="decreaseQuantity(index)"
                  class="flex items-center justify-center w-10 h-10 border border-[#e7e5e5] bg-transparent hover:bg-[#9a563a] hover:text-white duration-300 cursor-pointer"
                >
                  -
                </button>
                <input
                  type="number"
                  v-model.number="item.quantity"
                  class="w-16 h-10 text-center border"
                  :max="maxQuantities[item.id] || 100"
                  min="1"
                  @input="updateQuantity(index)"
                />
                <button
                  @click="increaseQuantity(index)"
                  class="flex items-center justify-center w-10 h-10 border border-[#e7e5e5] bg-transparent hover:bg-[#9a563a] hover:text-white duration-300 cursor-pointer"
                >
                  +
                </button>
              </div>
            </td>
            <td class="p-2">{{ item.price * item.quantity }}đ</td>
            <td class="p-2">
              <button
                @click="removeItem(index)"
                class="text-red-500 hover:text-red-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="cursor-pointer size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <!-- Actions and Total -->
      <div
        class="flex flex-col gap-4 md:flex-row border border-[#e7e5e5] mb-[45px] pb-[15px]"
      >
        <div class="w-full md:w-1/2"></div>
        <div class="w-full text-right md:w-1/2">
          <div class="me-[20px]">
            <button
              class="relative mt-[24px] z-[1] inline-block px-[23px] py-[10px] text-sm font-bold uppercase tracking-wider text-white bg-[#a05c3c] border-none rounded-none overflow-hidden text-center group cursor-pointer"
              @click="continueShopping"
            >
              TIẾP TỤC MUA HÀNG
              <span
                class="absolute bottom-0 left-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
              ></span>
              <span
                class="absolute top-0 right-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
              ></span>
            </button>
          </div>
        </div>
      </div>

      <!-- Total Summary -->
      <div class="grid grid-cols-1 border md:grid-cols-2">
        <div></div>
        <div class="me-[10px]">
          <div>
            <p class="text-[30px] font-bold text-[#121f38]">Tổng giỏ hàng</p>
            <table class="w-full border rounded-lg shadow">
              <thead>
                <tr>
                  <th class="p-2 text-xl font-semibold text-left text-gray-800">
                    Tổng giỏ hàng
                  </th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr class="border">
                  <td class="p-2 bg-gray-100 w-[45%]">Tổng phụ</td>
                  <td class="p-2 font-semibold">{{ total }}đ</td>
                </tr>
                <tr class="border">
                  <td class="p-2 bg-gray-100 w-[45%]">Tổng đơn hàng</td>
                  <td class="p-2 font-semibold">{{ total }}đ</td>
                </tr>
              </tbody>
            </table>
          </div>
          <button
            class="relative mt-[24px] z-[1] inline-block px-[23px] py-[10px] text-sm font-bold uppercase tracking-wider text-white bg-[#a05c3c] border-none rounded-none overflow-hidden text-center group cursor-pointer"
            @click="proceedToCheckout"
          >
            TIẾN HÀNH THANH TOÁN
            <span
              class="absolute bottom-0 left-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
            ></span>
            <span
              class="absolute top-0 right-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
            ></span>
          </button>
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Breadcumb from "./Breadcumb.vue";
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";

// Khởi tạo giỏ hàng từ localStorage
const cartItems = ref([]);
const maxQuantities = ref({}); // Lưu số lượng tối đa từ API cho mỗi sản phẩm
const isLoading = ref(false);

const loadCart = async () => {
  const savedCart = localStorage.getItem("cart");
  if (savedCart) {
    cartItems.value = JSON.parse(savedCart);
    await fetchMaxQuantities(); // Lấy số lượng tối đa từ API
  }
};

// Lấy số lượng tối đa từ API
const fetchMaxQuantities = async () => {
  isLoading.value = true;
  try {
    const promises = cartItems.value.map(async (item) => {
      const response = await fetch(`https://miniassignmentxepo-production.up.railway.app/products/${item.id}`);
      if (response.ok) {
        const data = await response.json();
        maxQuantities.value[item.id] = data.quantity || 100; // Mặc định 100 nếu không có
      } else {
        maxQuantities.value[item.id] = 100; // Mặc định nếu API lỗi
      }
    });
    await Promise.all(promises);
  } catch (error) {
    console.error("Lỗi khi lấy số lượng tối đa:", error);
  } finally {
    isLoading.value = false;
  }
};

// Lưu giỏ hàng vào localStorage
const saveCart = () => {
  localStorage.setItem("cart", JSON.stringify(cartItems.value));
};

// Tăng số lượng sản phẩm
const increaseQuantity = (index) => {
  const item = cartItems.value[index];
  const maxQty = maxQuantities.value[item.id] || 100;
  if (item.quantity < maxQty) {
    item.quantity += 1;
    saveCart();
  } else {
    alert(`Số lượng tối đa trong kho là ${maxQty} cho ${item.name}!`);
  }
};

// Giảm số lượng sản phẩm
const decreaseQuantity = (index) => {
  const item = cartItems.value[index];
  if (item.quantity > 1) {
    item.quantity -= 1;
    saveCart();
  }
};

// Cập nhật số lượng từ input
const updateQuantity = (index) => {
  const item = cartItems.value[index];
  const maxQty = maxQuantities.value[item.id] || 100;
  if (item.quantity < 1) item.quantity = 1;
  if (item.quantity > maxQty) {
    item.quantity = maxQty;
    alert(`Số lượng tối đa trong kho là ${maxQty} cho ${item.name}!`);
  }
  saveCart();
};

// Xóa sản phẩm khỏi giỏ hàng
const removeItem = (index) => {
  cartItems.value.splice(index, 1);
  saveCart();
};

// Tính tổng tiền giỏ hàng
const total = computed(() => {
  return cartItems.value.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
});

// Điều hướng khi nhấn nút
const router = useRouter();
const continueShopping = () => {
  router.push("/products");
};
const proceedToCheckout = () => {
  if (cartItems.value.length > 0) {
    router.push("/checkout");
  } else {
    alert("Giỏ hàng trống! Vui lòng thêm sản phẩm trước khi thanh toán.");
  }
};

// Tải giỏ hàng khi component được mount
onMounted(() => {
  loadCart();
});
</script>

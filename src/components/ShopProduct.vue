<template>
  <div class="container px-4 mx-auto lg:px-8 md:px-6 pt-[120px] pb-[90px]">
    <div class="flex justify-between items-center mb-[40px]">
      <span
        >Đang hiển thị {{ (currentPage - 1) * itemsPerPage + 1 }}–{{
          Math.min(currentPage * itemsPerPage, products.length)
        }}
        trong tổng số {{ products.length }} kết quả</span
      >
      <div>
        <form class="max-w-sm mx-auto">
          <select
            v-model="sortOption"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:none block w-full ps-[20px] py-3 pe-[30px]"
            @change="handleSort"
          >
            <option value="default">Mặc định</option>
            <option value="price">Giá</option>
          </select>
        </form>
      </div>
    </div>
    <div v-if="isLoading" class="text-center">
      <p>Đang tải sản phẩm...</p>
    </div>
    <div v-else-if="products.length === 0" class="text-center">
      <p>Không có sản phẩm nào!</p>
    </div>
    <div v-else class="grid grid-cols-1 gap-6 lg:grid-cols-4 md:grid-cols-2">
      <div v-for="(item, idx) in paginatedProducts" :key="item.id">
        <div class="relative group">
          <div class="bg-[#f1f1f1] overflow-hidden">
            <img
              :src="item.image || 'https://via.placeholder.com/280'"
              alt=""
              class="object-cover w-full h-[280px] transition-transform duration-300 rounded-full group-hover:scale-105"
            />
            <div
              class="absolute top-[10px] right-[10px] flex flex-col gap-2 items-center justify-center transition-all duration-300 bg-opacity-0 group-hover:bg-opacity-50"
            >
              <a
                href="#"
                class="transition-opacity duration-300 opacity-0 cart-icon group-hover:opacity-100"
                @click.prevent="addToCart(item)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-10 h-10 text-[#9a563a] bg-[#fff] hover:text-[#fff] hover:bg-[#9a563a] transition-all duration-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
              </a>
              <a
                href="#"
                class="transition-opacity duration-300 opacity-0 cart-icon group-hover:opacity-100"
                @click.prevent="goToProductDetail(item.id)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-10 h-10 text-[#9a563a] bg-[#fff] hover:text-[#fff] hover:bg-[#9a563a] transition-all duration-300"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="flex justify-between mt-[23px]">
            <p class="text-lg font-semibold text-center">
              {{ item.name }}
            </p>
            <p class="text-[#a05c3c]">{{ item.price }}đ</p>
          </div>
          <span class="text-[#555555] text-[14px]">{{
            item.category || "Không có danh mục"
          }}</span>
        </div>
      </div>
    </div>
    <nav aria-label="Page navigation example" class="mt-[50px]">
      <ul class="flex items-center h-8 -space-x-px text-sm">
        <li v-for="page in totalPages" :key="page">
          <a
            href="#"
            class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            :class="{ 'bg-gray-200': currentPage === page }"
            @click.prevent="changePage(page)"
          >
            {{ page }}
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
            @click.prevent="changePage(currentPage + 1)"
          >
            <span class="sr-only">Next</span>
            <svg
              class="w-2.5 h-2.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import mitt from "mitt";

// Tạo EventBus
const emitter = mitt();

// State
const products = ref([]);
const currentPage = ref(1);
const itemsPerPage = 12;
const sortOption = ref("default");
const isLoading = ref(false);

// Lấy dữ liệu từ API
const fetchProducts = async () => {
  isLoading.value = true;
  try {
    const response = await fetch("http://localhost:3000/products");
    if (!response.ok) throw new Error("Lỗi khi lấy sản phẩm từ API");
    const data = await response.json();
    products.value = data.map((item) => ({
      id: item.id, // Chuyển đổi id từ string sang number
      name: item.name,
      description: item.description,
      price: item.price,
      image: item.image,
      category: item.category || "Không có danh mục", // Xử lý category là string, mặc định nếu rỗng
      quantity: item.quantity,
      sku: item.sku,
    }));
  } catch (error) {
    console.error("Lỗi khi lấy sản phẩm:", error);
    products.value = [];
  } finally {
    isLoading.value = false;
  }
};

// Tính tổng số trang
const totalPages = computed(() =>
  Math.ceil(products.value.length / itemsPerPage)
);

// Sản phẩm phân trang
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  let sortedProducts = [...products.value];

  if (sortOption.value === "price") {
    sortedProducts.sort((a, b) => a.price - b.price);
  }

  return sortedProducts.slice(start, end);
});

// Thay đổi trang
const changePage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
  }
};

// Xử lý sắp xếp
const handleSort = () => {
  currentPage.value = 1; // Reset về trang đầu khi thay đổi sắp xếp
};

// Thêm vào giỏ hàng
const addToCart = (item) => {
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const existingItem = cart.find((cartItem) => cartItem.id === item.id); // Chuyển đổi id khi so sánh
  if (existingItem) {
    if (existingItem.quantity < item.quantity) {
      existingItem.quantity += 1;
    } else {
      alert(`Số lượng tối đa trong kho là ${item.quantity} cho ${item.name}!`);
      return;
    }
  } else {
    cart.push({ ...item, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  emitter.emit("cart-updated"); // Phát sự kiện để cập nhật header
  alert(`${item.name} đã được thêm vào giỏ hàng!`);
};

// Điều hướng đến trang chi tiết sản phẩm
const router = useRouter();
const goToProductDetail = (id) => {
  router.push({ name: "ProductDetail", params: { id: id.toString() } }); // Chuyển id thành string cho route
};

// Tải sản phẩm khi component được mount
onMounted(() => {
  fetchProducts();
});
</script>

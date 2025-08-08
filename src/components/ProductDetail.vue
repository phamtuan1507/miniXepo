<template>
  <div>
    <Header />
    <Breadcumb />
    <div
      class="container flex flex-col gap-6 p-4 mx-auto md:flex-row pt-[120px] pb-[90px]"
    >
      <!-- Product Image Gallery -->
      <div class="w-full md:w-1/2">
        <div v-if="isLoading" class="text-center">
          <p>Đang tải sản phẩm...</p>
        </div>
        <div v-else-if="!productData" class="text-center">
          <p>Sản phẩm không tồn tại!</p>
        </div>
        <div v-else class="w-full overflow-hidden h-96">
          <img
            :src="mainImage"
            alt="Main Product Image"
            class="object-cover w-full h-full transition-opacity duration-500"
          />
        </div>
        <div v-if="productData" class="flex gap-2 mt-4">
          <div
            v-for="(image, index) in productImages"
            :key="index"
            class="w-20 h-20 overflow-hidden cursor-pointer"
          >
            <img
              :src="image"
              @click="mainImage = image"
              alt="Thumbnail"
              class="object-cover w-full h-full transition-opacity bg-[#f1f1f1] duration-300 hover:opacity-75"
            />
          </div>
        </div>
      </div>

      <!-- Product Details -->
      <div v-if="productData" class="w-full md:w-1/2">
        <h1 class="text-2xl font-bold">{{ productName }}</h1>
        <p class="mt-1 text-gray-500">Hiện tại không có đánh giá nào</p>
        <p class="mt-2 text-xl font-semibold">{{ price }}đ</p>
        <p class="mt-4 text-gray-600">{{ description }}</p>
        <div class="mt-4">
          <p><strong>SKU:</strong> {{ sku }}</p>
          <p><strong>Danh Mục:</strong> {{ category }}</p>
        </div>
        <div class="flex gap-2">
          <div class="flex items-center gap-4 mt-4">
            <label for="quantity" class="font-semibold">Số Lượng:</label>
            <div class="flex items-center border rounded">
              <button @click="updateQuantity('decrease')" class="px-3 py-1">
                -
              </button>
              <input
                type="number"
                v-model="quantity"
                id="quantity"
                class="w-16 text-center"
                :max="maxQuantity"
                min="1"
              />
              <button @click="updateQuantity('increase')" class="px-3 py-1">
                +
              </button>
            </div>
          </div>
          <button
            class="relative z-[1] inline-block px-[23px] py-[10px] text-sm font-bold uppercase tracking-wider text-white bg-[#a05c3c] border-none rounded-none overflow-hidden text-center group cursor-pointer"
            @click="addToCart"
          >
            Thêm vào giỏ hàng
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
    <div v-if="productData" class="container p-4 mx-auto">
      <!-- Nav Tabs -->
      <div class="border-b">
        <nav class="flex gap-4">
          <button
            @click="activeTab = 'description'"
            :class="{
              'border-b-2 border-amber-700 text-amber-700':
                activeTab === 'description',
              'text-gray-500': activeTab !== 'description',
            }"
            class="px-4 py-2"
          >
            Mô tả
          </button>
          <button
            @click="activeTab = 'review'"
            :class="{
              'border-b-2 border-amber-700 text-amber-700':
                activeTab === 'review',
              'text-gray-500': activeTab !== 'review',
            }"
            class="px-4 py-2"
          >
            Đánh giá
          </button>
        </nav>
      </div>

      <!-- Tab Content -->
      <div class="mt-4">
        <div v-if="activeTab === 'description'" class="p-4 bg-gray-100">
          <p>{{ description }}</p>
          <ul class="mt-2 ml-5 list-disc">
            <li>Beauty products dolor consectetur adipisicing</li>
            <li>Given they’re tree abundantly male our</li>
          </ul>
        </div>
        <div v-if="activeTab === 'review'" class="p-4 bg-gray-100">
          <p class="bg-[#ffffff] p-[14px_25px]">
            Hiện tại không có đánh giá nào.
          </p>
          <h2 class="mt-4 text-xl font-semibold">
            BE THE FIRST TO REVIEW "{{ productName }}"
          </h2>
          <p class="mt-2 text-gray-600">
            Email của bạn sẽ không được hiển thị công khai. Các trường bắt buộc
            được đánh dấu *
          </p>
          <div class="mt-4">
            <label class="block">Đánh giá của bạn</label>
            <div class="flex items-center gap-1">
              <span>★</span><span>★</span><span>★</span><span>★</span
              ><span>★</span>
            </div>
            <textarea
              class="w-full p-2 mt-2 border rounded"
              rows="4"
              placeholder="Viết đánh giá của bạn"
            ></textarea>
          </div>
          <div class="mt-4">
            <label class="block">Họ tên *</label>
            <input type="text" class="w-full p-2 border rounded" />
          </div>
          <div class="mt-4">
            <label class="block">Email *</label>
            <input type="email" class="w-full p-2 border rounded" />
          </div>
          <div class="mt-4">
            <label class="flex items-center">
              <input type="checkbox" class="mr-2" />
              Lưu tên, email và trang web của tôi trong trình duyệt này cho lần
              bình luận tiếp theo.
            </label>
          </div>
          <button
            class="relative mt-[24px] z-[1] inline-block px-[23px] py-[10px] text-sm font-bold uppercase tracking-wider text-white bg-[#a05c3c] border-none rounded-none overflow-hidden text-center group cursor-pointer"
          >
            ĐĂNG ĐÁNH GIÁ
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
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import mitt from "mitt";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Breadcumb from "./Breadcumb.vue";

// Tạo EventBus
const emitter = mitt();

// State
const productData = ref(null);
const isLoading = ref(false);
const activeTab = ref("description");
const mainImage = ref("");
const productImages = ref([]);
const productName = ref("");
const price = ref(0);
const description = ref("");
const sku = ref("");
const category = ref("");
const quantity = ref(1);
const maxQuantity = ref(0); // Thêm biến để lưu số lượng tối đa

// Lấy ID sản phẩm từ route
const route = useRoute();
const router = useRouter();
const productId = route.params.id;

// Lấy dữ liệu sản phẩm từ API
const fetchProduct = async () => {
  isLoading.value = true;
  try {
    const response = await fetch(`https://miniassignmentxepo-production.up.railway.app/products/${productId}`);
    if (!response.ok) throw new Error("Sản phẩm không tồn tại");
    const data = await response.json();
    productData.value = data;
    mainImage.value = data.image || "https://via.placeholder.com/400";
    productImages.value = [data.image || "https://via.placeholder.com/400"]; // API chỉ có 1 ảnh
    productName.value = data.name || "Unknown Product";
    price.value = data.price || 0;
    description.value = data.description || "Không có mô tả";
    sku.value = data.sku || "N/A";
    category.value = data.category || "Không có danh mục";
    maxQuantity.value = data.quantity || 1; // Lấy số lượng tối đa từ API
    quantity.value = 1;
  } catch (error) {
    console.error("Lỗi khi lấy sản phẩm:", error);
    productData.value = null;
  } finally {
    isLoading.value = false;
  }
};

// Cập nhật số lượng
const updateQuantity = (action) => {
  if (action === "decrease" && quantity.value > 1) quantity.value--;
  if (action === "increase" && quantity.value < maxQuantity.value)
    quantity.value++;
};

// Thêm vào giỏ hàng
const addToCart = () => {
  if (!productData.value || quantity.value > maxQuantity.value) return;
  const cart = JSON.parse(localStorage.getItem("cart") || "[]");
  const existingItem = cart.find(
    (cartItem) => cartItem.id === Number(productData.value.id)
  );
  if (existingItem) {
    if (existingItem.quantity + quantity.value <= maxQuantity.value) {
      existingItem.quantity += quantity.value;
    } else {
      alert(
        `Số lượng tối đa trong kho là ${maxQuantity.value} cho ${productName.value}!`
      );
      return;
    }
  } else {
    cart.push({
      id: Number(productData.value.id),
      name: productData.value.name,
      price: productData.value.price,
      image: productData.value.image,
      quantity: quantity.value,
    });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  emitter.emit("cart-updated"); // Phát sự kiện để cập nhật header
  alert(`${productName.value} đã được thêm vào giỏ hàng!`);
};

// Tải sản phẩm khi component được mount
onMounted(() => {
  fetchProduct();
});
</script>

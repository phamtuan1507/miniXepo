<template>
  <Header />
  <Breadcumb />
  <div class="container mx-auto px-4 pt-[120px] pb-[90px]">
    <!-- Order Confirmation -->
    <div v-if="order" class="mb-4 text-gray-600">
      Cảm ơn. Đơn đặt hàng của bạn đã được nhận.
    </div>
    <div v-else class="mb-4 text-gray-600">
      Không tìm thấy thông tin đơn hàng.
    </div>
    <ul v-if="order" class="mb-4 text-gray-600 list-disc list-inside">
      <li>Mã đơn hàng: {{ order.id }}</li>
      <li>Ngày: {{ order.date }}</li>
      <li>Email: {{ order.email }}</li>
      <li>Tổng: {{ order.total }}đ</li>
      <li>Phương thức thanh toán: {{ order.paymentMethod }}</li>
    </ul>
    <p
      v-if="order && order.paymentMethod === 'Thanh toán khi nhận hàng'"
      class="mb-4 text-sm text-gray-600"
    >
      Thanh toán bằng tiền mặt khi nhận hàng.
    </p>

    <!-- Order Details -->
    <h2 v-if="order" class="mb-4 text-2xl font-bold">Chi tiết đặt hàng</h2>
    <table
      v-if="order"
      class="w-full text-left border-collapse border border-[#e7e5e5]"
    >
      <thead>
        <tr>
          <th class="p-2">Sản phẩm</th>
          <th class="p-2 text-right">Tổng</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in order.items" :key="item.name" class="border-b">
          <td class="p-2">{{ item.name }} x {{ item.quantity }}</td>
          <td class="p-2 text-right">{{ item.total }}đ</td>
        </tr>
        <tr class="border-b">
          <td class="p-2">Tổng:</td>
          <td class="p-2 text-right">{{ order.total }}đ</td>
        </tr>
        <tr v-if="order.notes" class="border-b">
          <td class="p-2">Ghi chú:</td>
          <td class="p-2 text-right">{{ order.notes }}</td>
        </tr>
        <tr class="border-b">
          <td class="p-2">Phương thức thanh toán:</td>
          <td class="p-2 text-right">{{ order.paymentMethod }}</td>
        </tr>
        <tr class="border-b">
          <td class="p-2">Tổng:</td>
          <td class="p-2 text-right">{{ order.total }}đ</td>
        </tr>
      </tbody>
    </table>

    <!-- Billing Address -->
    <h2 v-if="order" class="mt-8 mb-4 text-2xl font-bold">
      Địa chỉ thanh toán
    </h2>
    <table
      v-if="order"
      class="w-full text-left border-collapse border border-[#e7e5e5]"
    >
      <tbody>
        <tr class="border-b">
          <td class="p-2">{{ order.billing.name }}</td>
          <td class="p-2"></td>
        </tr>
        <tr v-if="order.billing.company" class="border-b">
          <td class="p-2">{{ order.billing.company }}</td>
          <td class="p-2"></td>
        </tr>
        <tr class="border-b">
          <td class="p-2">{{ order.billing.address1 }}</td>
          <td class="p-2"></td>
        </tr>
        <tr v-if="order.billing.address2" class="border-b">
          <td class="p-2">{{ order.billing.address2 }}</td>
          <td class="p-2"></td>
        </tr>
        <tr class="border-b">
          <td class="p-2">{{ order.billing.city }}</td>
          <td class="p-2"></td>
        </tr>
        <tr v-if="order.billing.postalCode" class="border-b">
          <td class="p-2">Mã bưu điện: {{ order.billing.postalCode }}</td>
          <td class="p-2"></td>
        </tr>
        <tr v-if="order.billing.country" class="border-b">
          <td class="p-2">Quốc gia: {{ order.billing.country }}</td>
          <td class="p-2"></td>
        </tr>
        <tr class="border-b">
          <td class="p-2">{{ order.billing.phone }}</td>
          <td class="p-2"></td>
        </tr>
        <tr class="border-b">
          <td class="p-2">{{ order.billing.email }}</td>
          <td class="p-2"></td>
        </tr>
      </tbody>
    </table>
  </div>
  <Footer />
</template>

<script setup>
import { ref, onMounted } from "vue";
import mitt from "mitt";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Breadcumb from "./Breadcumb.vue";

// Tạo EventBus
const emitter = mitt();

// Lấy thông tin đơn hàng từ localStorage
const order = ref(JSON.parse(localStorage.getItem("lastOrder") || null));

// Tải dữ liệu khi component được mount
onMounted(() => {
  if (!order.value) {
    console.warn("Không tìm thấy đơn hàng trong localStorage.");
  } else {
    // Đảm bảo giỏ hàng đã được xóa (đã xử lý trong Checkout.vue)
    emitter.emit("cart-updated"); // Phát sự kiện để cập nhật header
  }
});
</script>

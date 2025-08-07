<template>
  <Header />
  <Breadcumb />
  <div class="container px-4 mx-auto lg:px-8 md:px-6 pt-[120px] pb-[90px]">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
      <div>
        <h2 class="font-normal text-[30px] text-[#121f38]">
          Chi tiết thanh toán
        </h2>
        <form class="space-y-4" @submit.prevent="placeOrder">
          <!-- Họ và Tên -->
          <div class="flex flex-col gap-4 md:flex-row">
            <div class="w-full md:w-1/2">
              <input
                type="text"
                v-model="form.ho"
                placeholder="Họ"
                class="w-full p-2 border border-[#e7e5e5] rounded"
                required
              />
            </div>
            <div class="w-full md:w-1/2">
              <input
                type="text"
                v-model="form.ten"
                placeholder="Tên"
                class="w-full p-2 border border-[#e7e5e5] rounded"
                required
              />
            </div>
          </div>

          <!-- Tên công ty (nếu có) -->
          <div>
            <input
              type="text"
              v-model="form.tenCongTy"
              placeholder="Tên công ty (nếu có)"
              class="w-full p-2 border border-[#e7e5e5] rounded"
            />
          </div>

          <!-- Số điện thoại -->
          <div>
            <input
              type="tel"
              v-model="form.soDienThoai"
              placeholder="Số điện thoại"
              class="w-full p-2 border border-[#e7e5e5] rounded"
              required
            />
          </div>

          <!-- Địa chỉ email -->
          <div>
            <input
              type="email"
              v-model="form.diaChiEmail"
              placeholder="Địa chỉ email"
              class="w-full p-2 border border-[#e7e5e5] rounded"
              required
            />
          </div>

          <!-- Quốc gia -->
          <div>
            <select
              v-model="form.quocGia"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:none block w-full ps-[20px] py-3 pe-[30px]"
              required
            >
              <option value="Vietnam">Việt Nam</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </div>
          <div>
            <input
              type="text"
              v-model="form.diaChi"
              placeholder="Số nhà và tên đường"
              class="w-full p-2 border border-[#e7e5e5] rounded"
              required
            />
          </div>
          <div>
            <input
              type="text"
              v-model="form.apartment"
              placeholder="Apartment, suite, unit, etc. (optional)"
              class="w-full p-2 border border-[#e7e5e5] rounded"
            />
          </div>
          <div class="flex flex-col gap-4 md:flex-row">
            <div class="w-full md:w-1/2">
              <input
                type="text"
                v-model="form.tax"
                placeholder="Mã bưu điện"
                class="w-full p-2 border border-[#e7e5e5] rounded"
                required
              />
            </div>
            <div class="w-full md:w-1/2">
              <input
                type="text"
                v-model="form.taxAdress"
                placeholder="Thị Trấn/ Thành Phố"
                class="w-full p-2 border border-[#e7e5e5] rounded"
                required
              />
            </div>
          </div>
          <div class="flex items-center mb-4">
            <input
              id="default-checkbox"
              type="checkbox"
              v-model="form.createAccount"
              class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            />
            <label
              for="default-checkbox"
              class="text-sm font-medium text-gray-900 ms-2 dark:text-gray-300"
              >Tạo tài khoản?</label
            >
          </div>
        </form>
      </div>
      <form class="space-y-4" @submit.prevent="placeOrder">
        <div>
          <h2 class="font-normal text-[30px] text-[#121f38]">Thông tin thêm</h2>
          <p>Ghi chú đặt hàng (Không bắt buộc)</p>
          <textarea
            v-model="form.orderNotes"
            class="w-full p-2 border border-gray-300 rounded-md"
            rows="5"
            placeholder="Ghi chú về đơn hàng của bạn, ví dụ: ghi chú đặc biệt để giao hàng."
          ></textarea>
        </div>
      </form>
    </div>

    <form class="space-y-4" @submit.prevent="placeOrder">
      <!-- Cart Table -->
      <table class="w-full mt-8 text-left border-collapse">
        <thead>
          <tr class="text-white bg-amber-700">
            <th class="p-2">Hình ảnh</th>
            <th class="p-2">Tên sản phẩm</th>
            <th class="p-2">Giá</th>
            <th class="p-2">Số lượng</th>
            <th class="p-2">Tổng</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartItems" :key="item.id" class="border-b">
            <td class="p-2">
              <img
                :src="item.image || 'https://via.placeholder.com/64'"
                alt="Product"
                class="object-cover w-16 h-16"
              />
            </td>
            <td class="p-2">{{ item.name }}</td>
            <td class="p-2">{{ item.price }}đ</td>
            <td class="p-2">{{ item.quantity }}</td>
            <td class="p-2">{{ item.quantity * item.price }}đ</td>
          </tr>
        </tbody>
      </table>

      <!-- Summary Table -->
      <table class="w-full mt-4 border-collapse">
        <tbody>
          <tr class="border-b">
            <td class="p-2">Tổng phụ</td>
            <td class="p-2 text-right">{{ subTotal }}đ</td>
          </tr>
          <tr class="border-b">
            <td class="p-2">Tổng</td>
            <td class="p-2 text-right">{{ total }}đ</td>
          </tr>
        </tbody>
      </table>

      <!-- Payment Methods -->
      <div class="p-4">
        <label class="flex items-center gap-2">
          <input
            type="checkbox"
            v-model="paymentMethod"
            value="bank"
            class="form-checkbox text-amber-700"
          />
          <span>Chuyển khoản ngân hàng</span>
        </label>
        <p
          v-if="paymentMethod.includes('bank')"
          class="mt-2 text-sm text-gray-600"
        >
          Thực hiện thanh toán trực tiếp vào tài khoản ngân hàng của chúng tôi.
          Vui lòng sử dụng ID đơn hàng của bạn làm tài liệu tham khảo thanh
          toán. Đơn đặt hàng của bạn sẽ không được vận chuyển cho đến khi tiền
          đã được xóa trong tài khoản của chúng tôi.
        </p>
        <label class="flex items-center gap-2 mt-4">
          <input
            type="checkbox"
            v-model="paymentMethod"
            value="cash"
            class="form-checkbox text-amber-700"
          />
          <span>Thanh toán khi nhận hàng</span>
        </label>
        <p
          v-if="paymentMethod.includes('cash')"
          class="mt-2 text-sm text-gray-600"
        >
          Thanh toán bằng tiền mặt khi nhận hàng.
        </p>
      </div>

      <!-- Notes and Privacy -->
      <div class="mt-4 text-sm text-gray-600">
        Dữ liệu cá nhân của bạn sẽ được sử dụng để xử lý đơn hàng, hỗ trợ trải
        nghiệm của bạn trên trang web này và cho các mục đích khác được mô tả
        trong
        <span class="text-amber-700">Chính sách bảo mật</span>.
      </div>

      <!-- Submit Button -->
      <button
        type="submit"
        class="relative mt-[24px] z-[1] inline-block px-[23px] py-[10px] text-sm font-bold uppercase tracking-wider text-white bg-[#a05c3c] border-none rounded-none overflow-hidden text-center group cursor-pointer"
      >
        ĐẶT HÀNG
        <span
          class="absolute bottom-0 left-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
        ></span>
        <span
          class="absolute top-0 right-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
        ></span>
      </button>
    </form>
  </div>
  <Footer />
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";
import mitt from "mitt";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Breadcumb from "./Breadcumb.vue";

// Tạo EventBus
const emitter = mitt();

// Router
const router = useRouter();

// Form dữ liệu thanh toán
const form = ref({
  ho: "",
  ten: "",
  tenCongTy: "",
  soDienThoai: "",
  diaChiEmail: "",
  quocGia: "Vietnam",
  diaChi: "",
  apartment: "",
  tax: "",
  taxAdress: "",
  orderNotes: "",
  createAccount: false,
});

// Phương thức thanh toán
const paymentMethod = ref([]);

// Lấy giỏ hàng từ localStorage
const cartItems = ref(JSON.parse(localStorage.getItem("cart") || "[]"));

// Token và trạng thái đăng nhập
const token = ref(localStorage.getItem("token") || null);

// Tính tổng phụ
const subTotal = computed(() => {
  return cartItems.value.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
});

// Tính tổng cộng
const total = computed(() => subTotal.value);

// Lấy số lượng tối đa từ API
const maxQuantities = ref({});
const fetchMaxQuantities = async () => {
  try {
    const promises = cartItems.value.map(async (item) => {
      const response = await fetch(`http://localhost:3000/products/${item.id}`);
      if (response.ok) {
        const data = await response.json();
        maxQuantities.value[item.id] = data.quantity || 100;
      } else {
        maxQuantities.value[item.id] = 100;
      }
    });
    await Promise.all(promises);
  } catch (error) {
    console.error("Lỗi khi lấy số lượng tối đa:", error);
  }
};

// Lấy thông tin người dùng nếu đã đăng nhập
const fetchUserProfile = async () => {
  if (token.value) {
    try {
      const response = await fetch("http://localhost:3000/users/profile", {
        headers: { Authorization: `Bearer ${token.value}` },
      });
      const data = await response.json();
      if (response.ok) {
        const fullName = data.fullName || data.username || "";
        const [ho, ten] = fullName.split(" ").filter(Boolean) || ["", ""];
        form.value.ho = ho || "";
        form.value.ten = ten || "";
        form.value.diaChiEmail = data.email || "";
        form.value.soDienThoai = data.phone || "";
      } else {
        console.error("Lấy thông tin người dùng thất bại:", data.message);
      }
    } catch (err) {
      console.error("Lỗi kết nối:", err);
    }
  }
};

// Xử lý đặt hàng
const placeOrder = async () => {
  if (cartItems.value.length === 0) {
    alert("Giỏ hàng trống!");
    return;
  }
  if (paymentMethod.value.length === 0) {
    alert("Vui lòng chọn phương thức thanh toán!");
    return;
  }

  for (const item of cartItems.value) {
    const maxQty = maxQuantities.value[item.id] || 100;
    if (item.quantity > maxQty) {
      alert(`Số lượng tối đa trong kho cho ${item.name} là ${maxQty}!`);
      return;
    }
  }

  const order = {
    id: `ORDER-${Math.floor(Math.random() * 10000)}`,
    date: new Date().toLocaleString("en-US", { timeZone: "Asia/Ho_Chi_Minh" }),
    email: form.value.diaChiEmail,
    total: total.value,
    paymentMethod: paymentMethod.value.includes("bank")
      ? "Chuyển khoản ngân hàng"
      : "Thanh toán khi nhận hàng",
    items: cartItems.value.map((item) => ({
      name: item.name,
      quantity: item.quantity,
      total: item.price * item.quantity,
    })),
    billing: {
      name: `${form.value.ho} ${form.value.ten}`,
      company: form.value.tenCongTy || "",
      address1: form.value.diaChi,
      address2: form.value.apartment,
      city: form.value.taxAdress,
      postalCode: form.value.tax,
      phone: form.value.soDienThoai,
      email: form.value.diaChiEmail,
      country: form.value.quocGia,
    },
    notes: form.value.orderNotes,
  };

  localStorage.setItem("lastOrder", JSON.stringify(order));
  localStorage.removeItem("cart");
  cartItems.value = [];
  emitter.emit("cart-updated");

  router.push({ name: "OrderReceived" });
};

// Tải dữ liệu khi component được mount
onMounted(() => {
  fetchMaxQuantities();
  fetchUserProfile();
});
</script>  
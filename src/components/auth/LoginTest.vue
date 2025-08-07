<template>
  <form @submit.prevent="handleLogin">
    <div class="mb-4 form-group">
      <label for="email" class="block text-sm font-medium text-gray-700"
        >Nhập email của bạn</label
      >
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
      <label
        for="password"
        class="block text-sm font-medium text-gray-700"
        >Nhập password của bạn</label
      >
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
    <router-link to="#" class="">
      <button
        class="relative z-[1] w-full inline-block px-[23px] py-[10px] text-sm font-bold uppercase tracking-wider text-white bg-[#a05c3c] border-none rounded-none overflow-hidden text-center group cursor-pointer"
        :disabled="loading"
      >
        Đăng nhập
        <span
          class="absolute bottom-0 left-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
        ></span>
        <span
          class="absolute top-0 right-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
        ></span>
      </button>
    </router-link>
    <p v-if="error" class="mt-2 text-sm text-center text-red-600">{{ error }}</p>
    <p class="mt-4 text-sm text-center text-gray-600 register-link">
      Nếu bạn chưa có tài khoản?
      <a
        href="#"
        @click.prevent="activeTab = 'register'"
        class="text-amber-700 hover:underline"
        >Đăng ký tại đây.</a
      >
    </p>

    <!-- Popup -->
    <div
      v-if="showPopup"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
    >
      <div
        :class="[
          'p-6 rounded-lg shadow-lg text-center transition-all duration-300',
          popupType === 'success' ? 'bg-green-100 border border-green-400 text-green-700' : 'bg-red-100 border border-red-400 text-red-700'
        ]"
      >
        <p class="text-lg font-semibold">{{ popupMessage }}</p>
        <button
          @click="showPopup = false"
          class="px-4 py-2 mt-4 bg-gray-300 rounded hover:bg-gray-400"
        >
          Đóng
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { ref } from 'vue'

const loginForm = ref({
  email: 'nhantran@gmail.com',
  password: 'Doctor!115',
  remember: false
})
const loading = ref(false)
const error = ref(null)
const activeTab = ref('login')
const showPopup = ref(false)
const popupMessage = ref('')
const popupType = ref('success')

const handleLogin = async () => {
  loading.value = true
  error.value = null

  try {
    const response = await fetch('https://affordable-cons-bulletin-ix.trycloudflare.com/account/dangnhap', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: loginForm.value.email,
        password: loginForm.value.password
      })
    })

    const data = await response.json()
    

    if (!response.ok) {
      throw new Error(data.message || 'Đăng nhập thất bại')
    }

    // Success case
    popupType.value = 'success'
    popupMessage.value = 'Đăng nhập thành công!'
    showPopup.value = true
    console.log('Login successful:', data)
    // Example: localStorage.setItem('token', data.token) // Adjust based on API response
    // Example: router.push('/dashboard')

    // Auto-hide popup after 3 seconds
    setTimeout(() => {
      showPopup.value = false
    }, 3000)
  } catch (err) {
    // Failure case
    popupType.value = 'error'
    popupMessage.value = err.message || 'Đăng nhập thất bại'
    showPopup.value = true
    error.value = err.message

    // Auto-hide popup after 3 seconds
    setTimeout(() => {
      showPopup.value = false
    }, 3000)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Additional custom styles if needed */
</style>
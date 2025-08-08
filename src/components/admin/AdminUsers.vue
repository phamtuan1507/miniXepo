<template>
  <div class="container mx-auto pt-[120px] pb-[90px]">
    <h2 class="mb-6 text-2xl font-bold">Quản lý Người Dùng</h2>
    <div class="p-6 bg-white rounded-lg shadow-lg">
      <!-- Search and Filter -->
      <div class="flex items-center justify-between mb-4">
        <input
          v-model="searchQuery"
          placeholder="Tìm kiếm theo tên hoặc email..."
          class="w-full max-w-xs p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#a05c3c] focus:border-transparent"
        />
      </div>

      <!-- Users Table -->
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">ID</th>
              <th class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Tên</th>
              <th class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Email</th>
              <th class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Vai trò</th>
              <th class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">Hành động</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr v-for="user in filteredUsers" :key="user.id" class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">{{ user.id }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ user.fullName || user.username }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ user.email }}</td>
              <td class="px-6 py-4 whitespace-nowrap">{{ user.role || 'user' }}</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <button
                  @click="viewUser(user.id)"
                  class="mr-2 text-indigo-600 hover:text-indigo-900"
                >
                  Xem
                </button>
                <button
                  @click="deleteUser(user.id)"
                  class="text-red-600 hover:text-red-900"
                >
                  Xóa
                </button>
              </td>
            </tr>
            <tr v-if="filteredUsers.length === 0">
              <td colspan="5" class="px-6 py-4 text-center text-gray-500">Không có người dùng nào.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal for User Details -->
    <div v-if="selectedUser" class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div class="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h3 class="mb-4 text-xl font-bold">Chi tiết Người Dùng</h3>
        <p><strong>ID:</strong> {{ selectedUser.id }}</p>
        <p><strong>Tên:</strong> {{ selectedUser.fullName || selectedUser.username }}</p>
        <p><strong>Email:</strong> {{ selectedUser.email }}</p>
        <p><strong>Vai trò:</strong> {{ selectedUser.role || 'user' }}</p>
        <button @click="selectedUser = null" class="mt-4 bg-[#a05c3c] text-white px-4 py-2 rounded hover:bg-[#7a4a2f]">
          Đóng
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const users = ref([]);
const searchQuery = ref('');
const selectedUser = ref(null);
const token = localStorage.getItem('token');

// Fetch users list
const fetchUsers = async () => {
  try {
    const response = await fetch('https://miniassignmentxepo-production.up.railway.app/users', {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    if (response.ok) {
      users.value = data;
    } else {
      console.error('Lỗi khi lấy danh sách người dùng:', data.message);
    }
  } catch (err) {
    console.error('Lỗi kết nối:', err);
  }
};

// Filter users based on search query
const filteredUsers = computed(() => {
  if (!searchQuery.value) return users.value;
  const query = searchQuery.value.toLowerCase();
  return users.value.filter(user => 
    (user.fullName || user.username).toLowerCase().includes(query) ||
    user.email.toLowerCase().includes(query)
  );
});

// View user details
const viewUser = async (userId) => {
  try {
    const response = await fetch(`https://miniassignmentxepo-production.up.railway.app/users/${userId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    if (response.ok) {
      selectedUser.value = data;
    } else {
      console.error('Lỗi khi lấy thông tin người dùng:', data.message);
    }
  } catch (err) {
    console.error('Lỗi kết nối:', err);
  }
};

// Delete user
const deleteUser = async (userId) => {
  if (confirm('Bạn có chắc muốn xóa người dùng này?')) {
    try {
      const response = await fetch(`https://miniassignmentxepo-production.up.railway.app/users/${userId}`, {
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.ok) {
        users.value = users.value.filter(user => user.id !== userId);
        selectedUser.value = null;
      } else {
        const data = await response.json();
        console.error('Lỗi khi xóa người dùng:', data.message);
      }
    } catch (err) {
      console.error('Lỗi kết nối:', err);
    }
  }
};

// Load users on mount
onMounted(() => {
  if (!token) {
    router.push('/login');
  } else {
    fetchUsers();
  }
});
</script>
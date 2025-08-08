<template>
  <div>
    <Header />
    <Breadcumb />
    <div class="container px-4 mx-auto lg:px-8 md:px-6 pt-[120px] pb-[90px]">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
        <div class="col-span-2">
          <div v-if="isLoading" class="text-center">
            <p>Đang tải bài viết...</p>
          </div>
          <div v-else-if="!post" class="text-center">
            <p>Bài viết không tồn tại!</p>
          </div>
          <div v-else>
            <div class="relative group mb-15 pb-9 border-b border-[#e7e5e5] border-solid">
              <span class="absolute right-0 -bottom-[1px] h-[1px] w-[70px] bg-[#9a563a]"></span>
              <div class="bg-[#f1f1f1] overflow-hidden">
                <img
                  :src="post.image"
                  alt=""
                  class="object-cover w-full h-full transition-transform duration-300 rounded-full group-hover:scale-105"
                />
              </div>
              <span
                v-if="post.categoryName"
                class="absolute top-[10px] left-[10px] bg-[#a05c3c] text-white text-xs font-bold px-2 py-1 rounded"
              >
                {{ post.categoryName }}
              </span>
              <div>
                <h1 class="text-[#121f38] text-[40px]">{{ post.title }}</h1>
                <div class="flex items-center gap-2 mb-[20px]">
                  <span class="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                      />
                    </svg>
                    {{ post.author || "Admin" }}
                  </span>
                  <span class="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                      />
                    </svg>
                    {{ formatDate(post.createdAt) }}
                  </span>
                  <span class="flex gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                      />
                    </svg>
                    {{ post.commentCount || 0 }} Bình luận
                  </span>
                </div>
                <div>{{ post.content }}</div>
                <span class="uppercase text-[#555555]">
                  Từ khóa: <span>{{ post.categoryName }}</span>
                </span>
              </div>
            </div>
            <!-- Comment Section -->
            <div class="p-4 bg-gray-100">
              <h2 class="mt-4 text-xl font-semibold">Bình luận</h2>
              <div v-if="comments.length === 0" class="mt-2 text-gray-600">
                Chưa có bình luận nào.
              </div>
              <div v-else class="mt-4 space-y-4">
                <div v-for="comment in comments" :key="comment.id" class="pb-2 border-b">
                  <p class="font-semibold">{{ comment.userId }}</p>
                  <p class="text-gray-600">{{ comment.content }}</p>
                  <p class="text-sm text-gray-500">{{ formatDate(comment.createdAt) }}</p>
                  <button
                    v-if="isLoggedIn"
                    @click="deleteComment(comment.id)"
                    class="mt-2 text-red-500 hover:text-red-700"
                  >
                    Xóa
                  </button>
                </div>
              </div>
              <h2 class="mt-4 text-xl font-semibold">Để lại bình luận</h2>
              <p class="mt-2 text-gray-600">
                Địa chỉ email của bạn sẽ không được công khai. Các trường bắt buộc được đánh dấu *
              </p>
              <form @submit.prevent="submitComment" class="mt-4">
                <div>
                  <textarea
                    v-model="commentForm.content"
                    class="w-full p-2 mt-2 border rounded"
                    rows="4"
                    placeholder="Viết bình luận của bạn *"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="relative mt-[24px] z-[1] inline-block px-[23px] py-[10px] text-sm font-bold uppercase tracking-wider text-white bg-[#a05c3c] border-none rounded-none overflow-hidden text-center group cursor-pointer"
                  :disabled="!isLoggedIn"
                >
                  ĐĂNG BÌNH LUẬN
                  <span
                    class="absolute bottom-0 left-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
                  ></span>
                  <span
                    class="absolute top-0 right-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
                  ></span>
                </button>
              </form>
            </div>
          </div>
        </div>
        <div class="col-span-1">
          <div class="relative">
            <h2
              class="relative uppercase text-[22px] leading-[1em] border-b border-[#e7e5e5] border-solid pb-[21px] mt-[-0.2em] mb-[30px]"
            >
              TÌM KIẾM
            </h2>
            <span
              class="absolute left-0 bottom-[-1px] h-[2px] w-[30px] bg-[#9a563a]"
            ></span>
          </div>
          <form class="flex mb-[52px]" @submit.prevent="searchPosts">
            <input
              v-model="searchQuery"
              type="text"
              placeholder="Tìm kiếm bài viết..."
              class="px-4 py-2 bg-transparent border border-[#3a4250] text-black focus:outline-none"
            />
            <button
              type="submit"
              class="relative z-[1] inline-block px-[23px] py-[10px] text-sm font-bold uppercase tracking-wider text-white bg-[#a05c3c] border-none rounded-none overflow-hidden text-center group cursor-pointer"
            >
              Tìm kiếm
              <span
                class="absolute bottom-0 left-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
              ></span>
              <span
                class="absolute top-0 right-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full"
              ></span>
            </button>
          </form>
          <div class="relative">
            <h2
              class="relative uppercase text-[22px] leading-[1em] border-b border-[#e7e5e5] border-solid pb-[21px] mt-[-0.2em] mb-[30px]"
            >
              TIN TỨC MỚI NHẤT
            </h2>
            <span
              class="absolute left-0 bottom-[-1px] h-[2px] w-[30px] bg-[#9a563a]"
            ></span>
          </div>
          <div v-if="isLoading" class="text-center">
            <p>Đang tải tin tức mới...</p>
          </div>
          <div v-else v-for="item in recentPosts" :key="item.id" class="cursor-pointer">
            <div class="flex items-center gap-3 my-3 overflow-hidden cursor-pointer" @click="goToPostDetail(item.id)">
              <img
                :src="item.image"
                alt=""
                class="object-cover w-[60px] h-[60px] transition-transform duration-300 hover:scale-105"
              />
              <div class="pb-[10px] border-b border-solid border-[#e7e5e5]">
                <div class="text-[#121f38] hover:text-[#a05c3c]">
                  {{ item.title }}
                </div>
                <div class="flex items-center gap-2 text-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    class="w-[10px] h-[10px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                  {{ formatDate(item.createdAt) }}
                </div>
              </div>
            </div>
          </div>
          <div class="relative mt-[52px]">
            <h2
              class="relative uppercase text-[22px] leading-[1em] border-b border-[#e7e5e5] border-solid pb-[21px] mt-[-0.2em] mb-[30px]"
            >
              CHUYÊN MỤC
            </h2>
            <span
              class="absolute left-0 bottom-[-1px] h-[2px] w-[30px] bg-[#9a563a]"
            ></span>
          </div>
          <div
            v-for="category in BlogCategory"
            :key="category.cate"
            class="flex items-center justify-between text-[#888888] hover:text-[#9a563a] border-b border-dashed border-[#e7e5e5] py-[20px] cursor-pointer"
            @click="filterByCategory(category.cate)"
          >
            <div class="flex items-center hover:text-[#9a563a]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                class="w-[8px] h-[16px] text-[#9a563a] font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              {{ category.cate }}
            </div>
            <p>({{ category.no }})</p>
          </div>
          <div class="relative mt-[52px]">
            <h2
              class="relative uppercase text-[22px] leading-[1em] border-b border-[#e7e5e5] border-solid pb-[21px] mt-[-0.2em] mb-[30px]"
            >
              Từ khóa phổ biến
            </h2>
            <span
              class="absolute left-0 bottom-[-1px] h-[2px] w-[30px] bg-[#9a563a]"
            ></span>
          </div>
          <div class="inline-block space-x-2 space-y-2">
            <button
              v-for="tag in popularTags"
              :key="tag"
              class="p-[11px_22px] border border-[#e7e5e5] bg-transparent uppercase hover:bg-[#9a563a] hover:text-white cursor-pointer duration-300"
              @click="filterByTag(tag)"
            >
              {{ tag }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Breadcumb from "./Breadcumb.vue";
import axios from "axios";
import Swal from "sweetalert2";

// State
const post = ref(null);
const isLoading = ref(false);
const searchQuery = ref("");
const selectedCategory = ref(null);
const comments = ref([]);
const commentForm = ref({ content: "", userId: "688b2443f779d5366198dd17" }); // Giả định userId
const token = ref(localStorage.getItem("token") || null);
const isLoggedIn = ref(!!token.value);
const BlogCategory = ref([]);
const popularTags = ["Clothes", "Electronics", "Furniture", "Shoes", "Miscellaneous"];
const recentPosts = ref([]);

// Router và Route
const route = useRoute();
const router = useRouter();
const postId = route.params.id;

// Fetch post from API
const fetchPost = async () => {
  isLoading.value = true;
  try {
    const response = await axios.get(`https://miniassignmentxepo-production.up.railway.app/blogs/${postId}`);
    post.value = {
      ...response.data,
      commentCount: 0, // Initialize commentCount
    };
    // Fetch comments to calculate commentCount
    await fetchComments();
    post.value.commentCount = comments.value.length; // Set commentCount based on fetched comments
  } catch (error) {
    console.error("Lỗi khi lấy bài viết:", error);
    post.value = null;
  } finally {
    isLoading.value = false;
  }
};

// Fetch comments from API
const fetchComments = async () => {
  try {
    const response = await axios.get(`https://miniassignmentxepo-production.up.railway.app/comments/${postId}`);
    comments.value = response.data;
  } catch (error) {
    console.error("Lỗi khi lấy bình luận:", error);
    comments.value = [];
  }
};

// Submit comment
const submitComment = async () => {
  if (!commentForm.value.content) {
    Swal.fire({
      icon: "warning",
      title: "Lỗi",
      text: "Vui lòng điền nội dung bình luận!",
    });
    return;
  }
  if (!isLoggedIn.value) {
    Swal.fire({
      icon: "warning",
      title: "Vui lòng đăng nhập",
      text: "Bạn cần đăng nhập để có thể bình luận!",
      confirmButtonText: "Đăng nhập",
      showCancelButton: true,
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        router.push("/login");
      }
    });
    return;
  }
  try {
    await axios.post(
      "https://miniassignmentxepo-production.up.railway.app/comments",
      {
        content: commentForm.value.content,
        blogId: postId,
        userId: commentForm.value.userId,
      },
      { headers: { Authorization: `Bearer ${token.value}` } }
    );
    commentForm.value.content = "";
    await fetchComments();
    if (post.value) post.value.commentCount = comments.value.length;
  } catch (error) {
    console.error("Lỗi khi gửi bình luận:", error);
    Swal.fire({
      icon: "error",
      title: "Lỗi",
      text: "Không thể gửi bình luận. Vui lòng thử lại!",
    });
  }
};

// Delete comment
const deleteComment = async (commentId) => {
  const result = await Swal.fire({
    icon: "question",
    title: "Xác nhận",
    text: "Bạn có chắc chắn muốn xóa bình luận này?",
    showCancelButton: true,
    confirmButtonText: "Xóa",
    cancelButtonText: "Hủy",
  });
  if (result.isConfirmed) {
    try {
      await axios.delete(`https://miniassignmentxepo-production.up.railway.app/comments/${commentId}`, {
        headers: { Authorization: `Bearer ${token.value}` },
      });
      await fetchComments();
      if (post.value) post.value.commentCount = comments.value.length;
      Swal.fire({
        icon: "success",
        title: "Thành công",
        text: "Bình luận đã được xóa!",
      });
    } catch (error) {
      console.error("Lỗi khi xóa bình luận:", error);
      Swal.fire({
        icon: "error",
        title: "Lỗi",
        text: "Không thể xóa bình luận. Vui lòng thử lại!",
      });
    }
  }
};

// Fetch recent posts
const fetchRecentPosts = async () => {
  try {
    const response = await axios.get("https://miniassignmentxepo-production.up.railway.app/blogs", {
      params: { limit: 5, sort: "createdAt" },
    });
    recentPosts.value = await Promise.all(
      response.data.map(async (item) => ({
        id: item.id,
        title: item.title,
        image: item.image,
        createdAt: item.createdAt,
        commentCount: await fetchCommentCount(item.id),
      }))
    );
    const allResponse = await axios.get("https://miniassignmentxepo-production.up.railway.app/blogs");
    BlogCategory.value = [
      { cate: "Allgemein", no: allResponse.data.length },
      ...[...new Set(allResponse.data.map((item) => item.categoryName))].map((cate) => ({
        cate,
        no: allResponse.data.filter((item) => item.categoryName === cate).length,
      })),
    ];
  } catch (error) {
    console.error("Lỗi khi lấy tin tức mới:", error);
    recentPosts.value = [];
  }
};

// Fetch comment count for a single post
const fetchCommentCount = async (postId) => {
  try {
    const response = await axios.get(`https://miniassignmentxepo-production.up.railway.app/comments/${postId}`);
    return response.data.length || 0;
  } catch (error) {
    console.error(`Lỗi khi lấy số lượng bình luận cho bài viết ${postId}:`, error);
    return 0;
  }
};

// Format date
const formatDate = (dateStr) => {
  return new Date(dateStr).toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
};

// Search posts
const searchPosts = () => {
  router.push({ name: "Blog", query: { search: searchQuery.value } });
};

// Filter by category
const filterByCategory = (category) => {
  router.push({ name: "Blog", query: { category: category === "Allgemein" ? "" : category } });
};

// Filter by tag
const filterByTag = (tag) => {
  router.push({ name: "Blog", query: { category: tag } });
};

// Navigate to post detail
const goToPostDetail = (id) => {
  router.push({ name: "BlogDetail", params: { id } });
};

// Initialize data
onMounted(async () => {
  await Promise.all([fetchPost(), fetchRecentPosts()]);
  searchQuery.value = route.query.search || "";
  selectedCategory.value = route.query.category || null;
});
</script>
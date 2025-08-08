<template>
  <Header />
  <Breadcumb />
  <div class="container px-4 py-10 mx-auto sm:px-6 lg:px-8">
    <div class="mb-10 text-center">
      <h3 class="text-[#a05c3c] uppercase text-[18px] font-medium mb-2">
        Chi tiết chuyên gia
      </h3>
      <h2 v-if="expert" class="text-[#121f38] text-[36px] font-bold">
        {{ expert.name }}
      </h2>
    </div>

    <div v-if="expert" class="flex flex-col gap-10 lg:flex-row">
      <!-- Image and Basic Info -->
      <div class="lg:w-1/3">
        <img
          :src="expert.image || '/default-team.png'"
          alt="Expert Image"
          class="w-full h-[400px] object-cover rounded-lg mb-6"
        />
        <div class="text-center">
          <p class="text-[#9a563a] uppercase text-[16px] font-semibold mb-2">
            {{ expert.deg }}
          </p>
        </div>
      </div>

      <!-- Description and Skills -->
      <div class="lg:w-2/3">
        <div
          class="prose prose-lg text-[#121f38] mb-8"
          v-html="expert.description"
        ></div>

        <div class="mb-8">
          <h3 class="text-[#121f38] text-[24px] font-semibold mb-4">KỸ NĂNG</h3>
          <div class="space-y-4">
            <div v-for="(skill, key) in expert.skills" :key="key">
              <div class="flex justify-between mb-1 text-sm">
                <span class="capitalize">{{ skillName(key) }}</span>
                <span>{{ skill }}%</span>
              </div>
              <div class="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  class="bg-[#a05c3c] h-2.5 rounded-full"
                  :style="{ width: `${skill}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="text-[#121f38] mb-8">
          <p>
            {{ expert.name }} đáng tin cậy và luôn đảm bảo rằng mọi liệu pháp và
            sản phẩm được sử dụng cho khách hàng đều đạt tiêu chuẩn cao nhất về
            chất lượng và an toàn. Cô luôn tuân thủ các quy trình vệ sinh nghiêm
            ngặt và đảm bảo môi trường làm việc và dụng cụ sạch sẽ để đảm bảo sự
            an toàn tuyệt đối cho khách hàng.
          </p>
        </div>

        <div class="text-[#121f38]">
          <h3 class="text-[24px] font-semibold mb-4">Đội ngũ chuyên nghiệp</h3>
          <p>
            Với sự am hiểu sâu sắc và kỹ năng chuyên môn vượt trội,
            {{ expert.name }}
            là một phần quan trọng trong đội ngũ chăm sóc da của chúng tôi.
            Chúng tôi tin tưởng rằng với sự chăm sóc và tận tụy của cô, khách
            hàng sẽ có trải nghiệm tuyệt vời và tìm thấy sự cân bằng và sắc đẹp
            cho làn da của mình.
          </p>
        </div>
      </div>
    </div>

    <div v-else class="text-center text-[#121f38] py-10">
      <p>Đang tải thông tin chuyên gia...</p>
    </div>

    <div class="mt-10 text-center">
      <router-link
        to="/experts"
        class="text-[#a05c3c] hover:text-[#7a4a2f] text-[16px] font-medium underline"
      >
        Quay lại danh sách
      </router-link>
    </div>
  </div>
  <Footer />
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Breadcumb from "@/components/Breadcumb.vue";
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const expert = ref(null);

const fetchExpert = async () => {
  try {
    const response = await fetch(
      `https://miniassignmentxepo-production.up.railway.app/experts/${route.params.id}`
    );
    if (response.ok) {
      const data = await response.json();
      expert.value = {
        ...data,
        description: data.description || "Không có mô tả.",
        skills: data.skills || {
          chamSocDa: 94,
          lamMong: 90,
          massage: 88,
          chamSocToc: 85,
          spaCoThe: 85,
          kyThuatTruyenThong: 86,
        },
      };
    } else {
      console.error("Lỗi khi lấy thông tin chuyên gia:", response.statusText);
      expert.value = {
        name: "Không tìm thấy chuyên gia",
        deg: "",
        description: "",
        skills: {},
      };
    }
  } catch (error) {
    console.error("Lỗi kết nối:", error);
    expert.value = {
      name: "Lỗi tải dữ liệu",
      deg: "",
      description: "",
      skills: {},
    };
  }
};

const skillName = (key) => {
  const skillsMap = {
    chamSocDa: "Chăm sóc da",
    lamMong: "Làm móng",
    massage: "Massage",
    chamSocToc: "Chăm sóc tóc",
    spaCoThe: "Spa chăm sóc cơ thể",
    kyThuatTruyenThong: "Kỹ thuật truyền thống",
  };
  return skillsMap[key] || key;
};

onMounted(() => {
  fetchExpert();
});
</script>

<style scoped>
.prose :where(p):not(:where([class~="not-prose"] *)) {
  margin: 0;
}
</style>

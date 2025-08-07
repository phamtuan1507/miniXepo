import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const teamList = ref([]);
const fetchExperts = async () => {
    try {
        const response = await fetch("http://localhost:3000/experts");
        if (response.ok) {
            teamList.value = await response.json();
        }
        else {
            console.error("Lỗi khi lấy danh sách chuyên gia:", response.status);
        }
    }
    catch (error) {
        console.error("Lỗi kết nối:", error);
    }
};
onMounted(() => {
    fetchExperts();
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=TeamList.vue.js.map
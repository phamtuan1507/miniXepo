import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { ref, onMounted } from "vue";
import Button from "./Button.vue";
const services = [
    {
        image: "/dichvu1.jpg",
    },
    {
        image: "/dichvu2.jpg",
    },
    {
        image: "/dichvu3.jpg",
    },
    {
        image: "/dichvu4.jpg",
    },
    {
        image: "/dichvu1.jpg",
    },
    {
        image: "/dichvu2.jpg",
    },
];
const text = ref("how make your makeup last all day".split(""));
const rotation = ref(0);
const getCharStyle = (index) => {
    const angle = index * (360 / text.value.length) + rotation.value;
    const radius = 80; // Adjust this value to control the radius of the circle
    return {
        transform: `translate(${radius * Math.cos((angle * Math.PI) / 180)}px, ${radius * Math.sin((angle * Math.PI) / 180)}px) rotate(${-angle}deg)`,
    };
};
onMounted(() => {
    const animateText = () => {
        rotation.value += 1;
        requestAnimationFrame(animateText);
    };
    animateText();
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
//# sourceMappingURL=Service.vue.js.map
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Breadcumb from "./Breadcumb.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
// State
const spaItems = ref([]);
const isLoading = ref(false);
// Router
const router = useRouter();
// Dữ liệu tĩnh cho Swiper (detailsService và partners)
const detailsService = [
    {
        image: "/fe1.png",
        text: "Sử dụng ánh sáng LED tiên tiến để kích thích sản xuất collagen, làm mờ nếp nhăn, giảm mụn và làm sáng da.",
        name: "Điều trị ánh sáng LED hiện đại",
    },
    {
        image: "/fe2.png",
        text: "Sử dụng tinh dầu thảo dược tự nhiên để làm dịu, làm sạch và cung cấp dưỡng chất cho da và cơ thể.",
        name: "Điều trị bằng tinh dầu thảo dược",
    },
    {
        image: "/fe.png",
        text: "Kết hợp đá nóng và đá lạnh để kích thích tuần hoàn máu, làm săn chắc da và giảm sưng viêm.",
        name: "Điều trị bằng kỹ thuật đá nóng lạnh",
    },
    {
        image: "/fe1.png",
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        name: "Roger Scott",
    },
    {
        image: "/fe2.png",
        text: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
        name: "Roger Scott",
    },
];
const partners = [
    { id: 1, image: "/pn1.png" },
    { id: 2, image: "/pn2.png" },
    { id: 3, image: "/pn3.png" },
    { id: 4, image: "/pn4.png" },
    { id: 5, image: "/pn5.png" },
    { id: 6, image: "/pn1.png" },
    { id: 7, image: "/pn4.png" },
    { id: 8, image: "/pn5.png" },
    { id: 9, image: "/pn1.png" },
];
// Lấy danh sách dịch vụ từ API
const fetchSpaItems = async () => {
    isLoading.value = true;
    try {
        const response = await fetch("https://miniassignmentxepo-production.up.railway.app/service-relax");
        if (!response.ok)
            throw new Error("Lỗi khi lấy danh sách dịch vụ");
        const data = await response.json();
        spaItems.value = data.map((item) => ({
            id: item.id,
            image: item.image || "https://placehold.co/600x400",
            title: item.title,
            category: item.category,
        }));
    }
    catch (error) {
        console.error("Lỗi khi lấy dịch vụ:", error);
        spaItems.value = [];
    }
    finally {
        isLoading.value = false;
    }
};
// Điều hướng đến chi tiết dịch vụ
const goToServiceDetail = (id) => {
    router.push({ name: "ServiceDetails", params: { id } });
};
// Khởi tạo dữ liệu
onMounted(async () => {
    await fetchSpaItems();
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
/** @type {[typeof Header, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Header, new Header({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {[typeof Breadcumb, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(Breadcumb, new Breadcumb({}));
const __VLS_4 = __VLS_3({}, ...__VLS_functionalComponentArgsRest(__VLS_3));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "container px-4 mx-auto py-[80px]" },
});
if (__VLS_ctx.isLoading) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "text-center" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
}
else if (__VLS_ctx.spaItems.length === 0) {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "text-center" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
}
else {
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "grid grid-cols-1 gap-4 md:grid-cols-2" },
    });
    for (const [item, index] of __VLS_getVForSourceType((__VLS_ctx.spaItems))) {
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ onClick: (...[$event]) => {
                    if (!!(__VLS_ctx.isLoading))
                        return;
                    if (!!(__VLS_ctx.spaItems.length === 0))
                        return;
                    __VLS_ctx.goToServiceDetail(item.id);
                } },
            key: (index),
            ...{ class: "relative col-span-1 cursor-pointer" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
            src: (item.image),
            alt: (item.title),
            ...{ class: "object-cover w-full transition-opacity duration-300 ease-in-out h-100" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
            ...{ class: "absolute inset-[13px] z-10 flex flex-col items-center justify-center p-4 text-center bg-white bg-opacity-80 transition-all ease-in-out transform opacity-0 visibility-hidden duration-600 hover:opacity-100 hover:visibility-visible" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
            ...{ class: "text-4xl font-bold" },
        });
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: "text-lg font-semibold" },
        });
        (item.title);
        __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
            ...{ class: "text-sm text-gray-600" },
        });
        (item.category);
    }
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "pt-[45px]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
const __VLS_6 = {}.Swiper;
/** @type {[typeof __VLS_components.Swiper, typeof __VLS_components.Swiper, ]} */ ;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
    slidesPerView: (1),
    spaceBetween: (20),
    loop: (true),
    autoplay: ({ delay: 3000 }),
    breakpoints: ({
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    }),
    ...{ class: "w-full" },
}));
const __VLS_8 = __VLS_7({
    slidesPerView: (1),
    spaceBetween: (20),
    loop: (true),
    autoplay: ({ delay: 3000 }),
    breakpoints: ({
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
    }),
    ...{ class: "w-full" },
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
__VLS_9.slots.default;
for (const [item, idx] of __VLS_getVForSourceType((__VLS_ctx.detailsService))) {
    const __VLS_10 = {}.SwiperSlide;
    /** @type {[typeof __VLS_components.SwiperSlide, typeof __VLS_components.SwiperSlide, ]} */ ;
    // @ts-ignore
    const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({
        key: (idx),
    }));
    const __VLS_12 = __VLS_11({
        key: (idx),
    }, ...__VLS_functionalComponentArgsRest(__VLS_11));
    __VLS_13.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "bg-white z-1 hover:bg-[#a05c3c] hover:text-[#ffffff] text-center shadow-[1.5px_2.598px_14.88px_1.12px_rgba(54,72,89,0.05)] py-6 px-4 transition-colors duration-300 border border-solid border-[rgba(154,86,58,0.25)] outline-1 outline-[#a05c3c] hover:outline-[#ffffff] outline-offset-[-9px] mb-[30px]" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "w-24 h-24 mx-auto flex items-center justify-center rounded-full border border-dashed border-[#a05c3c] hover:border-[#ffffff] p-4 animate-spin-slow bg-[#fde7da] bg-cover bg-center mb-4" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (item.image),
        alt: "",
        ...{ class: "object-cover w-full h-full rounded-full" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "flex justify-center gap-1 text-[#a05c3c] z-10" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "currentColor",
        ...{ class: "w-[14px]" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m4.5 15.75 7.5-7.5 7.5 7.5",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "currentColor",
        ...{ class: "w-[14px]" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m4.5 15.75 7.5-7.5 7.5 7.5",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "currentColor",
        ...{ class: "w-[14px]" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m4.5 15.75 7.5-7.5 7.5 7.5",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: "1.5",
        stroke: "currentColor",
        ...{ class: "w-[14px]" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "m4.5 15.75 7.5-7.5 7.5 7.5",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "text-lg font-semibold" },
    });
    (item.name);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "mb-4" },
    });
    (item.text);
    var __VLS_13;
}
var __VLS_9;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "container px-4 mx-auto py-[80px] bg-[#FDE5D7]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
const __VLS_14 = {}.Swiper;
/** @type {[typeof __VLS_components.Swiper, typeof __VLS_components.Swiper, ]} */ ;
// @ts-ignore
const __VLS_15 = __VLS_asFunctionalComponent(__VLS_14, new __VLS_14({
    slidesPerView: (1),
    spaceBetween: (20),
    loop: (true),
    autoplay: ({ delay: 3000 }),
    breakpoints: ({
        320: { slidesPerView: 2 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 },
    }),
    ...{ class: "w-full" },
}));
const __VLS_16 = __VLS_15({
    slidesPerView: (1),
    spaceBetween: (20),
    loop: (true),
    autoplay: ({ delay: 3000 }),
    breakpoints: ({
        320: { slidesPerView: 2 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 4 },
        1024: { slidesPerView: 6 },
    }),
    ...{ class: "w-full" },
}, ...__VLS_functionalComponentArgsRest(__VLS_15));
__VLS_17.slots.default;
for (const [item, idx] of __VLS_getVForSourceType((__VLS_ctx.partners))) {
    const __VLS_18 = {}.SwiperSlide;
    /** @type {[typeof __VLS_components.SwiperSlide, typeof __VLS_components.SwiperSlide, ]} */ ;
    // @ts-ignore
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({
        key: (idx),
    }));
    const __VLS_20 = __VLS_19({
        key: (idx),
    }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    __VLS_21.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "text-center" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (item.image),
        alt: "",
        ...{ class: "" },
    });
    var __VLS_21;
}
var __VLS_17;
/** @type {[typeof Footer, ]} */ ;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent(Footer, new Footer({}));
const __VLS_23 = __VLS_22({}, ...__VLS_functionalComponentArgsRest(__VLS_22));
/** @type {__VLS_StyleScopedClasses['']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['py-[80px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-1']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-4']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['col-span-1']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-opacity']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['ease-in-out']} */ ;
/** @type {__VLS_StyleScopedClasses['h-100']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['inset-[13px]']} */ ;
/** @type {__VLS_StyleScopedClasses['z-10']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-opacity-80']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['ease-in-out']} */ ;
/** @type {__VLS_StyleScopedClasses['transform']} */ ;
/** @type {__VLS_StyleScopedClasses['opacity-0']} */ ;
/** @type {__VLS_StyleScopedClasses['visibility-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-600']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:opacity-100']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:visibility-visible']} */ ;
/** @type {__VLS_StyleScopedClasses['text-4xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['text-gray-600']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-[45px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-white']} */ ;
/** @type {__VLS_StyleScopedClasses['z-1']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:bg-[#a05c3c]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-[#ffffff]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-[1.5px_2.598px_14.88px_1.12px_rgba(54,72,89,0.05)]']} */ ;
/** @type {__VLS_StyleScopedClasses['py-6']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-colors']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-solid']} */ ;
/** @type {__VLS_StyleScopedClasses['border-[rgba(154,86,58,0.25)]']} */ ;
/** @type {__VLS_StyleScopedClasses['outline-1']} */ ;
/** @type {__VLS_StyleScopedClasses['outline-[#a05c3c]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:outline-[#ffffff]']} */ ;
/** @type {__VLS_StyleScopedClasses['outline-offset-[-9px]']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-[30px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-24']} */ ;
/** @type {__VLS_StyleScopedClasses['h-24']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['border']} */ ;
/** @type {__VLS_StyleScopedClasses['border-dashed']} */ ;
/** @type {__VLS_StyleScopedClasses['border-[#a05c3c]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:border-[#ffffff]']} */ ;
/** @type {__VLS_StyleScopedClasses['p-4']} */ ;
/** @type {__VLS_StyleScopedClasses['animate-spin-slow']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#fde7da]']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-full']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#a05c3c]']} */ ;
/** @type {__VLS_StyleScopedClasses['z-10']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[14px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[14px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[14px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-[14px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['py-[80px]']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#FDE5D7]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Header: Header,
            Footer: Footer,
            Breadcumb: Breadcumb,
            Swiper: Swiper,
            SwiperSlide: SwiperSlide,
            spaItems: spaItems,
            isLoading: isLoading,
            detailsService: detailsService,
            partners: partners,
            goToServiceDetail: goToServiceDetail,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Services.vue.js.map
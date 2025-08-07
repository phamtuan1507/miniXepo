import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
const slides = [
    {
        img: "/banner1.jpg",
        alt: "Banner 1",
        subTitle: "Spa & Beauty Center",
        title: "Chăm sóc toàn diện cơ thể",
        desc: "Với sự kết hợp hoàn hảo giữa yêu thương và chăm sóc, chúng tôi cam kết mang đến cho bạn trải nghiệm spa vượt trội tại thành phố của bạn.",
    },
    {
        img: "/banner2.jpg",
        alt: "Banner 2",
        subTitle: "Spa & Beauty Center",
        title: "Spa thư giãn Và phục hồi",
        desc: "Tất cả những điều bạn cần để tận hưởng một trải nghiệm spa tuyệt vời đều có tại Spa chúng tôi.",
    },
    {
        img: "/banner3.jpg",
        alt: "Banner 3",
        subTitle: "Spa & Beauty Center",
        title: "Liệu pháp spa chuyên nghiệp",
        desc: "Chúng tôi mong muốn mang đến cho bạn trải nghiệm tuyệt vời nhất, nơi mà bạn có thể thư giãn, phục hồi và tận hưởng cuộc sống toàn diện nhất.",
    },
];
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "container w-full mx-auto" },
});
const __VLS_0 = {}.swiper;
/** @type {[typeof __VLS_components.Swiper, typeof __VLS_components.swiper, typeof __VLS_components.Swiper, typeof __VLS_components.swiper, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    slidesPerView: (1),
    loop: (true),
    autoplay: ({ delay: 4000 }),
    pagination: ({ clickable: true }),
    ...{ class: "h-[400px] md:h-[600px] rounded-lg" },
}));
const __VLS_2 = __VLS_1({
    slidesPerView: (1),
    loop: (true),
    autoplay: ({ delay: 4000 }),
    pagination: ({ clickable: true }),
    ...{ class: "h-[400px] md:h-[600px] rounded-lg" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
__VLS_3.slots.default;
for (const [slide, idx] of __VLS_getVForSourceType((__VLS_ctx.slides))) {
    const __VLS_4 = {}.SwiperSlide;
    /** @type {[typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, typeof __VLS_components.SwiperSlide, typeof __VLS_components.swiperSlide, ]} */ ;
    // @ts-ignore
    const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({
        key: (idx),
        ...{ class: "relative" },
    }));
    const __VLS_6 = __VLS_5({
        key: (idx),
        ...{ class: "relative" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_5));
    __VLS_7.slots.default;
    __VLS_asFunctionalElement(__VLS_intrinsicElements.img)({
        src: (slide.img),
        alt: (slide.alt),
        ...{ class: "object-cover w-full h-full" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "absolute top-0 left-0 z-10 flex flex-col justify-center h-full pl-16 md:pl-32" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
        ...{ class: "text-lg md:text-xl font-medium mb-2 text-[#1a2233]" },
    });
    (slide.subTitle);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
        ...{ class: "text-3xl md:text-5xl font-bold text-[#1a2233] mb-4 leading-tight" },
    });
    (slide.title);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
        ...{ class: "max-w-lg text-base md:text-lg text-[#1a2233] mb-6" },
    });
    (slide.desc);
    __VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
        ...{ class: "relative z-[1] flex items-center pe-[10px] pb-[10px] pt-[10px] ps-[25px] text-sm font-bold uppercase tracking-wider text-[#a05c3c] hover:text-[#fff] bg-[#ffffff] border-none rounded-none overflow-hidden text-center group cursor-pointer" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "bg-[#a05c3c] p-[10px] ms-[15px]" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: "{1.5}",
        stroke: "currentColor",
        ...{ class: "size-6 text-[#fff]" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3",
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "absolute bottom-0 left-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full" },
    });
    __VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
        ...{ class: "absolute top-0 right-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full" },
    });
    var __VLS_7;
}
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "swiper-pagination" },
});
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[400px]']} */ ;
/** @type {__VLS_StyleScopedClasses['md:h-[600px]']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['object-cover']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['left-0']} */ ;
/** @type {__VLS_StyleScopedClasses['z-10']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-col']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['pl-16']} */ ;
/** @type {__VLS_StyleScopedClasses['md:pl-32']} */ ;
/** @type {__VLS_StyleScopedClasses['text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#1a2233]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-3xl']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-5xl']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#1a2233]']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-tight']} */ ;
/** @type {__VLS_StyleScopedClasses['max-w-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-base']} */ ;
/** @type {__VLS_StyleScopedClasses['md:text-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#1a2233]']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['z-[1]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['pe-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['ps-[25px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['uppercase']} */ ;
/** @type {__VLS_StyleScopedClasses['tracking-wider']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#a05c3c]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-[#fff]']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#ffffff]']} */ ;
/** @type {__VLS_StyleScopedClasses['border-none']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-none']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#a05c3c]']} */ ;
/** @type {__VLS_StyleScopedClasses['p-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['ms-[15px]']} */ ;
/** @type {__VLS_StyleScopedClasses['size-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#fff]']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['bottom-0']} */ ;
/** @type {__VLS_StyleScopedClasses['left-0']} */ ;
/** @type {__VLS_StyleScopedClasses['w-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['h-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#131e35]']} */ ;
/** @type {__VLS_StyleScopedClasses['z-[-1]']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-400']} */ ;
/** @type {__VLS_StyleScopedClasses['ease-[cubic-bezier(0.77,0,0.18,1)]']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['group-focus:h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['absolute']} */ ;
/** @type {__VLS_StyleScopedClasses['top-0']} */ ;
/** @type {__VLS_StyleScopedClasses['right-0']} */ ;
/** @type {__VLS_StyleScopedClasses['w-1/2']} */ ;
/** @type {__VLS_StyleScopedClasses['h-0']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#131e35]']} */ ;
/** @type {__VLS_StyleScopedClasses['z-[-1]']} */ ;
/** @type {__VLS_StyleScopedClasses['transition-all']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-400']} */ ;
/** @type {__VLS_StyleScopedClasses['ease-[cubic-bezier(0.77,0,0.18,1)]']} */ ;
/** @type {__VLS_StyleScopedClasses['group-hover:h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['group-focus:h-full']} */ ;
/** @type {__VLS_StyleScopedClasses['swiper-pagination']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Swiper: Swiper,
            SwiperSlide: SwiperSlide,
            slides: slides,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Banner.vue.js.map
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import Breadcumb from "./Breadcumb.vue";
import { ref } from "vue";
const contactForm = ref({
    name: "",
    email: "",
    title: "",
    message: "",
});
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {};
let __VLS_components;
let __VLS_directives;
/** @type {[typeof Header, ]} */ ;
// @ts-ignore
const __VLS_0 = __VLS_asFunctionalComponent(Header, new Header({}));
const __VLS_1 = __VLS_0({}, ...__VLS_functionalComponentArgsRest(__VLS_0));
/** @type {[typeof Breadcumb, ]} */ ;
// @ts-ignore
const __VLS_3 = __VLS_asFunctionalComponent(Breadcumb, new Breadcumb({}));
const __VLS_4 = __VLS_3({}, ...__VLS_functionalComponentArgsRest(__VLS_3));
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "container px-4 mx-auto py-[80px] bg-[#FDEBE0] bg-opacity-36" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "grid grid-cols-1 gap-16 md:grid-cols-2" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "mb-[25px] text-[16px] text-[#9a563a] uppercase font-medium tracking-[0.22em] leading-normal -mt-[0.1em] block" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({
    ...{ class: "text-[48px] font-semibold text-[#121f38]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "text-[#9a563a]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "mb-[18px] text-[#555555] text-[16px]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "bg-[#fff] shadow-lg" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({
    action: "https://formsubmit.co/pham12126@gmail.com",
    method: "POST",
    ...{ class: "p-[45px_35px_45px_35px]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "hidden",
    name: "_captcha",
    value: "false",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "hidden",
    name: "_template",
    value: "table",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "hidden",
    name: "_subject",
    value: "Tin nhắn mới từ website!",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "hidden",
    name: "_next",
    value: "https://yourwebsite.com/thank-you",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "mb-[15px]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "text",
    name: "name",
    value: (__VLS_ctx.contactForm.name),
    required: true,
    placeholder: "HỌ TÊN*",
    ...{ class: "bg-[#ecc3a9ff] text-[#6f6c6c] text-[14px] px-[25px] h-[70px] w-full outline-0" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "mb-[15px]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "email",
    name: "email",
    required: true,
    placeholder: "ĐỊA CHỈ EMAIL*",
    ...{ class: "bg-[#ecc3a9ff] text-[#6f6c6c] text-[14px] px-[25px] h-[70px] w-full outline-0" },
});
(__VLS_ctx.contactForm.email);
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "mb-[15px]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.input)({
    type: "text",
    name: "title",
    value: (__VLS_ctx.contactForm.title),
    required: true,
    placeholder: "TIÊU ĐỀ*",
    ...{ class: "bg-[#ecc3a9ff] text-[#6f6c6c] text-[14px] px-[25px] h-[70px] w-full outline-0" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "mb-[15px]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({
    name: "message",
    rows: "10",
    value: (__VLS_ctx.contactForm.message),
    required: true,
    placeholder: "Nội dung",
    ...{ class: "bg-[#ecc3a9ff] pt-[16px] text-[#6f6c6c] text-[14px] px-[25px] w-full outline-0" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({
    type: "submit",
    ...{ class: "relative z-[1] w-full h-[70px] inline-block px-[23px] py-[10px] text-sm font-bold uppercase tracking-wider text-white bg-[#a05c3c] border-none rounded-none overflow-hidden text-center group cursor-pointer" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "absolute bottom-0 left-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "absolute top-0 right-0 w-1/2 h-0 bg-[#131e35] z-[-1] transition-all duration-400 ease-[cubic-bezier(0.77,0,0.18,1)] group-hover:h-full group-focus:h-full" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.iframe, __VLS_intrinsicElements.iframe)({
    src: "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3919.265677806753!2d106.6561165!3d10.7909523!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1753930489420!5m2!1sen!2s",
    width: "100%",
    height: "450",
    ...{ style: {} },
    allowfullscreen: "",
    loading: "lazy",
    referrerpolicy: "no-referrer-when-downgrade",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "py-5 border-b border-[#e9e0db]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "font-medium uppercase text-[14px] tracking-[0.18em] me-[10px]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "py-5 border-b border-[#e9e0db]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({
    ...{ class: "font-medium uppercase text-[14px] tracking-[0.18em] me-[10px]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    ...{ class: "flex items-center gap-3 py-5 cursor-pointer" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: "{1.5}",
    stroke: "currentColor",
    ...{ class: "size-8 text-[#a05c3c]" },
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.path)({
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({
    ...{ class: "text-[36px] text-[#121f38] hover:text-[#a05c3c] duration-300 transittion-all" },
});
/** @type {[typeof Footer, ]} */ ;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(Footer, new Footer({}));
const __VLS_7 = __VLS_6({}, ...__VLS_functionalComponentArgsRest(__VLS_6));
/** @type {__VLS_StyleScopedClasses['container']} */ ;
/** @type {__VLS_StyleScopedClasses['px-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['py-[80px]']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#FDEBE0]']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-opacity-36']} */ ;
/** @type {__VLS_StyleScopedClasses['grid']} */ ;
/** @type {__VLS_StyleScopedClasses['grid-cols-1']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-16']} */ ;
/** @type {__VLS_StyleScopedClasses['md:grid-cols-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-[25px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[16px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#9a563a]']} */ ;
/** @type {__VLS_StyleScopedClasses['uppercase']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['tracking-[0.22em]']} */ ;
/** @type {__VLS_StyleScopedClasses['leading-normal']} */ ;
/** @type {__VLS_StyleScopedClasses['-mt-[0.1em]']} */ ;
/** @type {__VLS_StyleScopedClasses['block']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[48px]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-semibold']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#121f38]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#9a563a]']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-[18px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#555555]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[16px]']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#fff]']} */ ;
/** @type {__VLS_StyleScopedClasses['shadow-lg']} */ ;
/** @type {__VLS_StyleScopedClasses['p-[45px_35px_45px_35px]']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-[15px]']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#ecc3a9ff]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#6f6c6c]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[14px]']} */ ;
/** @type {__VLS_StyleScopedClasses['px-[25px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[70px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['outline-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-[15px]']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#ecc3a9ff]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#6f6c6c]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[14px]']} */ ;
/** @type {__VLS_StyleScopedClasses['px-[25px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[70px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['outline-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-[15px]']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#ecc3a9ff]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#6f6c6c]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[14px]']} */ ;
/** @type {__VLS_StyleScopedClasses['px-[25px]']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[70px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['outline-0']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-[15px]']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#ecc3a9ff]']} */ ;
/** @type {__VLS_StyleScopedClasses['pt-[16px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#6f6c6c]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[14px]']} */ ;
/** @type {__VLS_StyleScopedClasses['px-[25px]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['outline-0']} */ ;
/** @type {__VLS_StyleScopedClasses['relative']} */ ;
/** @type {__VLS_StyleScopedClasses['z-[1]']} */ ;
/** @type {__VLS_StyleScopedClasses['w-full']} */ ;
/** @type {__VLS_StyleScopedClasses['h-[70px]']} */ ;
/** @type {__VLS_StyleScopedClasses['inline-block']} */ ;
/** @type {__VLS_StyleScopedClasses['px-[23px]']} */ ;
/** @type {__VLS_StyleScopedClasses['py-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-sm']} */ ;
/** @type {__VLS_StyleScopedClasses['font-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['uppercase']} */ ;
/** @type {__VLS_StyleScopedClasses['tracking-wider']} */ ;
/** @type {__VLS_StyleScopedClasses['text-white']} */ ;
/** @type {__VLS_StyleScopedClasses['bg-[#a05c3c]']} */ ;
/** @type {__VLS_StyleScopedClasses['border-none']} */ ;
/** @type {__VLS_StyleScopedClasses['rounded-none']} */ ;
/** @type {__VLS_StyleScopedClasses['overflow-hidden']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['group']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
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
/** @type {__VLS_StyleScopedClasses['py-5']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['border-[#e9e0db]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['uppercase']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[14px]']} */ ;
/** @type {__VLS_StyleScopedClasses['tracking-[0.18em]']} */ ;
/** @type {__VLS_StyleScopedClasses['me-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['py-5']} */ ;
/** @type {__VLS_StyleScopedClasses['border-b']} */ ;
/** @type {__VLS_StyleScopedClasses['border-[#e9e0db]']} */ ;
/** @type {__VLS_StyleScopedClasses['font-medium']} */ ;
/** @type {__VLS_StyleScopedClasses['uppercase']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[14px]']} */ ;
/** @type {__VLS_StyleScopedClasses['tracking-[0.18em]']} */ ;
/** @type {__VLS_StyleScopedClasses['me-[10px]']} */ ;
/** @type {__VLS_StyleScopedClasses['flex']} */ ;
/** @type {__VLS_StyleScopedClasses['items-center']} */ ;
/** @type {__VLS_StyleScopedClasses['gap-3']} */ ;
/** @type {__VLS_StyleScopedClasses['py-5']} */ ;
/** @type {__VLS_StyleScopedClasses['cursor-pointer']} */ ;
/** @type {__VLS_StyleScopedClasses['size-8']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#a05c3c]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[36px]']} */ ;
/** @type {__VLS_StyleScopedClasses['text-[#121f38]']} */ ;
/** @type {__VLS_StyleScopedClasses['hover:text-[#a05c3c]']} */ ;
/** @type {__VLS_StyleScopedClasses['duration-300']} */ ;
/** @type {__VLS_StyleScopedClasses['transittion-all']} */ ;
var __VLS_dollars;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            Header: Header,
            Footer: Footer,
            Breadcumb: Breadcumb,
            contactForm: contactForm,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
; /* PartiallyEnd: #4569/main.vue */
//# sourceMappingURL=Contact.vue.js.map
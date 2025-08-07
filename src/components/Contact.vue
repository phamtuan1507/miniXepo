<script setup>
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
</script>

<template>
  <Header />
  <Breadcumb />
  <div class="container px-4 mx-auto py-[80px] bg-[#FDEBE0] bg-opacity-36">
    <div class="grid grid-cols-1 gap-16 md:grid-cols-2">
      <div>
        <p
          class="mb-[25px] text-[16px] text-[#9a563a] uppercase font-medium tracking-[0.22em] leading-normal -mt-[0.1em] block"
        >
          Sẵn sàng lắng nghe
        </p>
        <h2 class="text-[48px] font-semibold text-[#121f38]">
          GIẢI ĐÁP <span class="text-[#9a563a]"> THẮC MẮC</span>
        </h2>
        <p class="mb-[18px] text-[#555555] text-[16px]">
          Hãy sử dụng các thông tin liên lạc dưới đây hoặc điền vào biểu mẫu
          liên hệ để liên hệ với chúng tôi. Chúng tôi cam kết sẽ phản hồi lại
          bạn trong thời gian sớm nhất.
        </p>
        <div class="bg-[#fff] shadow-lg">
          <form
            action="https://formsubmit.co/pham12126@gmail.com"
            method="POST"
            class="p-[45px_35px_45px_35px]"
          >
            <!-- Hidden: ngăn CAPTCHA và redirect -->
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_subject"
              value="Tin nhắn mới từ website!"
            />
            <input
              type="hidden"
              name="_next"
              value="https://yourwebsite.com/thank-you"
            />

            <div class="mb-[15px]">
              <input
                type="text"
                name="name"
                v-model="contactForm.name"
                required
                placeholder="HỌ TÊN*"
                class="bg-[#ecc3a9ff] text-[#6f6c6c] text-[14px] px-[25px] h-[70px] w-full outline-0"
              />
            </div>
            <div class="mb-[15px]">
              <input
                type="email"
                name="email"
                v-model="contactForm.email"
                required
                placeholder="ĐỊA CHỈ EMAIL*"
                class="bg-[#ecc3a9ff] text-[#6f6c6c] text-[14px] px-[25px] h-[70px] w-full outline-0"
              />
            </div>
            <div class="mb-[15px]">
              <input
                type="text"
                name="title"
                v-model="contactForm.title"
                required
                placeholder="TIÊU ĐỀ*"
                class="bg-[#ecc3a9ff] text-[#6f6c6c] text-[14px] px-[25px] h-[70px] w-full outline-0"
              />
            </div>
            <div class="mb-[15px]">
              <textarea
                name="message"
                rows="10"
                v-model="contactForm.message"
                required
                placeholder="Nội dung"
                class="bg-[#ecc3a9ff] pt-[16px] text-[#6f6c6c] text-[14px] px-[25px] w-full outline-0"
              ></textarea>
            </div>
            <button
              type="submit"
              class="relative z-[1] w-full h-[70px] inline-block px-[23px] py-[10px] text-sm font-bold uppercase tracking-wider text-white bg-[#a05c3c] border-none rounded-none overflow-hidden text-center group cursor-pointer"
            >
              LIÊN HỆ
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
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3919.265677806753!2d106.6561165!3d10.7909523!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1753930489420!5m2!1sen!2s"
          width="100%"
          height="450"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div class="py-5 border-b border-[#e9e0db]">
          <p
            class="font-medium uppercase text-[14px] tracking-[0.18em] me-[10px]"
          >
            Địa chỉ :
            <span>1073/23 Cách Mạng Tháng 8, P.7, Q.Tân Bình, TP.HCM</span>
          </p>
        </div>
        <div class="py-5 border-b border-[#e9e0db]">
          <p
            class="font-medium uppercase text-[14px] tracking-[0.18em] me-[10px]"
          >
            Hoạt động :
            <span>09 : 00 - 18 : 00</span>
          </p>
        </div>
        <div class="flex items-center gap-3 py-5 cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            class="size-8 text-[#a05c3c]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M14.25 9.75v-4.5m0 4.5h4.5m-4.5 0 6-6m-3 18c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 0 1 4.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 0 0-.38 1.21 12.035 12.035 0 0 0 7.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 0 1 1.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 0 1-2.25 2.25h-2.25Z"
            />
          </svg>

          <span
            class="text-[36px] text-[#121f38] hover:text-[#a05c3c] duration-300 transittion-all"
            >(+84) 0313-728-397</span
          >
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

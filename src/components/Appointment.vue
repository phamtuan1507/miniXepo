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
  date: "",
  time: "",
});
</script>

<template>
  <Header />
  <Breadcumb />
  <div class="container px-4 mx-auto py-[80px] bg-[#FDEBE0] bg-opacity-36">
    <div class="grid grid-cols-1 gap-16 md:grid-cols-2">
      <div>
        <div class="bg-[#fff] shadow-lg">
          <form @submit.prevent class="p-[45px_35px_45px_35px]">
            <h2 class="text-[48px] font-semibold text-[#121f38]">
              Đặt lịch hẹn
            </h2>
            <p
              class="mb-[25px] text-[16px] text-[#9a563a] uppercase font-medium tracking-[0.22em] leading-normal -mt-[0.1em] block"
            >
              Khuyến mãi 10% khi đặt trước
            </p>
            <div class="mb-[15px]">
              <input
                id="name"
                type="text"
                v-model="contactForm.name"
                required
                autofocus
                autocomplete="name"
                class="bg-[#ecc3a9ff] text-[#6f6c6c] text-[14px] px-[25px] h-[70px] w-full focus:none outline-0"
                placeholder="HỌ TÊN*"
              />
            </div>
            <div class="mb-[15px]">
              <input
                id="email"
                type="email"
                v-model="contactForm.email"
                required
                autofocus
                autocomplete="email"
                class="bg-[#ecc3a9ff] text-[#6f6c6c] text-[14px] px-[25px] h-[70px] w-full focus:none outline-0"
                placeholder="ĐỊA CHỈ EMAIL*"
              />
            </div>
            <div class="mb-[15px]">
              <input
                id="date"
                type="datetime-local"
                v-model="contactForm.date"
                required
                autofocus
                autocomplete="date"
                class="bg-[#ecc3a9ff] text-[#6f6c6c] text-[14px] px-[25px] h-[70px] w-full focus:none outline-0"
                placeholder="TIÊU ĐỀ*"
              />
            </div>
            <div class="mb-10">
              <select
                id="time"
                class="bg-[#ecc3a9ff] text-[#6f6c6c] text-[14px] px-[25px] h-[70px] w-full focus:none outline-0"
              >
                <option selected>Thời gian</option>
                <option value="US">12:00</option>
                <option value="CA">1:00</option>
                <option value="FR">2:00</option>
                <option value="DE">3:00</option>
              </select>
            </div>
            <button
              class="relative z-[1] w-full h-[70px] inline-block px-[23px] py-[10px] text-sm font-bold uppercase tracking-wider text-white bg-[#a05c3c] border-none rounded-none overflow-hidden text-center group cursor-pointer"
            >
              Đặt lịch ngay
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
        <h2 class="text-[40px] text-[#121f38]">
          Nhận tư vấn sức khỏe từ chuyên gia
        </h2>
        <p class="text-[16px] text-[#555]">
          Chúng tôi hiểu rằng cuộc sống hiện đại đầy áp lực và căng thẳng, và
          việc giữ gìn sức khỏe và tinh thần trở nên vô cùng quan trọng. Spa của
          chúng tôi được thiết kế nhằm mang lại không chỉ sự thư giãn mà còn cả
          sự phục hồi và cân bằng cho cơ thể và tâm hồn của bạn. Với môi trường
          yên tĩnh, âm thanh dịu nhẹ và không gian thư giãn, chúng tôi tạo ra
          một bầu không khí lý tưởng để bạn có thể thả lỏng và giải tỏa căng
          thẳng.
        </p>
        <div class="flex gap-4">
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
              class="text-[20px] text-[#121f38] hover:text-[#a05c3c] duration-300 transittion-all"
              >info@themona.global</span
            >
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
              class="text-[20px] text-[#121f38] hover:text-[#a05c3c] duration-300 transittion-all"
              >(+84) 0313-728-397</span
            >
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="container px-4 py-5 mx-auto sm:px-6 lg:px-8 bg-[url(/bg-service.jpg)]"
  >
    <div class="flex flex-col-reverse md:flex-row">
      <div class="w-full md:w-[40%]">
        <div class="flex items-end justify-end h-full">
          <img
            src="/spa.png"
            alt="Service Table"
            class="object-cover w-full h-auto mb-6"
          />
        </div>
      </div>
      <div class="w-full md:w-[60%]">
        <h3 class="text-[#a05c3c] mb-[18px] uppercase">
          Chăm sóc tận tâm, hoàn hảo
        </h3>
        <h2 class="font-bold text-[48px] text-[#121f38]">Dịch vụ chăm sóc</h2>
        <div class="transition-all duration-300 ease-in-out z-1">
          <div class="relative flex flex-col gap-6 mx-auto md:flex-row">
            <div class="w-full md:w-[50%] p-6 bg-white shadow-lg rounded-lg">
              <div>
                <h3
                  class="text-xs normal-case italic leading-[12px] tracking-[2px] text-center"
                >
                  Chăm sóc làn da chống lão hóa
                </h3>
                <h2
                  class="uppercase font-bold text-[24px] text-center py-[8px]"
                >
                  Chăm sóc da mặt
                </h2>
                <div class="flex justify-center pb-[20px]">
                  <img src="/shape3.png" alt="" />
                </div>
                <div class="mb-[10px]">
                  <div
                    class="grid grid-cols-[auto_1fr_auto] items-center gap-3"
                  >
                    <span class="inline-flex whitespace-nowrap"
                      >Sóng siêu âm nạ thảo dược</span
                    >
                    <span
                      aria-hidden="true"
                      class="h-px border-t border-[#000] border-dotted"
                    ></span>
                    <span class="inline-flex whitespace-nowrap text-[#9A563A]">
                      150k/50p
                    </span>
                  </div>
                  <p class="text-[12px] text-[#7a7a7a]">
                    Kỹ thuật sóng siêu âm kết hợp với các thành phần thảo dược
                    tự nhiên
                  </p>
                </div>
                <div class="mb-[10px]">
                  <div
                    class="grid grid-cols-[auto_1fr_auto] items-center gap-3"
                  >
                    <span class="inline-flex whitespace-nowrap"
                      >Sóng RF nạ thảo dược</span
                    >
                    <span
                      aria-hidden="true"
                      class="h-px border-t border-[#000] border-dotted"
                    ></span>
                    <span class="inline-flex whitespace-nowrap text-[#9A563A]">
                      200k/50p
                    </span>
                  </div>
                  <p class="text-[12px] text-[#7a7a7a]">
                    Áp dụng sóng RF cùng với các loại thảo dược
                  </p>
                </div>
                <div class="mb-[10px]">
                  <div
                    class="grid grid-cols-[auto_1fr_auto] items-center gap-3"
                  >
                    <span class="inline-flex whitespace-nowrap"
                      >Tiêu giảm thâm bọng mắt
                    </span>
                    <span
                      aria-hidden="true"
                      class="h-px border-t border-[#000] border-dotted"
                    ></span>
                    <span class="inline-flex whitespace-nowrap text-[#9A563A]">
                      1500k/50p
                    </span>
                  </div>
                  <p class="text-[12px] text-[#7a7a7a]">
                    Phương pháp giảm thâm bọng mắt độc đáo
                  </p>
                </div>
                <div class="mb-[10px]">
                  <div
                    class="grid grid-cols-[auto_1fr_auto] items-center gap-3"
                  >
                    <span class="inline-flex whitespace-nowrap"
                      >Xóa nhăn, chống lão hóa
                    </span>
                    <span
                      aria-hidden="true"
                      class="h-px border-t border-[#000] border-dotted"
                    ></span>
                    <span class="inline-flex whitespace-nowrap text-[#9A563A]">
                      1500k/50p
                    </span>
                  </div>
                  <p class="text-[12px] text-[#7a7a7a]">
                    Giúp loại bỏ nếp nhăn và ngăn ngừa quá trình lão hóa da
                  </p>
                </div>
              </div>
              <div>
                <h3
                  class="text-xs normal-case italic leading-[12px] tracking-[2px] text-center"
                >
                  Chăm sóc da và bổ sung chất
                </h3>
                <h2
                  class="uppercase font-bold text-[24px] text-center py-[8px]"
                >
                  Chăm sóc toàn thân
                </h2>
                <div class="flex justify-center pb-[20px]">
                  <img src="/shape3.png" alt="" />
                </div>
                <div class="mb-[10px]">
                  <div
                    class="grid grid-cols-[auto_1fr_auto] items-center gap-3"
                  >
                    <span class="inline-flex whitespace-nowrap"
                      >Rửa sạch mặt
                    </span>
                    <span
                      aria-hidden="true"
                      class="h-px border-t border-[#000] border-dotted"
                    ></span>
                    <span class="inline-flex whitespace-nowrap text-[#9A563A]">
                      100k
                    </span>
                  </div>
                  <p class="text-[12px] text-[#7a7a7a]">
                    Làm sạch da kỹ lưỡng giúp loại bỏ bụi bẩn và tạp chất
                  </p>
                </div>
                <div class="mb-[10px]">
                  <div
                    class="grid grid-cols-[auto_1fr_auto] items-center gap-3"
                  >
                    <span class="inline-flex whitespace-nowrap"
                      >Tẩy tết bào chết
                    </span>
                    <span
                      aria-hidden="true"
                      class="h-px border-t border-[#000] border-dotted"
                    ></span>
                    <span class="inline-flex whitespace-nowrap text-[#9A563A]">
                      300k
                    </span>
                  </div>
                  <p class="text-[12px] text-[#7a7a7a]">
                    Loại bỏ tế bào chết trên da, giúp da trở nên tươi mới
                  </p>
                </div>
                <div class="mb-[10px]">
                  <div
                    class="grid grid-cols-[auto_1fr_auto] items-center gap-3"
                  >
                    <span class="inline-flex whitespace-nowrap"
                      >Massage mặt
                    </span>
                    <span
                      aria-hidden="true"
                      class="h-px border-t border-[#000] border-dotted"
                    ></span>
                    <span class="inline-flex whitespace-nowrap text-[#9A563A]">
                      400k
                    </span>
                  </div>
                  <p class="text-[12px] text-[#7a7a7a]">
                    Giúp thư giãn cơ mặt, kích thích tuần hoàn máu
                  </p>
                </div>
                <div class="mb-[10px]">
                  <div
                    class="grid grid-cols-[auto_1fr_auto] items-center gap-3"
                  >
                    <span class="inline-flex whitespace-nowrap"
                      >Trị mụn và làm sáng da
                    </span>
                    <span
                      aria-hidden="true"
                      class="h-px border-t border-[#000] border-dotted"
                    ></span>
                    <span class="inline-flex whitespace-nowrap text-[#9A563A]">
                      600k
                    </span>
                  </div>
                  <p class="text-[12px] text-[#7a7a7a]">
                    Giúp điều trị mụn hiệu quả và làm sáng da
                  </p>
                </div>
              </div>
            </div>
            <div class="w-full md:w-[50%] p-6 bg-white shadow-lg rounded-lg">
              <div>
                <h3
                  class="text-xs normal-case italic leading-[12px] tracking-[2px] text-center"
                >
                  Chuyên gia chăm sóc
                </h3>
                <h2
                  class="uppercase font-bold text-[24px] text-center py-[8px]"
                >
                  MASSAGE BODY
                </h2>
                <div class="flex justify-center pb-[20px]">
                  <img src="/shape3.png" alt="" />
                </div>
                <div class="mb-[10px]">
                  <div
                    class="grid grid-cols-[auto_1fr_auto] items-center gap-3"
                  >
                    <span class="inline-flex font-medium whitespace-nowrap"
                      >Massage Full Body
                    </span>
                    <span
                      aria-hidden="true"
                      class="h-px border-t border-[#000] border-dotted"
                    ></span>
                    <span class="inline-flex whitespace-nowrap text-[#9A563A]">
                      100k
                    </span>
                  </div>
                  <p class="text-[12px] text-[#7a7a7a]">
                    Massage độc đáo kết hợp với đá nóng Thụy Điển
                  </p>
                </div>
                <div class="mb-[10px]">
                  <div
                    class="grid grid-cols-[auto_1fr_auto] items-center gap-3"
                  >
                    <span class="inline-flex font-medium whitespace-nowrap"
                      >Massage full body sáp nến
                    </span>
                    <span
                      aria-hidden="true"
                      class="h-px border-t border-[#000] border-dotted"
                    ></span>
                    <span class="inline-flex whitespace-nowrap text-[#9A563A]">
                      300k
                    </span>
                  </div>
                  <p class="text-[12px] text-[#7a7a7a]">
                    Massage sáp nến thơm ngát giúp thư giãn và làm dịu cơ thể
                  </p>
                </div>
                <div class="mb-[10px]">
                  <div
                    class="grid grid-cols-[auto_1fr_auto] items-center gap-3"
                  >
                    <span class="inline-flex font-medium whitespace-nowrap"
                      >Tẩy tế bào chết body
                    </span>
                    <span
                      aria-hidden="true"
                      class="h-px border-t border-[#000] border-dotted"
                    ></span>
                    <span class="inline-flex whitespace-nowrap text-[#9A563A]">
                      400k
                    </span>
                  </div>
                  <p class="text-[12px] text-[#7a7a7a]">
                    Loại bỏ tế bào chết trên cơ thể, giúp da sáng mịn và tươi
                    mới
                  </p>
                </div>
                <div class="mb-[10px]">
                  <div
                    class="grid grid-cols-[auto_1fr_auto] items-center gap-3"
                  >
                    <span class="inline-flex font-medium whitespace-nowrap"
                      >Massage cổ vai gáy chuyên sâu
                    </span>
                    <span
                      aria-hidden="true"
                      class="h-px border-t border-[#000] border-dotted"
                    ></span>
                    <span class="inline-flex whitespace-nowrap text-[#9A563A]">
                      600k
                    </span>
                  </div>
                  <p class="text-[12px] text-[#7a7a7a]">
                    Massage chuyên sâu giúp giảm đau và căng thẳng
                  </p>
                </div>
              </div>
              <div>
                <h3
                  class="text-xs normal-case italic leading-[12px] tracking-[2px] text-center"
                >
                  Chuyên gia chăm sóc
                </h3>
                <h2
                  class="uppercase font-bold text-[24px] text-center py-[8px]"
                >
                  Dịch vụ thêm
                </h2>
                <div class="flex justify-center pb-[20px]">
                  <img src="/shape3.png" alt="" />
                </div>
                <div class="mb-[10px]">
                  <div
                    class="grid grid-cols-[auto_1fr_auto] items-center gap-3"
                  >
                    <span class="inline-flex font-medium whitespace-nowrap"
                      >Đắp mặt nạ giấy
                    </span>
                    <span
                      aria-hidden="true"
                      class="h-px border-t border-[#000] border-dotted"
                    ></span>
                    <span class="inline-flex whitespace-nowrap text-[#9A563A]">
                      100k
                    </span>
                  </div>
                </div>
                <div class="mb-[10px]">
                  <div
                    class="grid grid-cols-[auto_1fr_auto] items-center gap-3"
                  >
                    <span class="inline-flex font-medium whitespace-nowrap"
                      >Đắp mặt nạ thiên nhiên
                    </span>
                    <span
                      aria-hidden="true"
                      class="h-px border-t border-[#000] border-dotted"
                    ></span>
                    <span class="inline-flex whitespace-nowrap text-[#9A563A]">
                      300k
                    </span>
                  </div>
                </div>
                <div class="mb-[10px]">
                  <div
                    class="grid grid-cols-[auto_1fr_auto] items-center gap-3"
                  >
                    <span class="inline-flex font-medium whitespace-nowrap"
                      >Mặt nạ đất
                    </span>
                    <span
                      aria-hidden="true"
                      class="h-px border-t border-[#000] border-dotted"
                    ></span>
                    <span class="inline-flex whitespace-nowrap text-[#9A563A]">
                      400k
                    </span>
                  </div>
                </div>
                <div class="mb-[10px]">
                  <div
                    class="grid grid-cols-[auto_1fr_auto] items-center gap-3"
                  >
                    <span class="inline-flex font-medium whitespace-nowrap"
                      >Tẩy tế bào chết da đầu
                    </span>
                    <span
                      aria-hidden="true"
                      class="h-px border-t border-[#000] border-dotted"
                    ></span>
                    <span class="inline-flex whitespace-nowrap text-[#9A563A]">
                      600k
                    </span>
                  </div>
                </div>
                <div class="mb-[10px]">
                  <div
                    class="grid grid-cols-[auto_1fr_auto] items-center gap-3"
                  >
                    <span class="inline-flex font-medium whitespace-nowrap"
                      >Thêm đá nóng
                    </span>
                    <span
                      aria-hidden="true"
                      class="h-px border-t border-[#000] border-dotted"
                    ></span>
                    <span class="inline-flex whitespace-nowrap text-[#9A563A]">
                      600k
                    </span>
                  </div>
                </div>
                <div class="mb-[10px]">
                  <div
                    class="grid grid-cols-[auto_1fr_auto] items-center gap-3"
                  >
                    <span class="inline-flex font-medium whitespace-nowrap"
                      >Giác hơi đắp thuốc
                    </span>
                    <span
                      aria-hidden="true"
                      class="h-px border-t border-[#000] border-dotted"
                    ></span>
                    <span class="inline-flex whitespace-nowrap text-[#9A563A]">
                      600k
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <span class="absolute bottom-[33px] right-[14px] w-[120px] h-[60px] rounded-full bg-[#ffc6a6] -skew-x-[35deg]"></span> -->
  </div>
  <Footer />
</template>

<style scoped></style>

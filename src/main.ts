import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import Swal from 'sweetalert2'; // Thêm import SweetAlert2

const app = createApp(App);
app.use(router);
app.config.globalProperties.$swal = Swal; // Đăng ký Swal toàn cục
app.mount('#app');
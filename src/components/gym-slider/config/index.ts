import { A11y, Autoplay, Navigation } from "swiper/modules";
import { SwiperOptions } from "swiper/types";

export const sliderSettings: SwiperOptions = {
  modules: [Navigation, A11y, Autoplay],
  spaceBetween: 10,
  slidesPerView: 'auto',
  loop: true,
  speed: 1000,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
};
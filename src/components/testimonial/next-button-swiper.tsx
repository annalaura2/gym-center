import { IconButton } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <IconButton
      onClick={() => swiper.slideNext()}
      aria-label="Next testimonial"
      position="absolute"
      top="50%"
      right="-25px"
      transform="translateY(-60%)"
      bg="white"
      color="black"
      _hover={{ bg: "gray.300" }}
      zIndex="10"
      rounded={"full"}
      w={"52px"}
      h={"52px"}
    >
      <FaArrowRight width={4} color="#097FD9" />
    </IconButton>
  );
};

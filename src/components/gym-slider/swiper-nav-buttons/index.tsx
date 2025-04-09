import { IconButton, Box } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <Box
      display="flex"
      justifyContent={"center"}
      transform="translateY(-50%)"
      zIndex="10"
      px={4}
    >
      <IconButton
        rounded="full"
        borderColor="brand.primary"
        borderWidth="1px"
        aria-label="Previous Slide"
        onClick={() => swiper.slidePrev()}
        mx="1"
        alignItems={"center"}
      >
        <FaChevronLeft />
      </IconButton>
      <IconButton
        rounded="full"
        borderColor="brand.primary"
        borderWidth="1px"
        aria-label="Next Slide"
        onClick={() => swiper.slideNext()}
        mx="1"
        bg={"primary.500"}
      >
        <FaChevronRight />
      </IconButton>
    </Box>
  );
};

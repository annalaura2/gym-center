import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import { CSSProperties, useState } from "react";
import { useTranslation } from "react-i18next";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import gymData from "../../../data/gym";
import { sliderSettings } from "../config";
import { SwiperNavButtons } from "../swiper-nav-buttons";
import { FeatureCard } from "./feature-card";

type SwiperInstance = SwiperCore;

export const GymSwiper = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const { t } = useTranslation();

  const handleSlideChange = (swiper: SwiperInstance) => {
    setActiveIndex(swiper.realIndex);
  };

  const slideStyles: CSSProperties = {
    boxSizing: "border-box",
    maxWidth: "350px",
    height: "300px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "background-color 0.3s",
  };

  return (
    <Box>
      <Flex align="center" justify="space-between" mb={4} position="relative">
        <Heading fontSize={{ base: "2xl", md: "4xl" }}>
          {t("gym.heading")}
        </Heading>
        <Image
          src="/exploreProgram.svg"
          alt="Explore Program"
          position="absolute"
          left={0}
          zIndex="-1"
        />
      </Flex>
      <Swiper
        {...sliderSettings}
        onSlideChange={handleSlideChange}
        style={{ width: "100%", height: "100%" }}
        spaceBetween={20}
      >
        <SwiperNavButtons />
        {gymData(t).map((item, index) => (
          <SwiperSlide key={index} style={slideStyles}>
            <FeatureCard
              isActive={activeIndex === index}
              icon={item.icon}
              name={item.name}
              description={item.description}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

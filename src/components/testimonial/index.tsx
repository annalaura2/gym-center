import {
  Flex,
  Heading,
  Stack,
  Image,
  Box,
  Container,
  Text,
} from "@chakra-ui/react";
import { TestimonialCard } from "./testimonial-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { sliderSettings } from "../gym-slider/config";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { CSSProperties } from "react";
import { Navigation, Pagination } from "swiper/modules";
import { SwiperNavButtons } from "./next-button-swiper";
import { useTranslation } from "react-i18next";
import testimonials from "../../data/testimonials";
import { AvatarGroup, Avatar } from "../ui/avatar";

export default function TestimonialSection() {
  const { t } = useTranslation();

  const testimonialData = testimonials(t);

  const slideStyles: CSSProperties = {
    boxSizing: "border-box",
    height: "300px",
    display: "flex",
    transition: "background-color 0.3s",
  };

  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      align="center"
      justify="space-between"
      p={8}
      as={Container}
      maxW="7xl"
      color="white"
      minHeight="300px"
    >
      {/* Seção esquerda */}
      <Stack
        textAlign="center"
        mb={{ base: 8, md: 0 }}
        position="relative"
        justify={"space-between"}
        gap={"70px"}
      >
        <Box>
          <Heading
            as={"h2"}
            fontSize="3xl"
            fontWeight="bold"
            maxW={"396px"}
            textAlign={"start"}
          >
            {t("testimonial.heading")}
          </Heading>
          <Image
            src="/testimonial.svg"
            alt="Testimonial"
            zIndex="-999"
            top={"-50px"}
            position="absolute"
          />
        </Box>
        <Flex justify={"start"} align={"start"} direction={"column"}>
          <AvatarGroup mt={4}>
            <Avatar name="Ryan Florence" src="https://i.pravatar.cc/50" />
            <Avatar src="https://i.pravatar.cc/51" />
            <Avatar src="https://i.pravatar.cc/52" />
            <Avatar src="https://i.pravatar.cc/52" />
          </AvatarGroup>
          <Text mt={2} fontSize="lg" color="gray.400">
            {t("testimonial.satisfiedCustomers")}
          </Text>
        </Flex>
      </Stack>

      {/* Seção direita */}
      <Box w={{ base: "100%", md: "50%" }} position="relative">
        <Swiper
          {...sliderSettings}
          style={{ width: "100%", height: "100%" }}
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: ".swiper-button-next",
          }}
          pagination={{ clickable: true }}
          spaceBetween={40} // Espaço entre os slides
          slidesPerView={1} // Quantidade de slides visíveis
        >
          {testimonialData.map((item, index) => (
            <SwiperSlide key={index} style={slideStyles}>
              <TestimonialCard
                key={index}
                author={item.author}
                message={item.message}
                role={item.role}
                avatar={item.avatar}
                rating={item.rating}
              />
            </SwiperSlide>
          ))}
          <SwiperNavButtons />
        </Swiper>
      </Box>
    </Flex>
  );
}

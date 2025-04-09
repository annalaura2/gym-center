import {
  Box,
  Container,
  createIcon,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Span,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import Card from "../../components/banner-card";
import { ExploreOrProgram } from "../../components/explore";
import { Newsletter } from "../../components/newsletter";
import { PricingContent } from "../../components/table-pricing";
import TestimonialSection from "../../components/testimonial";
import { Avatar, AvatarGroup } from "../../components/ui/avatar";
import { Button } from "../../components/ui/button";

const PlayIcon = createIcon({
  displayName: "PlayIcon",
  viewBox: "0 0 58 58",
  d: "M28.9999 0.562988C13.3196 0.562988 0.562378 13.3202 0.562378 29.0005C0.562378 44.6808 13.3196 57.438 28.9999 57.438C44.6801 57.438 57.4374 44.6808 57.4374 29.0005C57.4374 13.3202 44.6801 0.562988 28.9999 0.562988ZM39.2223 30.272L23.5749 39.7247C23.3506 39.8591 23.0946 39.9314 22.8332 39.9342C22.5717 39.9369 22.3142 39.8701 22.0871 39.7406C21.86 39.611 21.6715 39.4234 21.5408 39.1969C21.4102 38.9705 21.3421 38.7133 21.3436 38.4519V19.5491C21.3421 19.2877 21.4102 19.0305 21.5408 18.8041C21.6715 18.5776 21.86 18.3899 22.0871 18.2604C22.3142 18.1308 22.5717 18.064 22.8332 18.0668C23.0946 18.0696 23.3506 18.1419 23.5749 18.2763L39.2223 27.729C39.4404 27.8619 39.6207 28.0486 39.7458 28.2713C39.8709 28.494 39.9366 28.7451 39.9366 29.0005C39.9366 29.2559 39.8709 29.507 39.7458 29.7297C39.6207 29.9523 39.4404 30.1391 39.2223 30.272Z",
});

export default function Home() {
  const { t } = useTranslation();
  return (
    <>
      <Helmet title="Home" />
      <Container maxW={"6xl"} px={{ base: 6, md: 3 }}>
        <Stack
          align={"center"}
          gap={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} gap={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
            >
              {t("heroSection.heading")}
            </Heading>
            <Text color={"gray.500"} fontSize={"18px"}>
              {t("heroSection.description")}
            </Text>
            <Stack
              gap={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Button
                rounded={"md"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                colorPalette={"blue"}
              >
                {t("heroSection.startTrainingButton")}
              </Button>
              <Button
                rounded={"full"}
                size={"lg"}
                fontWeight={"normal"}
                px={6}
                bg={"transparent"}
              >
                <PlayIcon h={4} w={4} color={"gray.300"} />
                {t("heroSection.watchDemoButton")}
              </Button>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Box position={"absolute"} top={0} right={0} mb={3}>
              <Stack>
                <AvatarGroup size="lg" mb={3}>
                  <Avatar
                    name="Ryan Florence"
                    src="https://bit.ly/ryan-florence"
                  />
                  <Avatar
                    name="Segun Adebayo"
                    src="https://bit.ly/sage-adebayo"
                  />
                  <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
                  <Avatar fallback="+10k" />
                </AvatarGroup>
              </Stack>
              <Span display={{ base: "none", sm: "inline-block" }}>
                {t("heroSection.satisfiedCustomers")}{" "}
              </Span>
            </Box>
            <Box
              height={"600px"}
              rounded={"2xl"}
              width={"full"}
              overflow={"hidden"}
              justifyContent={"center"}
            >
              <Image
                alt={"Hero Image"}
                fit={"cover"}
                align={"top"}
                w={"100%"}
                h={"100%"}
                src={"/gym.png"}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>

      <ExploreOrProgram />

      <Card />
      <Container maxW="5xl" px={{ base: 6, md: 3 }} padding={"40px 20px"}>
        <Box
          bg="gray.700"
          py={{ base: 10, md: 18 }}
          px={{ base: 6, md: 8 }}
          rounded={"md"}
        >
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            <Box gridColumn={{ base: "span 1", md: "span 2" }}>
              <Text fontWeight={600} fontSize={"2xl"}>
                {t("nutritionExperience.heading")}
              </Text>
            </Box>
            <Flex
              align={"center"}
              justify={{ base: "flex-start", md: "center" }}
            >
              <Button
                px={8}
                size={"lg"}
                fontSize={"md"}
                colorPalette={"blue"}
                rounded={"md"}
              >
                {t("nutritionExperience.joinNowButton")}
              </Button>
            </Flex>
          </SimpleGrid>
        </Box>
      </Container>
      <PricingContent />
      <TestimonialSection />
      <Newsletter />
    </>
  );
}

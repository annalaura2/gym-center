import {
  Box,
  Button,
  Container,
  Flex,
  Group,
  Heading,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { SplitWithIcon } from "./list-card";

export default function Card() {
  const { t } = useTranslation();
  return (
    <Box as={Container} maxW={"6xl"} my={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} gap="24px" as="article">
        <Box
          display={{ base: "none", md: "flex" }}
          position="relative"
          height={{ base: "400px", md: "519px" }}
          pl={3}
          alignItems="center"
          justifyContent="center"
        >
          <Image
            src={"/gym/woman-dumbbell-row.png"}
            alt="Woman dumbbell row"
            width={{ base: "250px", md: "441px" }}
            height="301px"
            objectFit="cover"
            position="absolute"
            top={{ base: "0px", md: "-0.1px" }}
            left={{ base: "0px", md: "-0.5px" }}
            loading="lazy"
            opacity={0.9}
          />
          <Image
            src={"/gym/man.png"}
            alt="man"
            width={{ base: "150px", md: "250px" }}
            height="auto"
            objectFit="cover"
            position="absolute"
            top={{ base: "80px", md: "108px" }}
            left={{ base: "170px", md: "280px" }}
            loading="lazy"
            opacity={0.9}
          />
          <Image
            src={"/gym/woman-overhead-press.png"}
            alt="woman overhead press"
            width={{ base: "220px", md: "312.50px" }}
            height="auto"
            objectFit="cover"
            position="absolute"
            top={{ base: "220px", md: "312px" }}
            left={{ base: "50px", md: "127.5px" }}
            loading="lazy"
            opacity={0.9}
          />
        </Box>

        <Flex
          direction="column"
          alignItems="start"
          justifyContent="center"
          pl={{ base: 4, md: 8, lg: 10 }}
          py={10}
        >
          <Box>
            <Heading
              as="h2"
              mb={4}
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="bold"
              lineHeight="shorter"
              textShadow="2px 0 currentcolor"
            >
              {t("ctaWithImage.heading")}
            </Heading>
          </Box>
          <SplitWithIcon />
          <Group>
            <Button
              w={{ base: "full", sm: "auto" }}
              bg="primary.500"
              _hover={{ bg: "primary.500" }}
              color="gray.100"
            >
              {t("ctaWithImage.joinNowButton")}
            </Button>
            <Button
              w={{ base: "full", sm: "auto" }}
              bg="transparent"
              color="gray.100"
            >
              {t("ctaWithImage.ContactUsButton")}
            </Button>
          </Group>
        </Flex>
      </SimpleGrid>
    </Box>
  );
}

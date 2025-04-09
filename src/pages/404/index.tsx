import {
  Box,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { FaDumbbell } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import BubbleBackground from "./bubble-background";

const Error404 = () => {
  const { t } = useTranslation();
  return (
    <Box
      position="relative"
      display="flex"
      alignItems="center"
      justifyContent="center"
      h="100vh"
      textAlign="center"
    >
      <BubbleBackground/>
      <VStack gap={6} zIndex={1}>
        <HStack gap={4} color="primary.500">
          <Icon as={FaDumbbell} boxSize={8} />
          <Heading
            as="h1"
            fontSize={{ base: "4xl", md: "7xl" }}
          >
            404
          </Heading>
          <Icon as={FaDumbbell} boxSize={8} />
        </HStack>
        <Heading as="h2" size="2xl">
          {t("error404.title")}
        </Heading>
        <Text fontSize="lg" maxW="md">
          {t("error404.message")}
        </Text>
        <Button
          colorPalette={"blue"}
          size="lg"
          px={10}
          asChild
        >
          <Link to="/">{t("error404.buttonText")}</Link>
        </Button>
      </VStack>
    </Box>
  );
};

export default Error404;

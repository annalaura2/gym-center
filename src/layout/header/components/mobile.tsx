import { Box, IconButton, Link, useDisclosure, VStack } from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { CloseButton } from "../../../components/ui/close-button";

export const MobileNavButton = () => {
  const mobileNav = useDisclosure();
  const { t } = useTranslation();
  return (
    <Box display={{ base: "inline-flex", md: "none" }}>
      <IconButton
        display={{ base: "flex", md: "none" }}
        aria-label="Open menu"
        fontSize="20px"
        boxShadow={"none"}
        onClick={mobileNav.onOpen}
      >
        <AiOutlineMenu />
      </IconButton>
      <VStack
        pos="absolute"
        top={0}
        left={0}
        right={0}
        display={mobileNav.open ? "flex" : "none"}
        flexDirection="column"
        p={2}
        pb={4}
        m={2}
        gap={3}
        rounded="sm"
        bg="gray.800/90"
        shadow="sm"
      >
        <CloseButton
          _hover={{
            bg: "gray.700",
          }}
          onClick={mobileNav.onClose}
        />

        <Link href={"/"}>{t("navbar.home")}</Link>
        <Link href="/">{t("navbar.program")}</Link>
        <Link href="/">{t("navbar.pricing")}</Link>
        <Link href="/">{t("navbar.community")}</Link>
      </VStack>
    </Box>
  );
};

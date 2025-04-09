import { HStack, Link } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const DesktopNavButton = () => {
  const { t } = useTranslation();
  return (
    <HStack
      gap={5}
      mr={5}
      color="brand.500"
      display={{ base: "none", md: "inline-flex" }}
    >
      <Link href={"/"}>{t("navbar.home")}</Link>
      <Link href="/">{t("navbar.program")}</Link>
      <Link href="/">{t("navbar.pricing")}</Link>
      <Link href="/">{t("navbar.community")}</Link>
    </HStack>
  );
};

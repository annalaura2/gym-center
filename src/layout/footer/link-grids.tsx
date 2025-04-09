import {
  Box,
  Link,
  SimpleGrid,
  SimpleGridProps,
  Stack,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { SocialMediaLinks } from "./social-media";

export const LinkGrids = (props: SimpleGridProps) => {
  const { t } = useTranslation();

  return (
    <SimpleGrid columns={[2, 2, 3]} {...props} gap={{ base: "10", lg: "20" }}>
      <Box maxW="150px">
        <Stack gap={4} align="flex-start">
          <Text fontSize="lg" fontWeight="bold">
            {t("footerTop.sitemap.title")}
          </Text>
          <Link href="#">{t("footerTop.sitemap.links.aboutUs")}</Link>
          <Link href="#">{t("footerTop.sitemap.links.promos")}</Link>
          <Link href="#">{t("footerTop.sitemap.links.newsBlog")}</Link>
          <Link href="#">{t("footerTop.sitemap.links.helpCenter")}</Link>
        </Stack>
      </Box>
      <Box maxW="150px">
        <Stack gap={4} align="flex-start">
          <Text fontSize="lg" fontWeight="bold">
            {t("footerTop.support.title")}
          </Text>
          <Link href="#">{t("footerTop.support.links.faq")}</Link>
          <Link href="#">{t("footerTop.support.links.supportCenter")}</Link>
        </Stack>
      </Box>
      <Box maxW="150px">
        <Stack gap={4} align="flex-start">
          <Text fontSize="lg" fontWeight="bold">
            {t("footerTop.socialMedia.title")}
          </Text>
          <SocialMediaLinks />
        </Stack>
      </Box>
    </SimpleGrid>
  );
};

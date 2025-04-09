import { Image, Link, Stack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export const Logo = () => {
  const { t } = useTranslation();

  return (
    <Stack gap={4} align="flex-start" maxW="300px">
      <Link href="https://github.com/annalaura2">
        <Image
          w="180px"
          h="46px"
          src="/gym-center-footer.svg"
          alt="Gym Center"
        />
      </Link>
      <Text mt={2} color="gray.500" fontSize="md">
        {t("footerTop.gymCenter.description")}
      </Text>
    </Stack>
  );
};

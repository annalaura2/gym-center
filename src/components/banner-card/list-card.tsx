import { Box, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import { useTranslation } from "react-i18next";
import { FaCheck } from "react-icons/fa";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"} mb={3} gap={3}>
      <Flex
        w={5}
        h={5}
        align={"center"}
        justify={"center"}
        rounded={"full"}
        bg={iconBg}
      >
        {icon}
      </Flex>
      <Stack>
        <Text>{text}</Text>
      </Stack>
    </Stack>
  );
};

export function SplitWithIcon() {
  const { t } = useTranslation();
  return (
    <Box>
      <Feature
        icon={<Icon as={FaCheck} color={"black"} w={2} h={2} />}
        iconBg={"primary.500"}
        text={t("ctaWithImage.list.muscleStrength")}
      />
      <Feature
        icon={<Icon as={FaCheck} color={"black"} w={2} h={2} />}
        iconBg={"primary.500"}
        text={t("ctaWithImage.list.overallHealth")}
      />
      <Feature
        icon={<Icon as={FaCheck} color={"black"} w={2} h={2} />}
        iconBg={"primary.500"}
        text={t("ctaWithImage.list.stamina")}
      />
    </Box>
  );
}

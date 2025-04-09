import { Text, Stack, VStack, Container, Flex } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";


interface ToggleOptionProps {
  isActive: boolean;
  label: string;
  onClick: () => void;
}

type ToggleProps = {
  isMonthly: boolean;
  handleChange: () => void;
}
const ToggleOption = ({ isActive, label, onClick }: ToggleOptionProps) => {
  return (
    <Flex
      align="center"
      justify="center"
      bg={isActive ? "white" : "gray.700"}
      padding="11px 24px"
      w="150px"
      color={isActive ? "gray.700" : "gray.400"}
      rounded="md"
      cursor="pointer"
      onClick={onClick}
    >
      <Text fontWeight="bold" fontSize="sm">
        {label}
      </Text>
    </Flex>
  );
};

export const Toggle = ({ isMonthly, handleChange }: ToggleProps) => {
  const { t } = useTranslation();
  return (
    <VStack
      as={Container}
      textAlign="center"
      gap="20px"
      mt="20px"
      mb="20px"
    >
      <Stack
        bg="#FFFFFF"
        w="336px"
        h="62px"
        padding="8px 12px"
        rounded="md"
        direction="row"
      >
        <ToggleOption
          isActive={isMonthly}
          label={t("plans.packages.billedMonthly")}
          onClick={handleChange}
        />
        <ToggleOption
          isActive={!isMonthly}
          label={t("plans.packages.billedYearly")}
          onClick={handleChange}
        />
      </Stack>
    </VStack>
  );
};

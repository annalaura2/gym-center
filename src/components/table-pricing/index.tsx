import { useState } from "react";
import { Box, Heading, chakra, VStack } from "@chakra-ui/react";
import { Toggle } from "./components/toggle";
import PricingSection from "./components/section-price";
import { useTranslation } from "react-i18next";

const PricingHeading = ({ textHeading, textSspan }: { textHeading: string; textSspan: string }) => (
  <VStack textAlign="center" gap={"24px"}>
    <chakra.span fontWeight={700} fontSize={"18px"} color={"primary.500"}>
      {textSspan}
    </chakra.span>
    <Heading as="h1" fontSize="5xl">
      {textHeading}
    </Heading>
  </VStack>
);

export const PricingContent = () => {
  const [isMonthly, setIsMonthly] = useState<boolean>(false);
  const { t } = useTranslation();

  const handleChange = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <Box py={8} mt={2}>
      <PricingHeading
        textHeading={t("plans.packages.title")}
        textSspan={t("plans.pricing")}
      />
      <Toggle isMonthly={isMonthly} handleChange={handleChange} />
      <PricingSection isMonthly={isMonthly} />
    </Box>
  );
};

import { Box, VStack, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

type PriceHeadingProps = {
  type: string;
  price: string;
  isHighlighted?: boolean;
  isMonthly: boolean;
};

export const PriceHeading: React.FC<PriceHeadingProps> = ({
  type,
  price,
  isHighlighted,
  isMonthly
}) => {
  const { t } = useTranslation();
  return (
    <Box textAlign={"start"}>
      <Text
        fontWeight="500"
        fontSize="20px"
        color={isHighlighted ? "white" : "primary.500"}
      >
        {type}
      </Text>
      <VStack justify={'flex-start'} align={'flex-start'}>
        <Text fontSize="5xl" fontWeight="900">
          {price}
        </Text>
        <Text fontSize="sm" mb={4} lineHeight={'24px'}>
            {!isMonthly ? t("plans.packages.perMonth") : t("plans.packages.billedAnnually")}
        </Text>
      </VStack>
    </Box>
  );
};

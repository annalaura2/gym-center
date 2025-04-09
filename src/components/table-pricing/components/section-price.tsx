import { Box, Container, SimpleGrid } from "@chakra-ui/react";
import { usePlans } from "../data";
import { ActionButton } from "./action-button";
import { BenefitList } from "./benefit-list";
import { BestOfferBadge } from "./best-offer-badge";
import { PriceHeading } from "./price-heading";
import { ContainerContentProps } from "../type";
import { useTranslation } from "react-i18next";

const ContainerContent = ({
  children,
  isHighlighted,
  ...rest
}: ContainerContentProps) => (
  <Box
    color="white"
    bg={isHighlighted ? "primary.600" : "gray.700"}
    p={6}
    overflow={"hidden"}
    borderRadius="md"
    textAlign="center"
    position="relative"
    height={'auto'}
    w={"100%"}
    display="flex"
    flexDirection="column"
    {...rest}
  >
    {children}
  </Box>
);

export default function PricingSection({ isMonthly }: { isMonthly: boolean }) {
  const { t } = useTranslation();
  const buttonBg = "blue.500";

  const plans = usePlans();

  return (
    <SimpleGrid
      as={Container}
      maxW={"7xl"}
      columns={[1, null, 2, 2, 4]}
      gap={"24px"}
      p={8}
      alignItems="flex-start"
    >
      {plans.map((plan, index) => (
        <ContainerContent key={index} isHighlighted={plan.isHighlighted}>
          {plan.isHighlighted && <BestOfferBadge name={t("plans.BestOffer")} />}
          <PriceHeading
            type={plan.name}
            price={!isMonthly ? plan.monthlyPrice : plan.yearlyPrice}
            isHighlighted={plan.isHighlighted}
            isMonthly={isMonthly}
          />
          <BenefitList benefits={plan.benefits} />
          <ActionButton
            buttonBg={buttonBg}
            isHighlighted={plan.isHighlighted}
          />
        </ContainerContent>
      ))}
    </SimpleGrid>
  );
}

import { useTranslation } from "react-i18next";
import { Plan } from "./type";

export const usePlans = (): Plan[] => {
  const { t } = useTranslation();

  const createBenefits = (packageName: string) => {
    return Array.from({ length: 6 }, (_, index) =>
      t(`plans.${packageName}.benefits.benefit${index + 1}`)
    );
  };

  const createPlan = (packageName: string, isHighlighted: boolean): Plan => ({
    name: t(`plans.${packageName}.name`),
    monthlyPrice: t(`plans.${packageName}.monthlyPrice`),
    yearlyPrice: t(`plans.${packageName}.yearlyPrice`),
    benefits: createBenefits(packageName),
    isHighlighted,
  });

  return [
    createPlan("basicPackage", false),
    createPlan("midPackage", true),
    createPlan("proPackage", false),
    createPlan("athletePackage", false),
  ];
};

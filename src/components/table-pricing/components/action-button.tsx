import { Box, Button, ButtonProps } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

type ActionButtonProps = ButtonProps & {
  isHighlighted: boolean;
  buttonBg: string;
}

export const ActionButton = ({ isHighlighted, buttonBg, ...props }: ActionButtonProps) => (
  <Box mt="auto">
    <Button
      bg={isHighlighted ? "black" : buttonBg}
      color="white"
      _hover={{
        bg: isHighlighted ? "blackAlpha.800" : "blue.600",
      }}
      size="lg"
      width="100%"
      fontSize="sm"
      rounded={"md"}
      {...props}
    >
      {useTranslation().t("plans.registerNow")}
    </Button>
  </Box>
);

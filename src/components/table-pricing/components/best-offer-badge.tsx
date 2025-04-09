import { Box, Text } from "@chakra-ui/react";


type BestOfferBadgeProps = {
  name: string;
}
export const BestOfferBadge: React.FC<BestOfferBadgeProps> = ({ name }) => (
  <Box
    position="absolute"
    top="18px"
    right="-55px"
    p="16px"
    color="black"
    bg={"white"}
    fontSize="16px"
    transform="rotate(45deg)"
    w={"207.46px"}
    fontWeight={400}
  >
    <Text>{name}</Text>
  </Box>
);

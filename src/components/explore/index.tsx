import { Box, Container } from "@chakra-ui/react";
import { GymSwiper } from "../gym-slider";

export function ExploreOrProgram() {
  return (
    <Box>
      <Container maxW="6xl" px={{ base: 6, md: 3 }} position={"relative"}>
        <GymSwiper />
      </Container>
    </Box>
  );
}

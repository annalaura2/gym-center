import { Box, Center, Icon, Text, chakra } from "@chakra-ui/react";

interface SlideProps {
  isActive: boolean;
  icon: React.ReactNode;
  name: string;
  description: string;
}

export const FeatureCard = ({
  isActive,
  icon,
  name,
  description,
}: SlideProps) => {
  return (
    <Box
      bg={isActive ? "blue.500" : "gray.700"}
      p={6}
      rounded="lg"
      textAlign="center"
      pos="relative"
      height="80%"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      transition="background-color 0.3s"
    >
      <Center>
        <Icon fontSize="4xl" color={isActive ? "white" : "primary.500"}>
          {icon}
        </Icon>
      </Center>
      <chakra.h3 fontWeight="semibold" fontSize="2xl" mt={6}>
        {name}
      </chakra.h3>
      <Text fontSize="md" mt={4}>
        {description}
      </Text>
    </Box>
  );
};

import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import { TestimonialProps } from "../../data/testimonials";
import { Rating } from "../ui/rating";
import { Avatar } from "../ui/avatar";

export const TestimonialCard = ({
  author,
  message,
  role,
  rating,
  avatar,
}: TestimonialProps) => {
  return (
    <Stack
      bg="gray.700"
      p={6}
      borderRadius="md"
      boxShadow="md"
      color="white"
      w={{
        base: "100%",
        md: "600px",
      }}
      minH="250px"
      justify={"space-between"}
    >
      <Stack direction="row" justify={"flex-end"} my={3}>
      <Rating defaultValue={rating} size="md" colorPalette={'yellow'} allowHalf count={5} disabled />
      </Stack>
      <Text fontSize="lg" mb={6} maxW={"540px"} maxLines={3}>
        {message}
      </Text>
      <Flex align="center">
        <Avatar name={author} src={avatar} mr={4} />
        <Box>
          <Text fontWeight="bold">{author}</Text>
          <Text fontSize="sm" color="gray.400">
            {role}
          </Text>
        </Box>
      </Flex>
    </Stack>
  );
};

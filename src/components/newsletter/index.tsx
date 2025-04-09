import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { InputGroup } from "../ui/input-group";
import { Field } from "../ui/field";

export const Newsletter = () => {
  const { t } = useTranslation();
  return (
    <Box px={{ base: 6, md: 3 }}>
      <Container
        maxW={"6xl"}
        bg={"primary.600"}
        rounded={"md"}
        my={"40px"}
        p={"40px"}
      >
        <VStack gap={4} textAlign={"center"} align={"center"}>
          <Heading color="white" fontSize={{ base: "xl", md: "4xl" }}>
            {t("newsletter.subscribe")}
          </Heading>
          <Text
            color="whiteAlpha.800"
            fontSize={{ base: "sm", md: "md" }}
            maxW={"590px"}
          >
            {t("newsletter.benefits")}
          </Text>

          <Field cursor={'pointer'} required helperText="We'll never share your email." display={'flex'} alignItems={'center'}>
            <InputGroup
              w={{ base: "100%", md: "600px" }}
              endElement={
                <Button
                  width={{ base: "80px", md: "180px" }}
                  size="md"
                  mr={-2}
                  bg="black"
                  color="white"
                  rounded="md"
                  _hover={{ bg: "gray.700" }}
                >
                  {t("newsletter.button")}
                </Button>
              }
            >
              <Input
                size="lg"
                bg="white"
                rounded="md"
                _placeholder={{ color: "gray.500" }}
                _focus={{
                  borderColor: "purple.700",
                  boxShadow: "none",
                }}
                color={"gray.800"}
              />
            </InputGroup>
          </Field>
        </VStack>
      </Container>
    </Box>
  );
};

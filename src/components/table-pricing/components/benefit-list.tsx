import { Flex, Icon, Stack, Text } from "@chakra-ui/react";
import { FaCheck } from "react-icons/fa";
import { Plan } from "../type";

export const BenefitList = ({ benefits }: Pick<Plan, 'benefits'>) => (
  <Stack  gap={3} mb={6} alignItems={"flex-start"}>
    {benefits.map((benefit, i) => (
      <Flex key={i} align={'center'} gap={'10px'}>
        <Flex
          w={5}
          h={5}
          align={"center"}
          justify={"center"}
          rounded={"full"}
          bg={"gray.400"}
        >
          <Icon as={FaCheck} color={"black"} w={2} h={2} />
        </Flex>
        <Text fontSize={'md'}>{benefit}</Text>
      </Flex>
    ))}
  </Stack>
);

import {
  Flex,
  HStack,
  VisuallyHidden,
  Box,
  Image,
  Group,
  Button,
} from "@chakra-ui/react";
import { Header } from "./components/header";
import { useTranslation } from "react-i18next";
import { Link as ReactLink } from "react-router-dom";
import { MobileNavButton } from "./components/mobile";
import { DesktopNavButton } from "./components/desktop";
export default function NavHero() {
  const { t } = useTranslation();

  return (
    <Header>
      <Flex
        alignItems="center"
        justifyContent="space-between"
        mx="auto"
        as="nav"
        maxW={"6xl"}
      >
        <Flex>
          <VisuallyHidden>Logo</VisuallyHidden>
          <Box asChild>
            <ReactLink to="/">
              <Image src="/logo.svg" alt="Logo Gym Center" maxW={"10rem"} />
            </ReactLink>
          </Box>
        </Flex>
        <HStack display="flex" alignItems="center" gap={1}>
         <DesktopNavButton />
          <Group>
            <Button
              w={99}
              borderWidth={1}
              variant={"ghost"}
              borderColor={"white"}
            >
              {t("navbar.login")}
            </Button>
            <Button w={132} bg="primary.500">
              {t("navbar.register")}
            </Button>
          </Group>
          
          <MobileNavButton />
        </HStack>
      </Flex>
    </Header>
  );
}

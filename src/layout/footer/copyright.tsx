import { useEffect } from "react";
import { Link, Stack, Text, IconButton } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { FaGlobeAmericas } from "react-icons/fa";
import {
  MenuContent,
  MenuItem,
  MenuRoot,
  MenuTrigger,
} from "../../components/ui/menu";

export const Copyright = () => {
  const { i18n, t } = useTranslation();

  const changeLanguage = (lang: string): void => {
    i18n.changeLanguage(lang);
    localStorage.setItem("selectedLanguage", lang);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      gap={3}
      justify="space-between"
      align={{ base: "center", md: "center" }}
      pb="24px"
    >
      <Text>© {new Date().getFullYear()} Fitness Center</Text>
      <Stack gap={7} direction={{ base: "column", md: "row" }} align={"center"}>
        <Link href="#">{t("footer.termOfUse")}</Link>
        <Link href="#">{t("footer.privacyPolicy")}</Link>

        <MenuRoot>
          <MenuTrigger asChild>
            <IconButton
              as={IconButton}
              aria-label="Language Options"
              variant="solid"
            >
              <FaGlobeAmericas />
            </IconButton>
          </MenuTrigger>
          <MenuContent bg={"gray.600/40"}>
            <MenuItem
              cursor={'pointer'}
              value="langue-english"
              onClick={() => changeLanguage("en")}
            >
              English
            </MenuItem>
            <MenuItem
              cursor={'pointer'}
              value="langue-portugues"
              onClick={() => changeLanguage("br")}
            >
              Português
            </MenuItem>
          </MenuContent>
        </MenuRoot>
      </Stack>
    </Stack>
  );
};

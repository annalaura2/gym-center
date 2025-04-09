import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/poppins";
import "@fontsource/urbanist/700.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { I18nextProvider } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import "swiper/css";
import { ColorModeProvider } from "./components/ui/color-mode";
import i18next from "./i18n/";
import { router } from "./router/router";
import { theme } from "./theme";

function App() {
  return (
    <HelmetProvider>
      <I18nextProvider i18n={i18next}>
        <Helmet titleTemplate="Gym Center - %s" />
        <ChakraProvider value={theme}>
          <ColorModeProvider forcedTheme="dark">
            <RouterProvider router={router} />
          </ColorModeProvider>
        </ChakraProvider>
      </I18nextProvider>
    </HelmetProvider>
  );
}

export default App;

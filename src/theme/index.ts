import {
  createSystem,
  defineConfig,
  defaultConfig,
  mergeConfigs,
} from "@chakra-ui/react";
import { colors, fonts, globalCss } from "./tokens/";

const config = defineConfig(
  mergeConfigs(defaultConfig, {
    preflight: true,
    cssVarsPrefix: "ck",
    globalCss,
    theme: {
      tokens: {
        colors,
        fonts,
      },
      semanticTokens: {},
    },
  })
);

export const theme = createSystem(config);

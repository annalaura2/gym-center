import { defineGlobalStyles } from "@chakra-ui/react";

export const globalCss = defineGlobalStyles({
  "html, body": {
    colorPalette: "blue",
    bg: "bg.emphasized",
    color: "fg.emphasized",
  },
  "*::placeholder": {
    color: "purple.subtle",
  },
  ".swiper": {
    position: 'static !important',
  }
});

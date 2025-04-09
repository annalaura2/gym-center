import React from "react";
import { chakra } from "@chakra-ui/react";

export const Header: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <chakra.header
    transition="all 0.5s ease-in-out"
    pos="fixed"
    top="0"
    zIndex="modal"
    w="full"
    px={{ base: 2, sm: 4 }}
    py={4}
    mb={10}
    css={{
      backdropFilter: "saturate(180%) blur(5px)",
      backgroundColor: 
        "rgba(26, 32, 44, 0.8)"
    }}
  >
    {children}
  </chakra.header>
);

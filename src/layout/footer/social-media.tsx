import { Group, GroupProps, IconButton } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
export const SocialMediaLinks = (props: GroupProps) => (
  <Group color="gray.600" {...props}>
    <IconButton aria-label="Instagram" asChild>
      <Link to="https://www.github.com/annalaura2">
        <FaInstagram fontSize="20px" />
      </Link>
    </IconButton>
    <IconButton aria-label="Discord" asChild>
      <Link to="https://www.github.com/annalaura2">
        <FaFacebook fontSize="20px" />
      </Link>
    </IconButton>
    <IconButton aria-label="Twitter" asChild>
      <Link to="https://www.github.com/annalaura2">
        <FaTwitter fontSize="20px" />
      </Link>
    </IconButton>
  </Group>
);

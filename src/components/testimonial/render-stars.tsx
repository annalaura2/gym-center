import { Icon } from "@chakra-ui/react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export const renderStars = (rating: number) => {
  const stars: JSX.Element[] = []
  const roundedRating = Math.round(rating * 2) / 2
  for (let i = 1; i <= 5; i++) {
    if (i <= roundedRating) {
      stars.push(<Icon key={i} as={FaStar} color="yellow.400" />);
    } else if (i - 0.5 === roundedRating) {
      stars.push(<Icon key={i} as={FaStarHalfAlt} color="yellow.400" />);
    } else {
      stars.push(<Icon key={i} as={FaRegStar} color="yellow.400" />);
    }
  }

  return stars;
}
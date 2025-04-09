import { chakra } from "@chakra-ui/react";
import { CSSProperties } from "react";

const BubbleBackground = () => {
  const bubbles: Array<{
    key: number;
    position: Pick<CSSProperties, "top" | "bottom" | "left" | "right" | "transform">;
    size: Pick<CSSProperties, "width" | "height">;
    color: string;
  }> = [
    {
      key: 1,
      position: { top: "5%", left: "10%" },
      size: { width: "200px", height: "200px" },
      color: "rgba(255, 99, 132, 0.3)",
    },
    {
      key: 2,
      position: { top: "70%", right: "10%" },
      size: { width: "150px", height: "150px" },
      color: "rgba(75, 192, 192, 0.3)",
    },
    {
      key: 3,
      position: { bottom: "10%", left: "19%", transform: "translateX(-50%)" },
      size: { width: "250px", height: "250px" },
      color: "rgba(54, 162, 235, 0.3)",
    },
  ];

  return (
    <>
      {bubbles.map(({ key, position, size, color }) => (
        <chakra.svg
          key={key}
          position="absolute"
          {...position}
          width={size.width} 
          height={size.height}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="50" fill={color} />
        </chakra.svg>
      ))}
    </>
  );
};

export default BubbleBackground;

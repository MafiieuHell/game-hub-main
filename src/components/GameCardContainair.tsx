import { Box, interactivity } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainair = ({ children }: Props) => {
  return (
    <Box width="300px" borderRadius={10} overflow="hidden">
      {children}
    </Box>
  );
};

export default GameCardContainair;

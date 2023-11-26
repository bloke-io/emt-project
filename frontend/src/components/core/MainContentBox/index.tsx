import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const MainContentBox = ({ children }: Props) => {
  return (
    <Box height="calc(100% - 72px)" width="full">
      {children}
    </Box>
  );
};

export default MainContentBox;

import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
}

const AppShell = ({ children }: Props) => {
  return (
    <Box display="flex" height="100vh" flexDirection="column" flex={1}>
      {children}
    </Box>
  );
};

export default AppShell;

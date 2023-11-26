import { Box, Text } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box display="flex" flex={1} height="72px" backgroundColor="grey" flexDirection="row" alignItems="center" justifyContent="center">
      <Text fontSize="20px" color="white">Paper Review System</Text>
    </Box>
  );
};

export default Header;

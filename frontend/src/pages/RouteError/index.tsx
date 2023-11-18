import { Box, Text } from "@chakra-ui/react";

const ErrorPage = () => {
  return (
    <Box
      display="flex"
      height="100vh"
      flex={1}
      justifyContent="center"
      alignItems="center"
    >
      <Text fontSize="50px" color="red">
        Page not found
      </Text>
    </Box>
  );
};

export default ErrorPage;

import { Box, Button, Text } from "@chakra-ui/react";
import { useAuth } from "../../../providers/ConsumerHooks/useAuth";

const Header = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <Box
      display="flex"
      flex={1}
      height="72px"
      backgroundColor="grey"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        display="flex"
        flex={1}
        pl={5}
        justifyContent="flex-start"
        alignItems="center"
      >
        <Text fontSize="20px" color="white">
          Paper Review System
        </Text>
      </Box>
      <Box
        display="flex"
        flex={1}
        justifyContent="flex-end"
        alignItems="center"
      >
        {user && (
          <Button margin={3} onClick={handleLogout}>
            Logout
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Header;

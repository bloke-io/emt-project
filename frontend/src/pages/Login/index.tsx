import { Box, Button, Input, Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useAuth } from "../../providers/ConsumerHooks/useAuth";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "../../constants";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {

    try {
        const loginResult = await login({
            userId: username,
            password: password,
        });

        if(loginResult) navigate(RoutePath.Papers);
    } catch (err) {
        console.log(err);
    }
  }

  return (
    <Box
      display="flex"
      flex={1}
      justifyContent="center"
      alignItems="center"
      w="full"
      h="full"
    >
      <Box
        display="flex"
        flexDirection="column"
        width="500px"
        height="300px"
        backgroundColor="grey"
        borderRadius="12px"
        color="white"
        padding="8px"
      >
        <Text alignSelf="center">Login Box</Text>
        <Box
          display="flex"
          flex={1}
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            direction="column"
            display="flex"
            w="full"
            spacing="24px"
            justifyContent="center"
            alignItems="center"
          >
            <Box w="70%" h="full">
              <Text>Username</Text>
              <Input
                onChange={(e) => setUsername(e.target.value)}
                focusBorderColor="white"
                backgroundColor="gray.200"
                color="black"
                type="text"
                placeholder="Please enter your username..."
              />
            </Box>
            <Box w="70%" h="full">
              <Text>Password</Text>
              <Input
                onChange={(e) => setPassword(e.target.value)}
                focusBorderColor="white"
                backgroundColor="gray.200"
                color="black"
                type="password"
                placeholder="Please enter your password..."
              />
            </Box>
            <Button onClick={handleLogin}>
                Log In
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;

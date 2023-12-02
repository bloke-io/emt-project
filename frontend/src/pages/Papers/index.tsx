import { Box } from "@chakra-ui/react";
import { useAuth } from "../../providers/ConsumerHooks/useAuth";
import useGetPapers from "../../hooks/useGetPapers";

const Papers = () => {
  const { user } = useAuth();

  const { data, error, isLoading } = useGetPapers(user?.jwt ?? '', user?.id ?? 0);


  if(isLoading) return <Box>Loading...</Box>
  
  
  return <Box></Box>;
};

export default Papers;

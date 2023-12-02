import { Box } from "@chakra-ui/react";
import { useAuth } from "../../providers/ConsumerHooks/useAuth";
import useGetPapers from "../../hooks/useGetPapers";
import { useMemo } from "react";
import { Paper } from "../../types/Paper";

const Papers = () => {
  const { user } = useAuth();

  const { data, error, isLoading } = useGetPapers(user?.jwt ?? '', user?.id ?? 0);


  const ownPapers = useMemo(() => {
    if(!data) return [];

    return data.filter((paper) => paper.author.id === user?.id);
  }, [data, user]);

  const assignedPapers = useMemo(() => {
    if(!data) return [];

    return data.filter((paper) => paper.author.id !== user?.id);
  }, [data, user]);

  if(isLoading) return <Box>Loading...</Box>;

  if(error) return <Box>Error...</Box>;
  
  
  return <Box>
    {ownPapers.map((paper: Paper) => <Box key={paper.id}>{paper.title}</Box>)}
    {assignedPapers.map((paper: Paper) => <Box key={paper.id}>{paper.title}</Box>)}
  </Box>;
};

export default Papers;

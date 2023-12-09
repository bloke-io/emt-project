import { Box, Button, Heading, useDisclosure } from "@chakra-ui/react";
import { useAuth } from "../../providers/ConsumerHooks/useAuth";
import useGetPapers from "../../hooks/useGetPapers";
import { useMemo } from "react";
import PaperCard from "../../components/feature/PaperCard";
import { Paper } from "../../types/Paper";
import PaperUpload from "../../components/feature/PaperUpload";

const Papers = () => {
  const { user } = useAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { data, error, isLoading } = useGetPapers(
    user?.jwt ?? "",
    user?.id ?? 0
  );

  const ownPapers = useMemo(() => {
    if (!data) return [];

    return data.filter((paper) => paper.author.id === user?.id);
  }, [data, user]);

  const assignedPapers = useMemo(() => {
    if (!data) return [];

    return data.filter((paper) => paper.author.id !== user?.id);
  }, [data, user]);

  if (isLoading) return <Box>Loading...</Box>;

  if (error) return <Box>Error...</Box>;

  return (
    <Box padding={4} paddingTop={0} display="flex" flexDirection="column">
      <Box mt={2} display="flex" flexDirection="row" alignItems="center">
        <Heading >Your papers</Heading>
        <Button ml={4} onClick={() => { onOpen() }}>
          Upload paper
        </Button>
       </Box>
      {ownPapers.map((paper: Paper) => <PaperCard {...paper} />)}
      <Heading mt={4}>Assigned papers:</Heading>
      {assignedPapers.map((paper: Paper) => <PaperCard {...paper} />)}
      {isOpen && <PaperUpload isOpen={isOpen} onClose={onClose} />}
    </Box>
  );
};

export default Papers;

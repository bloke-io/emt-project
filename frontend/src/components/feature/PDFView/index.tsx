import { Box, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import useGetPaper from "../../../hooks/useGetPaper";
import { useAuth } from "../../../providers/ConsumerHooks/useAuth";

const PDFView = () => {
  const { paperId } = useParams();
  const { user } = useAuth();

  const {
    data: paper,
    error,
    isLoading,
  } = useGetPaper(user?.jwt ?? "", paperId ?? "");

  if (isLoading) return <Box>Loading...</Box>;
  if (error) return <Box>Error...</Box>;

  return (
    <Box padding={4} paddingTop={0} display="flex" flexDirection="column">
      <Box mt={2} display="flex" flexDirection="column" alignItems="flex-start">
        <Heading>Title: {paper?.title}</Heading>
        <Text>Author: {paper?.author.username}</Text>
      </Box>
      <Box mt={4} display="flex" flexDirection="row">
        <Box display="flex" flex={1} justifyContent="center">
        </Box>
        <Box display="flex" flex={1}>
          <Heading>TEST TWO</Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default PDFView;

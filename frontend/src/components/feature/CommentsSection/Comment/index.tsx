import { Avatar, Box, Text } from "@chakra-ui/react";
import { Comment } from "../../../../types/Comment";

type Props = {
  comment: Comment;
};

const PaperComment = ({ comment }: Props) => {
  return (
    <Box
      display="flex"
      flex={1}
      maxHeight="200px"
      overflow="auto"
      flexDirection="column"
      borderRadius={12}
      padding={4}
      backgroundColor="gray.300"
    >
      <Box display="flex" alignItems="center" gap={2} mb={2}>
        <Avatar name={comment.commentAuthor.username} src="/" />
        <Text fontSize={16}>{comment.commentAuthor.username}</Text>
      </Box>
      <Text fontSize={12}>{comment.comment}</Text>
    </Box>
  );
};

export default PaperComment;

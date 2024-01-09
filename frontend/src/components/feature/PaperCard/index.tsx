import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Stack,
  Text,
} from "@chakra-ui/react";
import { Paper } from "../../../types/Paper";

const PaperCard = ({
  id,
  title,
  author,
  reviewEndDate,
  comments,
  paperPDF,
}: Paper) => {
  console.log(id, title, author, reviewEndDate, comments, paperPDF);
  return (
    <Card
      width="250px"
      height="400px"
      margin={3}
      borderRadius={4}
      padding={1}
      background="gray.100"
    >
      <CardHeader>
        <Text fontSize={25} fontWeight="bold">{title}</Text>
      </CardHeader>
      <CardBody>
        <Stack mt={4} spacing={3}>
          <Text textOverflow="clip">Paper Review End Date:</Text>
          <Text>{String(reviewEndDate)}</Text>
          <Text>Comments: {comments.length}</Text>
        </Stack>
      </CardBody>
      <CardFooter mt={4}>
        <Stack direction="column" spacing={3}>
          <Text>Author: {author.username}</Text>
          <Button
            backgroundColor="gray.400"
            _hover={{
              backgroundColor: "gray.300"
            }}
            onClick={() => {
              console.log("handle paper review");
            }}
          >
            View Paper
          </Button>
        </Stack>
      </CardFooter>
    </Card>
  );
};

export default PaperCard;

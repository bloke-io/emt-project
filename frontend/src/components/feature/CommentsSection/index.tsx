import { Box } from "@chakra-ui/react";
import useGetComments from "../../../hooks/useGetComments";
import PaperComment from "./Comment";

type Props = {
    jwtToken: string;
    paperId: number;
};

const CommentsSection = ({ jwtToken, paperId }: Props) => {
    const { data, error, isLoading } = useGetComments(jwtToken, paperId);


    if(isLoading) return <Box>Loading...</Box>;
    if(error) return <Box>Error...</Box>;


    return <Box display="flex" flexDirection="column" gap={2}>
        {data?.map((comment) => <PaperComment key={comment.id} comment={comment} />)}
    </Box>;
};

export default CommentsSection;
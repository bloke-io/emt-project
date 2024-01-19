import { Box } from "@chakra-ui/react";
import useGetComments from "../../../../hooks/useGetComments";
import { useAuth } from "../../../../providers/ConsumerHooks/useAuth";

type Props = {
    paperId: number;
}

const Comment = ({ paperId }: Props) => {
    const { user } = useAuth();

    const { data, error, isLoading } = useGetComments(user?.jwt ?? '',paperId);


    if(isLoading) return <Box>Loading...</Box>
    if(error) return <Box>Error...</Box>


    return (<Box>
        
    </Box>);
};

export default Comment;
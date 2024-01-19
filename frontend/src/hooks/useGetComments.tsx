import useSWR from "swr";
import axios from "axios";

import { apiRoutes } from "../constants";
import { Comment } from "../types/Comment";

const getQueryParams = (paperId: number) =>
  `?filters[science_paper][id][$eq]=${paperId}&populate=*`;

const getComments = async (
  jwtToken: string,
  paperId: number
): Promise<Comment[]> => {
  const getCommentsResponse = await axios.get(
    `${apiRoutes.comments}${getQueryParams(paperId)}`,
    {
      headers: {
        Authorization: `Bearer Bearer ${jwtToken}`,
      },
    }
  );

  return getCommentsResponse.data.data;
};

const useGetComments = (jwtToken: string, paperId: number) => {
  const { data, error } = useSWR(
    apiRoutes.comments,
    () => getComments(jwtToken, paperId),
    {
      revalidateOnFocus: false,
    }
  );

  return {
    data,
    error,
    isLoading: !data && !error,
  };
};

export default useGetComments;

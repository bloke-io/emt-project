import useSWR from "swr";
import axios from "axios";

import { apiRoutes } from "../constants";
import { Paper } from "../types/Paper";

const getQueryParams = (paperId: number) =>
  `?filters[$or][0][author][id][$eq]=${paperId}&filters[$or][1][reviewers][id][$eq]=${paperId}&populate=*`;

const getComments = async (
  jwtToken: string,
  paperId: number
): Promise<Paper[]> => {
  const getPapersResponse = await axios.get(
    `${apiRoutes.comments}${getQueryParams(paperId)}`,
    {
      headers: {
        Authorization: `Bearer Bearer ${jwtToken}`,
      },
    }
  );

  return getPapersResponse.data.data;
};

const useGetComments = (jwtToken: string, paperId: number) => {
  const { data, error } = useSWR(
    apiRoutes.papers,
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

import useSWR from "swr";
import axios from "axios";

import { apiRoutes } from "../constants";
import { Paper } from "../types/Paper";

const getQueryParams = (userId: number) =>
  `?filters[$or][0][author][id][$eq]=${userId}&filters[$or][1][reviewers][id][$eq]=${userId}&populate=*`;

const getPapers = async (
  jwtToken: string,
  userId: number
): Promise<Paper[]> => {
  const getPapersResponse = await axios.get(
    `${apiRoutes.papers}${getQueryParams(userId)}`,
    {
      headers: {
        Authorization: `Bearer Bearer ${jwtToken}`,
      },
    }
  );

  return getPapersResponse.data.data;
};

const useGetPapers = (jwtToken: string, userId: number) => {
  const { data, error } = useSWR(
    apiRoutes.papers,
    () => getPapers(jwtToken, userId),
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

export default useGetPapers;





import useSWR from "swr";
import axios from "axios";

import { apiRoutes } from "../constants";
import { Paper } from "../types/Paper";

const getQueryParams = (paperId: string) => `?filters[id][$eq]=${paperId}&populate=*`;

const getPaper = async (
  jwtToken: string,
  paperId: string
): Promise<Paper> => {
  const getPapersResponse = await axios.get(
    `${apiRoutes.papers}${getQueryParams(paperId)}`,
    {
      headers: {
        Authorization: `Bearer Bearer ${jwtToken}`,
      },
    }
  );

  return getPapersResponse.data.data[0];
};

const useGetPaper = (jwtToken: string, paperId: string) => {
  const { data, error } = useSWR(
    jwtToken ? `${apiRoutes.papers}/${paperId}` : null,
    () => getPaper(jwtToken, paperId),
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

export default useGetPaper;

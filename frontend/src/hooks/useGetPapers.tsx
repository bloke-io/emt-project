import useSWR from "swr";
import { apiRoutes } from "../constants";
import axios from "axios";
import { Paper } from "../types/Paper";

const getPapers = async (jwtToken: string, userId: number): Promise<Paper[]> => {
  const getPapersResponse = await axios.get(apiRoutes.papers, {
    headers: {
      Authorization: `Bearer ${jwtToken}`,
    },
    params: {
      "filters[$or][0][author][id][$eq]": userId,
      "filters[$or][1][reviewers][id][$eq]": userId,
      populate: "*",
    },
  });

  return getPapersResponse.data;
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

import useSWR from "swr";
import axios from "axios";

import { apiRoutes } from "../constants";
import { User } from "../types/User";

const getQueryParams = (userId: number) => `?filters[id][$ne]=${userId}`;

const getReviewers = async (jwtToken: string, userId: number): Promise<User[]> => {
  const getUserResponse = await axios.get(
    `${apiRoutes.users}${getQueryParams(userId)}`,
    {
      headers: {
        Authorization: `Bearer Bearer ${jwtToken}`,
      },
    }
  );

  return getUserResponse.data;
};

const useGetReviewers = (jwtToken: string, userId: number) => {
  const { data, error } = useSWR(
    apiRoutes.users,
    () => getReviewers(jwtToken, userId),
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

export default useGetReviewers;

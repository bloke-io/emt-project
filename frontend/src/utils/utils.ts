// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const createFetchFormData = (queryParams: any) => {
    const formData = new FormData();
    Object.keys(queryParams).forEach((key) => {
      if (Array.isArray(queryParams[key])) {
        queryParams[key].forEach((value: string) => formData.append(key, value));
      } else {
        formData.append(key, queryParams[key]);
      }
    });
    return formData;
  };
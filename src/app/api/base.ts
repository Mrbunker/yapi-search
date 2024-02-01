type ResponseData<D> = {
  errcode: string;
  errmsg: string;
  data: D | null;
};

const baseUrl = `${process.env.YAPI_HOST}/api`;
export const request = async <D>({
  apiPath,
  method = "GET",
  params,
  revalidate,
}: {
  apiPath: string;
  method?: "GET" | "POST";
  params?: Record<string, any>;
  revalidate?: NextFetchRequestConfig["revalidate"];
}) => {
  const cookie = `_yapi_token=${process.env.YAPI_TOKEN}; _yapi_uid=${process.env.YAPI_UID}`;
  const requestOptions: RequestInit = {
    method,
    next: { revalidate: revalidate },
    headers: {
      "Content-Type": "application/json",
      Cookie: cookie,
    },
  };
  if (method === "GET" && params) {
    apiPath += "?" + new URLSearchParams(params).toString();
  }

  if (method === "POST" && params) {
    requestOptions.body = JSON.stringify(params);
  }

  try {
    const response = await fetch(baseUrl + apiPath, requestOptions);

    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    const data: ResponseData<D> = await response.json();
    return data;
  } catch (error) {
    console.error("Request error:", error);
    throw error;
  }
};

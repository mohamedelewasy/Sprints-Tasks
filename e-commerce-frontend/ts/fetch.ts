import axios, { AxiosError } from "axios";

interface IfetchOption<Request> {
  url: string;
  method: "get" | "post" | "put" | "delete";
  body: Request;
  query?: unknown;
  token?: string;
}
export const fetchData = async <Request, Response>(
  option: IfetchOption<Request>
): Promise<Response> => {
  try {
    const res = await axios.request({
      url: option.url,
      method: option.method,
      data: option.body,
      params: option.query,
      headers: option.token ? { Authorization: option.token } : {},
    });
    return res.data;
  } catch (error) {
    throw new Error(
      ((error as AxiosError).response?.data as { message: string }).message
    );
  }
};

(async () => {
  try {
    const res = await fetchData<undefined, unknown>({
      url: "https://api.storerestapi.com/products/running-sneaker",
      method: "get",
      body: undefined,
    });
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
})();

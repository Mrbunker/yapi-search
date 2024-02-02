import { request } from "./base";

type ReqOption = {
  name: string;
  _id: string;
  required: 0 | 1;
};

/** @link [参数文档：https://hellosean1025.github.io/yapi/openapi.html](https://hellosean1025.github.io/yapi/openapi.html) */
export type InterfaceItem = {
  _id: string;
  project_id: number;
  catid: number;
  title: string;
  path: string;
  method: string;
  req_body_type: "json" | "form" | "raw";
  res_body: string;
  res_body_type: "json" | "raw";
  uid: number;
  add_time: number;
  up_time: number;
  __v: number;
  req_body_form: ReqOption[];
  req_params: ReqOption[];
  req_headers: ReqOption[];
  req_query: ReqOption[];
  query_path: {
    path: string;
  };
};

type menuItem = {
  _id: string;
  name: string;
  project_id: number;
  desc: string;
  list: InterfaceItem[];
};

export type MenuList = menuItem[];

export const getMenu = (params: { project_id: number }) => {
  return request<MenuList>({
    apiPath: "/interface/list_menu",
    method: "GET",
    params: params,
    revalidate: 10,
  });
};

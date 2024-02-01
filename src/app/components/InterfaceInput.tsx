"use client";
import { InterfaceItem } from "@/app/api/interface";
import { useState } from "react";

type Props = {
  data: InterfaceItem[];
} & React.InputHTMLAttributes<HTMLInputElement>;

const InterfaceInput = ({ data, ...restProps }: Props) => {
  const [value, setValue] = useState("");
  const filteredData = data.filter((item) => {
    return (
      item.path.toLowerCase().includes(value.toLowerCase()) ||
      item.title.toLowerCase().includes(value.toLowerCase())
    );
  });

  const urlPrefix = `${process.env.YAPI_HOST}/project/303/interface/api/`;
  return (
    <div className="p-2">
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="mb-4 rounded border p-2 w-full "
        {...restProps}
      />
      {filteredData.map((item) => (
        <div
          key={item.path}
          className="p-2 mb-2 border rounded cursor-pointer hover:bg-gray-400"
          onClick={() => {
            window.location.href = `${urlPrefix}${item._id}`;
          }}
        >
          <p>{item.title}</p>
          <p className="text-gray-500">{item.path}</p>
        </div>
      ))}
    </div>
  );
};

export default InterfaceInput;

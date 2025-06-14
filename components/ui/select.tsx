import { SelectHTMLAttributes } from "react";

export function Select(props: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className="border rounded px-3 py-2 text-sm shadow-sm bg-white"
    >
      {props.children}
    </select>
  );
}

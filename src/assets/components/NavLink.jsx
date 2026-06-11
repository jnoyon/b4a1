import React from "react";

export default function NavLink({ text, link }) {
  return (
    <div className="text-[#49423D] text-sm font-normal leading-5 cursor-pointer hover:text-[#37322F] transition-colors">
      {text}
    </div>
  );
}

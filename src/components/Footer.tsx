import React from "react";

const Footer = () => {
  return (
    <div className="bottom-0 bg-gray-800">
      <p className="p-4 text-sm text-center text-slate-400">
        &copy; Mahmoud Al Jarad, {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;

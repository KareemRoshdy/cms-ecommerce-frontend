import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="bg-white border-t">
      <div className="mx-auto py-10">
        <p className="text-center text-black font-semibold">
          &copy; {year} KareemStore, All right reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

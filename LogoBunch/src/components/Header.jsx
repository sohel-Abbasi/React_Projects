import React from "react";
import { Button } from "./ui/button";
import { Download } from "lucide-react";

const Header = ({ triggerDownload }) => {
  return (
    <div className="shadow-sm border m-1 flex justify-between items-center">
      <img src="/Logo1.png" alt="Logo" className="h-[60px] p-2 ml-2" />
      <Button
        className="bg-blue-700 text-white hover:bg-blue-500 mr-7 rounded flex gap-1 items-center justify-end"
        onClick={triggerDownload}
      >
        <Download />
        Download
      </Button>
    </div>
  );
};

export default Header;

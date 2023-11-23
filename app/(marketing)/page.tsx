import { Medal } from "lucide-react";
import React from "react";

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className="flex items-center justify-center flex-col">
        <div className="mb-4 flex items-center border shadow-sm p-4">
          <Medal className="h-6 w-6 mr-2" />
          No 1 task managment
        </div>
      </div>
    </div>
  );
};

export default MarketingPage;

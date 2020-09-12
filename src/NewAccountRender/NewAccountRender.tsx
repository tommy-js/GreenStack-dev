import React, { useState } from "react";
import { PageOne, PageTwo } from "./RenderPages";

const NewAccountRender: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  function renderCurrentPage() {
    if (currentPage === 0) {
      return (
        <div>
          <PageOne />
        </div>
      );
    } else if (currentPage === 1) {
      return (
        <div>
          <PageTwo />
        </div>
      );
    }
  }

  return <div>{renderCurrentPage()}</div>;
};

export default NewAccountRender;

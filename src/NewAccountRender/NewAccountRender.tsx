import React, { useState } from "react";
import { PageOne, PageTwo } from "./RenderPages";

const NewAccountRender: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  function nextPage(id: number) {
    setCurrentPage(id + 1);
  }

  function backPage(id: number) {
    setCurrentPage(id - 1);
  }

  function renderCurrentPage() {
    if (currentPage === 0) {
      return (
        <div>
          <PageOne id={0} nextPage={nextPage} backPage={backPage} />
        </div>
      );
    } else if (currentPage === 1) {
      return (
        <div>
          <PageTwo id={1} nextPage={nextPage} backPage={backPage} />
        </div>
      );
    }
  }

  return <div id="render_questions_page">{renderCurrentPage()}</div>;
};

export default NewAccountRender;

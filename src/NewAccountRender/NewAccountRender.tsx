import React, { useState } from "react";
import { PageOne, PageTwo, PageThree } from "./RenderPages";

interface Props {
  submit: () => void;
}

const NewAccountRender: React.FC<Props> = (props) => {
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
    } else if (currentPage === 2) {
      return (
        <div>
          <PageThree
            id={2}
            nextPage={nextPage}
            backPage={backPage}
            submit={props.submit}
          />
        </div>
      );
    }
  }

  return <div id="render_questions_page">{renderCurrentPage()}</div>;
};

export default NewAccountRender;

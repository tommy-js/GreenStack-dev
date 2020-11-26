import React, { useState } from "react";
import { RenderPageOne } from "../RenderPageOne/RenderPageOne";
import { RenderPageTwo } from "../RenderPageTwo/RenderPageTwo";
import { RenderPageThree } from "../RenderPageThree/RenderPageThree";

interface Props {
  submit: () => void;
}

export const NewAccountRender: React.FC<Props> = (props) => {
  const [currentPage, setCurrentPage] = useState(0);

  function nextPage(id: number) {
    setCurrentPage(id + 1);
  }

  function backPage(id: number) {
    setCurrentPage(id - 1);
  }

  function renderCurrentPage() {
    if (currentPage === 0) {
      return <RenderPageOne id={0} nextPage={nextPage} backPage={backPage} />;
    } else if (currentPage === 1) {
      return <RenderPageTwo id={1} nextPage={nextPage} backPage={backPage} />;
    } else if (currentPage === 2) {
      return (
        <RenderPageThree
          id={2}
          nextPage={nextPage}
          backPage={backPage}
          submit={props.submit}
        />
      );
    }
  }

  return <div id="render_questions_page">{renderCurrentPage()}</div>;
};

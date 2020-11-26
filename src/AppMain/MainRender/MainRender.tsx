import React, { useEffect, useState, useContext } from "react";
import { LearnGlossaryPage } from "../../about/LearnGlossaryPage/LearnGlossaryPage";
import { LearnBasicsPage } from "../../about/LearnBasicsPage/LearnBasicsPage";
import { LearnOptionsPage } from "../../about/LearnOptionsPage/LearnOptionsPage";
import { LearnProtectionPage } from "../../about/LearnProtectionPage/LearnProtectionPage";
import { Portfolio } from "../../portfolio/Portfolio/Portfolio";
import { AboutPage } from "../../about/AboutPage/AboutPage";
import { Homepage } from "../../Homepage/Homepage/Homepage";
import { NewAccountRender } from "../../NewAccountRender/NewAccountRender/NewAccountRender";
import { NotificationsPage } from "../../notifications/NotificationsPage/NotificationsPage";
import { Route, Switch } from "react-router-dom";
import { statusContext } from "../App/App";
import { browserHist } from "../history.js";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";

interface Props {
  newaccount: any;
}

const MRender: React.FC<Props> = (props) => {
  const { status } = useContext(statusContext);
  const [newacc, setNewacc] = useState(true);

  useEffect(() => {
    if (status === false) {
      browserHist.push("/login");
    }
  }, []);

  useEffect(() => {
    setNewacc(props.newaccount);
  }, []);

  function submit() {
    setNewacc(false);
  }

  function returnRenderPath() {
    if (newacc === true) return <NewAccountRender submit={submit} />;
    else if (newacc === false) {
      return (
        <div id="push_under_navbar">
          <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/home">
              <Homepage />
            </Route>
            <Route exact path="/about">
              <AboutPage />
            </Route>
            <Route exact path="/notifications">
              <NotificationsPage />
            </Route>
          </Switch>
          <Switch>
            <Route path="/about/glossary">
              <LearnGlossaryPage />
            </Route>
            <Route path="/about/learn/general">
              <LearnBasicsPage />
            </Route>
            <Route path="/about/learn/options">
              <LearnOptionsPage />
            </Route>
            <Route path="/about/learn/protection">
              <LearnProtectionPage />
            </Route>
          </Switch>
        </div>
      );
    }
  }

  return <React.Fragment>{returnRenderPath()}</React.Fragment>;
};

export const MainRender = connect(mapStateToProps)(MRender);

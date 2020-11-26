import React, { useState, useEffect, useContext } from "react";
import { NavBar } from "../../navigation/NavBar/NavBar";
import { CommentSection } from "../CommentSection/CommentSection";
import { LearnGraphs } from "../LearnGraphs/LearnGraphs.jsx";
import { SP500HalfDecade } from "../graphData.js";
import { Link } from "react-router-dom";
import { useQuery } from "react-apollo";
import { tutorialQuery } from "../../queries/queries";

export const LearnProtectionPage: React.FC = () => {
  const { data } = useQuery(tutorialQuery, {
    variables: { id: 4 },
    pollInterval: 500,
  });
  const [comments, setComments] = useState([] as any);
  useEffect(() => {
    if (data && data.tutorial) {
      setComments(data.tutorial.comments);
    }
  }, [data]);
  return (
    <div>
      <NavBar />
      <div className="learn_page">
        <h2 className="learn_page_header">Diversification</h2>
        <p className="learn_page_paragraph">
          The stock market can be a volatile place, and many traders have lost
          fortunes through not protecting themselves well enough. In this
          tutorial we'll give you some pointers for how to continue growing
          amidst uncertain times.
        </p>
        <p className="learn_page_paragraph">
          It can be tempting when looking at stocks such as Amazon, Tesla, or
          Apple to just put everything in these companies. However, the stock
          market can be a risky place. Even though it is very unlikely, there is
          always the possibility that a company like Amazon or Apple begins to
          fail, or are outpaced by the general market.
        </p>
        <p className="learn_page_paragraph">
          There are two main ways investors protect their assets, and both rely
          on the same general idea. The first is through manual{" "}
          <Link className="featureless_link" to="/about/glossary">
            <span className="emphasize">diversification</span>
          </Link>
          . This is the process of splitting up your portfolio among many
          stocks, and ideally many different sectors. For example, you might buy
          AMD stock, which is in the tech sector, as well as McDonalds stock,
          which is a member of the service industry.
        </p>
        <p className="learn_page_paragraph">
          The motivation for doing this is simple; over time, the economy as a
          whole tends to grow. Individual companies may die off, but if you're
          looking for consistent, long-term growth, buying into the larger
          economy as a whole is your best bet.
        </p>

        <LearnGraphs
          points={SP500HalfDecade.points}
          graphicalEffects={SP500HalfDecade.graphicalEffects}
          contentsDiv="sp_5_year"
        />

        <p className="learn_page_paragraph">
          The graph above shows the value of the S&P 500 from 2011 to 2020. The
          S&P 500 is an{" "}
          <Link className="featureless_link" to="/about/glossary">
            <span className="emphasize">index</span>
          </Link>
          , or a measurement that takes account of a number of stocks. In the
          case of the S&P 500, it is an index that measures the value of the 500
          largest companies listed on US stock exchanges.
        </p>
        <p className="learn_page_paragraph">
          You can get a sense of how the overall economy is doing from these
          kinds of graphs. Just from looking at the one above you can tell that
          the economic state of the US has improved drastically in only a few
          years.
        </p>
        <CommentSection id="4" comments={comments} />
      </div>
    </div>
  );
};

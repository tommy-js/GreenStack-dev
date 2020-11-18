import React, { useState, useEffect } from "react";
import NewsComponent from "../Homepage/NewsComponent";
import Header from "../User/Header";
import { useQuery } from "react-apollo";
import { returnNewsQuery } from "../queries/queries";

const CompanyNewsBlock = (props) => {
  const [loggedNews, setLoggedNews] = useState();
  const [shortLoggedNews, setShortLoggedNews] = useState();
  const [maxLength, setMaxLength] = useState();
  const { data, loading } = useQuery(returnNewsQuery, {
    variables: { title: props.title },
  });

  useEffect(() => {
    if (data) {
      if (data.returnNews.articles) {
        setLoggedNews(data.returnNews.articles);
        setMaxLength(data.returnNews.articles.length);
        let shortenedArray = data.returnNews.articles.slice(0, 3);
        setShortLoggedNews(shortenedArray);
      } else {
        setLoggedNews([]);
        setShortLoggedNews([]);
      }
    }
  }, [data]);

  function loadMore() {
    if (shortLoggedNews.length - 5 <= maxLength) {
      let arr = loggedNews.slice(0, shortLoggedNews.length + 5);
      setShortLoggedNews(arr);
    }
  }

  useEffect(() => {}, [loggedNews]);

  function passData() {
    if (shortLoggedNews) {
      return (
        <div>
          {shortLoggedNews.map((el) => (
            <div>
              <NewsComponent
                title={el.title}
                author={el.author}
                description={el.description}
                url={el.url}
              />
            </div>
          ))}
          <button className="center_button" onClick={() => loadMore()}>
            Load more
          </button>
        </div>
      );
    } else {
      return null;
    }
  }

  return (
    <div id="news_component">
      <Header text="News" />
      {passData()}
    </div>
  );
};

export default CompanyNewsBlock;

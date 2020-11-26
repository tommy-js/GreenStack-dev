import React, { useState, useEffect } from "react";
import { NewsComponent } from "../../Homepage/NewsComponent/NewsComponent";
import { Header } from "../../User/Header/Header";
import { useQuery } from "react-apollo";
import { returnNewsQuery } from "../../queries/queries";

export const CompanyNewsBlock = (props: any) => {
  const [loggedNews, setLoggedNews] = useState();
  const [shortLoggedNews, setShortLoggedNews] = useState();
  const [maxLength, setMaxLength] = useState();
  const { data } = useQuery(returnNewsQuery, {
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

  function passData() {
    if (shortLoggedNews) {
      return (
        <React.Fragment>
          {shortLoggedNews.map((el: any) => (
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
        </React.Fragment>
      );
    } else return null;
  }

  return (
    <div id="news_component">
      <Header text="News" />
      {passData()}
    </div>
  );
};

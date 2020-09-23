import React, { useState, useEffect } from "react";
import NewsComponent from "../Homepage/NewsComponent";
import Header from "../Header";

const CompanyNewsBlock = (props) => {
  const [loggedNews, setLoggedNews] = useState();
  const [shortLoggedNews, setShortLoggedNews] = useState();
  const [maxLength, setMaxLength] = useState();

  useEffect(() => {
    var url =
      "http://newsapi.org/v2/everything?" +
      `q=${props.title}&` +
      "from=2020-07-20&" +
      "sortBy=popularity&" +
      "apiKey=b35524fdc67945b19ed0553c2a92327f";

    var req = new Request(url);
    fetch(req)
      .then(function (response) {
        return response.json();
      })
      .then((el) => {
        setLoggedNews(el.articles);
        setMaxLength(el.articles.length);
        let shortenedArray = el.articles.slice(0, 3);
        setShortLoggedNews(shortenedArray);
      })
      .catch((error) => {
        console.log("cannot get articles");
        setShortLoggedNews([]);
      });
  }, []);

  function loadMore() {
    if (shortLoggedNews.length - 5 <= maxLength) {
      let arr = loggedNews.slice(0, shortLoggedNews.length + 5);
      setShortLoggedNews(arr);
    }
  }

  useEffect(() => {
    console.log(loggedNews);
  }, [loggedNews]);

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
              <button className="center_button" onClick={() => loadMore()}>
                Load more
              </button>
            </div>
          ))}
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

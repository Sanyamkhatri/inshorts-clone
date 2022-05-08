import { Container } from "@mui/material";
import "./NewsContent.css";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";

const NewsContent = (props) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            For the best experience use inshorts app on your smartphone
          </span>
          <img
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            alt="appstore"
            height="80%"
          />
          <img
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
            alt="playStore-logo"
            height="80%"
          />
        </div>
        {props.newsArray.map((newsItem) => (
          <NewsCard newsdata={newsItem} key={newsItem.title} />
        ))}
        {props.loadmore <= props.NewsResult && (
          <React.Fragment>
            <hr />
            <button className="loadMore" onClick={() => props.setLoadmore(props.loadmore + 20)}>Load More</button>
          </React.Fragment>
        )}
      </div>
    </Container>
  );
};

export default NewsContent;

import React, { useContext } from "react";

import {NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";


function News(props) {
    const { data } = useContext(NewsContext);
    
    return (
        <div>
        <h1 className="head_text"> Latest News </h1>
        <div className = "all_news">
        {data ? data.articles.map(news => (
            <NewsArticle data={news} key = {news.url} />
        ))
        : "Loading"
    }
    </div>
        </div>
    );
    
}

export default News;
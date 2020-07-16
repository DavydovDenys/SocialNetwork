import React from "react";
import s from './News.module.css'

const News = () => {
  return (
    <div className={s.item}>
      <h1>News</h1>
      <img src="https://content.indiainfoline.com/_media/iifl/img/misc/2015-08/03/full/world-news-1438594300-977300.jpg" alt="news"/>
    </div>
  );
}

export default News;
import React from "react";

import { Link } from "react-router-dom";
import datas from "./data";

const NewsArticle = () => {
  console.log(datas);
  return (
    <article className="container flex translate-y-32 gap-7 p-5 mb-5">
      {datas.map((data, key) => {
        return (
          <div
            className="news bg-black text-white p-1 rounded-md"
            key={data.id}
          >
            <img src={data.imageSrc} alt="img" />
            <Link to={data.link} className="underline underline-offset-1">
              {data.title}
            </Link>
          </div>
        );
      })}
    </article>
  );
};

export default NewsArticle;

import React from "react";

import Link from "next/link";

import datas from "./data";

const NewsArticle = () => {
  console.log(datas);
  return (
    <article className="container flex translate-y-32 gap-7 p-5 mb-5 ">
      {datas.map((data, key) => {
        return (
          <div
            className="news bg-black text-white p-4 rounded-sm"
            key={data.id}
          >
            <img src={data.imageSrc} alt="img" />
            <Link href={data.link} className="underline underline-offset-1">
              {data.title}
            </Link>
          </div>
        );
      })}
    </article>
  );
};

export default NewsArticle;

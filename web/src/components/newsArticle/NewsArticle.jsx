import React from "react";

import Link from "next/link";

import datas from "./data";

const NewsArticle = () => {
  // console.log(datas);
  return (
    <article className="flex md:flex-row flex-col justify-center gap-7 p-3 mb-5 translate-y-12">
      {datas.map((data, key) => {
        return (
          <div
            className="news bg-black text-white p-6 rounded-xl min-w-min"
            key={data.id}
          >
            <img src={data.imageSrc} alt="img" className="" />
            <Link href={data.link} className="">
              {data.title}
            </Link>
          </div>
        );
      })}
    </article>
  );
};

export default NewsArticle;

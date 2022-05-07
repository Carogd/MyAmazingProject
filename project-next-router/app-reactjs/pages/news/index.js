import React from 'react'
import Link from 'next/link';
import { Fragment } from "react";

function NewsPage() {
  return (
    <>
      <h1> the news </h1>
      <ul>
        <li>
          <Link href="/news/article01">Article 01</Link>
        </li>
        <li>
          <Link href="/news/article02">Article 02</Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;

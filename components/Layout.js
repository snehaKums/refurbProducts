import React from "react";
import Head from 'next/head';

function Layout (props)  {

  return (
    <div>
      <Head>
        <title>{props.pageTitle}</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="theme-color" content="#fff" />
        <meta name="description" content="Product refurb website" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <div>
        {props.children}
      </div>

    </div>
  )
}
export default Layout;
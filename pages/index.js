import React, { Component } from "react";

import Head from "next/head";
import styles from "../styles/Home.module.css";

function initNetlifyIdentity() {
  console.log("initNetlifyIdentity called");
  const script = document.createElement("script");

  script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
  script.async = true;

  document.body.appendChild(script);
}

function openNetlifyModal() {
  const netlifyIdentity = window.netlifyIdentity;

  if (netlifyIdentity) {
    netlifyIdentity.open();
  } else {
    console.log("netlifyIdentity not defined");
  }
}

class NetlifyIdentity extends Component {
  componentDidMount() {
    initNetlifyIdentity();
  }
  render() {
    return <div></div>;
  }
}

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Test</title>
      </Head>

      <NetlifyIdentity />

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <h1
          onClick={() => {
            openNetlifyModal();
          }}
        >
          Login
        </h1>
      </main>
    </div>
  );
};

export default Home;

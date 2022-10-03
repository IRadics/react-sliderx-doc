import React from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">
          <span style={{ color: "#808080" }}>{"<"}</span>
          <span style={{ color: "#3cc9a3" }}>SliderX</span>
          <span style={{ color: "#808080" }}>{">"}</span>
          <span className="cursor" style={{ color: "#aeafad" }}>
            |
          </span>
        </h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>

        <div className={styles.buttons}>
          <div className={styles.buttonMainPage}>
            <Link
              className="button button--secondary button--lg buttonHeader"
              to="/docs/intro"
            >
              Documentation
            </Link>
          </div>
          <div className={styles.buttonMainPage}>
            <Link
              className="button button--secondary button--lg buttonHeader"
              to="/docs/intro"
            >
              Examples
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      //title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

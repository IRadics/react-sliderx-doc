import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { EnumSliderXOptions, SliderXSelector } from "@iradics/react-sliderx";
import "./styles.module.css";
import { useState } from "react";

export default function HomepageFeatures() {
  const [installIndex, setInstallIndex] = useState(0);
  return (
    <div className={styles.mainBody}>
      <h1>Install:</h1>
      <code className="codeBlock">
        {
          [
            "npm install @iradics/react-sliderx@latest",
            "yarn add @iradics/react-sliderx@latest",
          ][installIndex]
        }
      </code>
      <div className={"sliderXContainer"}>
        <SliderXSelector
          optionCount={2}
          labels={["npm", "yarn"]}
          colors={["#cb3738", "#2f8eb8"]}
          className={"sliderXPackageSelector"}
          animationTime={100}
          onChange={(index) => {
            setInstallIndex(index);
          }}
          options={EnumSliderXOptions.ClickableLabels}
        ></SliderXSelector>
      </div>
    </div>
  );
}

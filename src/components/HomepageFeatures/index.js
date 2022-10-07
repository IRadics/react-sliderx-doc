import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { EnumSliderXOptions, SliderXSelector } from "@iradics/react-sliderx";
import "./styles.module.css";
import { useState } from "react";

const features = () => {
  return (
    <div>
      <h3>Easy to customize, lightweight</h3>
    </div>
  );
};

export default function HomepageFeatures() {
  const [installIndex, setInstallIndex] = useState(0);
  return (
    <div className={styles.mainBody}>
      {features()}
      <h2>Install:</h2>
      <code className="codeBlock">
        {
          [
            "npm install @iradics/react-sliderx",
            "yarn add @iradics/react-sliderx",
          ][installIndex]
        }
      </code>
      <div className={"sliderXPackageSelectorWrapper"}>
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

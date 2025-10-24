import React from "react";
import * as styles from "./about-content.module.css";

const AboutContent = ({ htmlContent }) => {
  return (
    <div className={styles.container}>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
};

export default AboutContent;

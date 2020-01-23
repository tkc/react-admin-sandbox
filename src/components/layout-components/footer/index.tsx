import React from "react";
import styles from "./style.module.scss";

export function Footer(props: any) {
  return (
    <div className={styles.footer}>
      <div className={styles.inner}>
        <div className="row">
          <div className="col-lg-9">
            <p>
              <strong>Clean UI React Admin Template - Best Solution for Your App!</strong>
            </p>
            <p>
              Clean UI – a modern professional admin template, based on Bootstrap 4 framework. Clean UI is a powerful
              and super flexible tool, which suits best for any kind of web application: Web Applications; CRM; CMS;
              Admin Panels; Dashboards; etc. Clean UI is fully responsive, which means that it looks perfect on mobiles
              and tablets.
            </p>
            <p>
              Clean UI is fully based on SASS pre-processor, includes 50+ commented SASS files. Each file corresponds to
              a single component, layout, page, plugin or extension – so you can easily find necessary piece of code and
              edit it for your needs. The package includes both normal and minified CSS files, compiled from SASS.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { FC } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import cx from "classnames";

import "./index.css";

type LoadingProps = {
  light?: boolean;
};

const Loading: FC<LoadingProps> = ({ light }) => (
  <div>
    <h1
      className={cx("loading", {
        "lm-text": light,
        "dm-text": !light,
      })}
    >
      L<ClipLoader loading color={light ? "#000000" : "#ffffff"} size={18} />
      ading...
    </h1>
  </div>
);

export default Loading;

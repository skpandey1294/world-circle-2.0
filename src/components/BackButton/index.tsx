import React, { FC } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import { buttonNames } from "../../constants";

import "./index.css";

type BackButtonProps = {
  light?: boolean;
};

const BackButton: FC<BackButtonProps> = ({ light }) => (
  <div className="btn-wrapper">
    <Link to="/">
      <button
        className={cx("btn-back", {
          "lm-text bg-lm": light,
          "dm-text bg-dm": !light,
        })}
      >
        {buttonNames.BACK}
      </button>
    </Link>
  </div>
);

export default BackButton;

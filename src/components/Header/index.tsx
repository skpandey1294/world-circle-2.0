import React, { FC } from "react";
import cx from "classnames";
import { title, buttonNames } from "../../constants";

import "./index.css";

type HeaderProps = {
  light?: boolean;
  darkModeHandler: () => void;
};

const Header: FC<HeaderProps> = ({ light, darkModeHandler }) => (
  <div
    className={cx("header", {
      "bg-lm": light,
      "bg-dm": !light,
    })}
  >
    <h2 className={cx("font-bold", { "lm-text": light, "dm-text": !light })}>
      {title.WHERE_IN_THE_WORLD}
    </h2>
    <button className="btn btn-transparent" onClick={darkModeHandler}>
      <span className={cx("oval-shape", { sun: !light, moon: light })}></span>
      <span
        className={cx("font-bold", { "lm-text": light, "dm-text": !light })}
      >
        {light ? buttonNames.DARK_MODE : buttonNames.LIGHT_MODE}
      </span>
    </button>
  </div>
);

export default Header;

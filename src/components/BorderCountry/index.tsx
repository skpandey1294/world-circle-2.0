import React, { FC } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";

import "./index.css";

type BorderCountryProps = {
  border: string;
  onClick: (value: string) => void;
  light?: boolean;
};

const BorderCountry: FC<BorderCountryProps> = ({ border, onClick, light }) => (
  <Link to={`/country/${border}`} key={border}>
    <button
      className={cx("btn-border", {
        "bg-lm": light,
        "bg-dm": !light,
      })}
      onClick={() => onClick(border)}
    >
      {border}
    </button>
  </Link>
);

export default BorderCountry;

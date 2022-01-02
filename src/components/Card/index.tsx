import React, { FC } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import { PrimaryDetails } from "..";
import {
  getCountryName,
  getCountryCapital,
  getCountryFlag,
  getCornerCard,
} from "../../Util";
import { CountryPrimaryDetailsProps } from "../../Types/types";

import "./index.css";

export type CardProps = {
  light: boolean;
  index: number;
  country: CountryPrimaryDetailsProps;
};

const Card: FC<CardProps> = ({ light, index, country }) => {
  const countryName = getCountryName(country);
  const countryCapital = getCountryCapital(country);
  const countryFlag = getCountryFlag(country);
  const cornerCard = getCornerCard(index);

  return (
    <button
      className={cx(`card-btn ${cornerCard}`, {
        "card-btn-lm bg-lm dm": light,
        "bg-dm lm": !light,
      })}
    >
      <Link
        className={cx({
          "lm-text": light,
          "dm-text": !light,
        })}
        to={`/country/${countryName}/${countryCapital}`}
      >
        <img className="flag" src={countryFlag} alt="flag" />
        <PrimaryDetails light={light} country={country} />
      </Link>
    </button>
  );
};

export default Card;

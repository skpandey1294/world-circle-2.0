import React, { FC } from "react";
import cx from "classnames";
import {
  getCountryName,
  getCountryCapital,
  getCountryPopulation,
  getCountryRegion,
} from "../../Util";
import { contriesSecondaryDetails } from "../../constants";
import { CountryPrimaryDetailsProps } from "../../Types/types";

import "./index.css";

export type PrimaryDetailsProps = {
  light: boolean;
  country: CountryPrimaryDetailsProps;
};

const PrimaryDetails: FC<PrimaryDetailsProps> = ({ light, country }) => {
  const countryName = getCountryName(country);
  const countryCapital = getCountryCapital(country);
  const countryPopulation = getCountryPopulation(country);
  const countryRegion = getCountryRegion(country);

  return (
    <div className="countries-top-details">
      <h3
        className={cx({
          "lm-text": light,
          "dm-text": !light,
        })}
      >
        {countryName}
      </h3>
      <span>
        <span className="font-bold">{contriesSecondaryDetails.POPULATION}</span>
        : {countryPopulation}
      </span>
      <span>
        <span className="font-bold">{contriesSecondaryDetails.REGION}</span>:
        {countryRegion}
      </span>
      <span>
        <span className="font-bold">{contriesSecondaryDetails.CAPITAL}</span>:
        {countryCapital}
      </span>
    </div>
  );
};

export default PrimaryDetails;

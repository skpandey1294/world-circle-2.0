import React, { FC, useState } from "react";
import cx from "classnames";
import { BackButton, BorderCountry } from "..";
import { apiCallByAlphaCode } from "../../utils";
import { contriesSecondaryDetails as details } from "../../constants";
import { CountrySecondaryDetailsProps as CountryProps } from "../../Types/types";

import "./index.css";

type SecondaryDetailsProps = {
  country: CountryProps;
  light?: boolean;
};

const SecondaryDetails: FC<SecondaryDetailsProps> = ({ country, light }) => {
  const [targetCountry, setTargetCountry] = useState<CountryProps>(country);

  const onClick = (alphaCode: string) => {
    apiCallByAlphaCode(alphaCode)
      .then((response: CountryProps[]) => setTargetCountry(response[0]))
      .catch((e: any) => console.error(e));
  };

  return (
    <div className="country-details">
      <BackButton light={light} />
      <div className="country-details-container">
        <img className="img" src={`${targetCountry.flag}`} alt="flag" />
        <div className="details">
          <h1
            className={cx({
              "lm-text": light,
              "dm-text": !light,
            })}
          >
            {targetCountry.name}
          </h1>
          <div className="details-wrapper">
            <div className="country-details-headings">
              <div>
                <span className="span"> {details.NATIVE_NAME} </span>:
                {targetCountry.nativeName}
              </div>
              <div>
                <span className="span"> {details.POPULATION} </span>:
                {targetCountry.population}
              </div>
              <div>
                <span className="span"> {details.REGION} </span>:
                {targetCountry.region}
              </div>
              <div>
                <span className="span"> {details.SUB_REGION} </span>:
                {targetCountry.subregion}
              </div>
              {targetCountry.capital && (
                <div>
                  <span className="span"> {details.CAPITAL} </span>:
                  {targetCountry.capital}
                </div>
              )}
            </div>
            <div>
              <div>
                <span className="span"> {details.TOP_LEVEL_DOMAIN} </span>:
                {`${targetCountry.topLevelDomain}`}
              </div>
              {targetCountry.currencies && (
                <div>
                  <span className="span"> {details.CURRENCIES} </span>:
                  {targetCountry.currencies[0].name}
                </div>
              )}
              <div>
                <span className="span"> {details.LANGUAGE} </span>:
                {targetCountry.languages.map((language) => `${language.name},`)}
              </div>
            </div>
          </div>
          {targetCountry.borders && (
            <div className="border-countries">
              <span className="span"> {details.BORDER_COUNTRIES} </span>:
              {targetCountry.borders.map((border) => (
                <BorderCountry
                  border={border}
                  onClick={onClick}
                  light={light}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SecondaryDetails;

import React, { FC, Fragment, useEffect, useState } from "react";
import { SecondaryDetails, Loading } from "..";
import { CountrySecondaryDetailsProps } from "../../Types/types";
import { apiCall } from "../../utils";

import "./index.css";

type CountryDetailsProps = {
  name: string;
  capital: string;
  light?: boolean;
};

const CountryDetails: FC<CountryDetailsProps> = ({ name, capital, light }) => {
  const [country, setCountry] = useState<CountrySecondaryDetailsProps | null>();
  const fetchParams =
    name !== "Antarctica" ? `capital/${capital}` : `name/${name}`;

  useEffect(() => {
    if (localStorage.getItem(name)) {
      setCountry(JSON.parse(localStorage.getItem(name) as any));
    } else {
      apiCall(fetchParams)
        .then((response: CountrySecondaryDetailsProps[]) => {
          localStorage.setItem(name, JSON.stringify(response[0]));
          setCountry(response[0]);
        })
        // FIXME: Handle error properly
        .catch((e: any) => console.error(e));
    }
  }, []);

  return (
    <Fragment>
      <div className="details-container">
        {country === undefined ? (
          <Loading light={light} />
        ) : (
          <SecondaryDetails
            country={country as CountrySecondaryDetailsProps}
            light={light}
          />
        )}
      </div>
    </Fragment>
  );
};

export default CountryDetails;

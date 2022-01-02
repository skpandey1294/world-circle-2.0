import React, { Component } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import { contriesSecondaryDetails as details } from "../../constants";
import { getCountryCapital } from "../../Util/index";
import "./Card.css";

class Card extends Component {
  render() {
    const { country: countries, light } = this.props;
    const { POPULATION, REGION, CAPITAL } = details;

    const countriesDetails = countries.map((country) => {
      let capital = getCountryCapital(country);
      // country.name === "Antarctica" ? "No Capital" : country.capital;
      return (
        <button
          className={cx("card-btn", {
            "bg-lm dm": light,
            "bg-dm lm": !light,
          })}
        >
          <Link
            className={cx({
              "lm-text": light,
              "dm-text": !light,
            })}
            to={`/country/${country.name}/${capital}`}
          >
            <img className="flag" src={country.flag} alt="flag" />
            <div className="countries-top-details">
              <h3
                className={cx({
                  "lm-text": light,
                  "dm-text": !light,
                })}
              >
                <b>{country.name}</b>
              </h3>
              <div>
                <b> {POPULATION} </b>: {country.population}
              </div>
              <div>
                <b> {REGION} </b>: {country.region}
              </div>
              <div>
                <b> {CAPITAL} </b>: {country.capital}
              </div>
            </div>
          </Link>
        </button>
      );
    });
    return <div className="countries-list">{countriesDetails}</div>;
  }
}

export default Card;

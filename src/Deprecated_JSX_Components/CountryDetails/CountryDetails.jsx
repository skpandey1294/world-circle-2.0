import React, { Component, Fragment } from "react";
import cx from "classnames";
import { Link } from "react-router-dom";
import { apiCall, apiCallByAlphaCode } from "../../utils";
import {
  contriesSecondaryDetails as details,
  loading,
  buttonNames,
} from "../../constants";
import "./CountryDetails.css";

class CountryDetails extends Component {
  constructor() {
    super();
    this.state = {
      country: [],
    };
  }

  componentDidMount() {
    let country = `name/${this.props.name}`;
    let capital = `capital/${this.props.capital}`;
    let params = this.props.name === "Antarctica" ? country : capital;
    apiCall(params)
      .then((data) => {
        this.setState({
          country: data,
        });
      })
      .catch((err) => console.error(err));
  }

  onClick = (alphaCode) => {
    apiCallByAlphaCode(alphaCode).then((data) => {
      this.setState({
        country: data,
      });
    });
  };

  render() {
    const { light } = this.props;
    return (
      <Fragment>
        <div className="details-container">
          {this.state.country[0] === undefined ? (
            <div>
              <h1
                className={cx({
                  "lm-text": light,
                  "dm-text": !light,
                })}
              >
                {loading.LOADING}
              </h1>
            </div>
          ) : (
            <div className="country-details">
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

              <div className="country-details-container">
                <div>
                  <img
                    className="img"
                    src={`${this.state.country[0].flag}`}
                    alt="flag"
                  />
                </div>
                <div className="details">
                  <div>
                    <h1
                      className={cx({
                        "lm-text": light,
                        "dm-text": !light,
                      })}
                    >
                      {this.state.country[0].name}
                    </h1>
                  </div>
                  <div className="details-wrapper">
                    <div className="country-details-headings">
                      <div>
                        <b> {details.NATIVE_NAME} </b>:
                        {this.state.country[0].nativeName}
                      </div>
                      <div>
                        <b> {details.POPULATION} </b>:
                        {this.state.country[0].population}
                      </div>
                      <div>
                        <b> {details.REGION} </b>:{this.state.country[0].region}
                      </div>
                      <div>
                        <b> {details.SUB_REGION} </b>:
                        {this.state.country[0].subregion}
                      </div>
                      <div>
                        <b> {details.CAPITAL} </b>:
                        {this.state.country[0].capital}
                      </div>
                    </div>
                    <div>
                      <div>
                        <b> {details.TOP_LEVEL_DOMAIN} </b>:
                        {`${this.state.country[0].topLevelDomain}`}
                      </div>
                      <div>
                        <b> {details.CURRENCIES} </b>:
                        {this.state.country[0].currencies[0].name}
                      </div>
                      <div>
                        <b> {details.LANGUAGE} </b>:
                        {this.state.country[0].languages.map(
                          (language) => `${language.name}, `
                        )}
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="border-countries">
                      <b> {details.BORDER_COUNTRIES} </b>:
                      {this.state.country[0].borders.map((border) => (
                        <Link to={`/country/${border}`}>
                          <button
                            className={cx("btn-border", {
                              "bg-lm": light,
                              "bg-dm": !light,
                            })}
                            onClick={() => this.onClick(border)}
                          >
                            {border}
                          </button>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </Fragment>
    );
  }
}

export default CountryDetails;

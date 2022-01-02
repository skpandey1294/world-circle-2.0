import React, { Component, Fragment } from "react";
import { title, buttonNames } from "../../constants";
import cx from "classnames";
import "./Header.css";

class Header extends Component {
  render() {
    const { WHERE_IN_THE_WORLD } = title;
    const { LIGHT_MODE, DARK_MODE } = buttonNames;
    const { darkModeHandler, light } = this.props;
    return (
      <div
        className={cx("header", {
          "bg-lm": light,
          "bg-dm": !light,
        })}
      >
        <h2 className={cx({ "lm-text": light, "dm-text": !light })}>
          <b> {WHERE_IN_THE_WORLD} </b>
        </h2>
        <Fragment>
          <button className="btn btn-transparent" onClick={darkModeHandler}>
            <b className={cx({ "lm-text": light, "dm-text": !light })}>
              {light ? DARK_MODE : LIGHT_MODE}
            </b>
          </button>
        </Fragment>
      </div>
    );
  }
}

export default Header;

import React, { Component, Fragment } from "react";
import { Header, CountryDetails } from "../../components";
import { ThemeProvider } from "styled-components";
import { modeHandler, GlobalStyle } from "../../utils";

class DetailPage extends Component {
  constructor() {
    super();
    this.state = {
      theme: { mode: localStorage.getItem("mode") },
      light: localStorage.getItem("mode") === "dark" ? false : true,
    };
  }

  darkModeHandler = () => {
    modeHandler();
    this.setState({
      theme:
        this.state.theme.mode === "dark" ? { mode: "white" } : { mode: "dark" },
      light: this.state.theme.mode === "dark" ? true : false,
    });
  };

  render() {
    const { theme, light } = this.state;
    const { name, capital, alphaCode } = this.props.match.params;

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <Fragment>
            <Header light={light} darkModeHandler={this.darkModeHandler} />
            <CountryDetails
              light={light}
              name={name}
              capital={capital}
              alphaCode={alphaCode}
            />
          </Fragment>
        </>
      </ThemeProvider>
    );
  }
}

export default DetailPage;

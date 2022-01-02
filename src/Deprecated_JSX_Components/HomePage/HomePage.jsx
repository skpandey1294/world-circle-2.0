import React, { Component } from "react";
import { Header, SearchBar, DropdownList, Card } from "../../components";
import { ThemeProvider } from "styled-components";
import { apiCall, modeHandler, darkMode, GlobalStyle } from "../../utils";
import "./Home.css";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: { mode: localStorage.getItem("mode") },
      search: false,
      all: false,
      countries: [],
      searchedCountry: [],
      countrySearch: "",
      light: localStorage.getItem("mode") === "dark" ? false : true,
    };
  }

  componentDidMount() {
    if (!localStorage.getItem("mode")) {
      darkMode();
    }

    if (!this.state.countries.length) {
      apiCall("all")
        .then((data) => {
          this.setState({ countries: data });
        })
        .catch((err) => console.error(err));
    }
  }

  darkModeHandler = () => {
    modeHandler();
    this.setState({
      theme:
        this.state.theme.mode === "dark" ? { mode: "white" } : { mode: "dark" },
      light: this.state.theme.mode === "dark" ? true : false,
    });
  };

  searchHandler = (bool) => {
    this.setState({
      search: bool,
    });
  };

  onHandler = (region) => {
    let all = region !== "all" ? false : true;
    let params = region !== "all" ? `region/${region}` : `${region}`;
    apiCall(params)
      .then((countries) => {
        this.setState({
          search: false,
          all: all,
          countries: countries,
        });
      })
      .catch((err) => console.error(err));
  };

  onEnter = () => {
    let expression = `${this.state.countrySearch}.*$`;
    let regEx = new RegExp(expression, "i");
    let filteredCountries = this.state.countries.filter((country) =>
      country.name.match(regEx)
    );

    this.setState({
      search: true,
      searchedCountry: filteredCountries,
    });
  };

  onChange = (event) => {
    this.setState({
      countrySearch: event,
    });

    if (!event) {
      this.searchHandler(false);
      this.setState({
        countryName: [],
      });
    }
  };

  render() {
    const { theme, search, searchedCountry, countries, light } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <div className="container">
            <Header light={light} darkModeHandler={this.darkModeHandler} />
            <div className="country-search">
              <SearchBar onChange={this.onChange} onEnter={this.onEnter} />
              <DropdownList onHandler={this.onHandler} />
            </div>
            <Card
              light={light}
              country={search ? searchedCountry : countries}
            />
          </div>
        </>
      </ThemeProvider>
    );
  }
}

export default HomePage;

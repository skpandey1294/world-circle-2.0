import React, { FC, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { Card, DropdownList, Header, SearchBar } from "..";
import { getParams } from "../../Util";
import { apiCall, darkMode, GlobalStyle, modeHandler } from "../../utils";
import { CountryPrimaryDetailsProps } from "../../Types/types";
import { Mode, ModeKind, continent } from "../../constants";

import "./index.css";

const HomePage: FC<{}> = () => {
  const [theme, setTheme] = useState({
    mode: localStorage.getItem(Mode) || darkMode(),
  });
  const [light, setLight] = useState(
    localStorage.getItem(Mode) !== ModeKind.Dark
  );
  const [searched, setSearched] = useState(false);
  const [countryList, setCountryList] = useState<CountryPrimaryDetailsProps[]>(
    []
  );
  const [searchedCountry, setSearchedCountry] = useState<
    CountryPrimaryDetailsProps[]
  >([]);
  const [countrySearch, setCountrySearch] = useState("");
  const countries = searched ? searchedCountry : countryList;

  useEffect(() => {
    if (localStorage.getItem(continent.ALL)) {
      setCountryList(JSON.parse(localStorage.getItem(continent.ALL) as any));
    } else {
      if (!countryList.length) {
        apiCall(continent.ALL)
          .then((response: CountryPrimaryDetailsProps[]) => {
            localStorage.setItem(continent.ALL, JSON.stringify(response));
            setCountryList(response);
          })
          .catch((e: any) => console.error(e));
      }
    }
  }, []);

  const darkModeHandler = () => {
    modeHandler();
    setTheme((prevProp) =>
      prevProp.mode !== ModeKind.Dark
        ? { mode: ModeKind.Dark }
        : { mode: ModeKind.Light }
    );
    setLight(theme.mode !== ModeKind.Light);
  };

  const onRegionChangeHandler = (region: string) => {
    const params = getParams(region);
    if (localStorage.getItem(region)) {
      setCountryList(JSON.parse(localStorage.getItem(region) as any));
    } else {
      apiCall(params)
        .then((response: CountryPrimaryDetailsProps[]) => {
          setSearched(false);
          localStorage.setItem(region, JSON.stringify(response));
          setCountryList(response);
        })
        .catch((e: any) => console.error(e));
    }
  };

  const onEnter = () => {
    const expression = `${countrySearch}.*$`;
    const regEx = new RegExp(expression, "i");
    const filteredCountries = countryList.filter((country) =>
      country.name.match(regEx)
    );
    setSearched(true);
    setSearchedCountry(filteredCountries);
  };

  const onChange = (e: any) => {
    setCountrySearch(e);
    if (!e) {
      setSearched(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="container">
        <Header light={light} darkModeHandler={darkModeHandler} />
        <div className="country-search">
          <SearchBar onChange={onChange} onEnter={onEnter} />
          <DropdownList onHandler={onRegionChangeHandler} />
        </div>
        <div className="countries-list">
          {countries?.map((country, index) => (
            <Card
              light={light}
              country={country}
              key={country.name}
              index={index + 1}
            />
          ))}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default HomePage;

// box-shadow: 5px 6px 5px rgb(204 204 204 / 80%);

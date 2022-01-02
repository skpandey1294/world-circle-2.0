import React, { FC, useState } from "react";
import { modeHandler, darkMode, GlobalStyle } from "../../utils";
import { CountryDetails, Header } from "..";
import { ThemeProvider } from "styled-components";
import { Mode, ModeKind } from "../../constants";

type DetailsPageProps = {
  match: { params: { name: string; capital: string; alphaCode: string } };
};

const DetailsPage: FC<DetailsPageProps> = ({ match }) => {
  const { name, capital } = match.params;
  const [theme, setTheme] = useState(
    { mode: localStorage.getItem(Mode) } || darkMode()
  );
  const [light, setLight] = useState(theme.mode === ModeKind.Light);

  const darkModeHandler = () => {
    modeHandler();
    setTheme((prevProp) =>
      prevProp.mode !== ModeKind.Dark
        ? { mode: ModeKind.Dark }
        : { mode: ModeKind.Light }
    );
    setLight(theme.mode !== ModeKind.Light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header light={light} darkModeHandler={darkModeHandler} />
      <CountryDetails light={light} name={name} capital={capital} />
    </ThemeProvider>
  );
};

export default DetailsPage;

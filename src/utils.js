import { createGlobalStyle } from "styled-components";

export const modeHandler = () => {
  if (localStorage.getItem("mode") === "dark") {
    lightMode();
  } else {
    darkMode();
  }
};

export const lightMode = () => {
  localStorage.setItem("mode", "light");
  localStorage.setItem("headerStyle", "#ffffff");
  localStorage.setItem("cardColor", "#ffffff");
  localStorage.setItem("textColor", "#000000");
};

export const darkMode = () => {
  localStorage.setItem("mode", "dark");
  localStorage.setItem("headerStyle", "#2b3743");
  localStorage.setItem("cardColor", "#2b3743");
  localStorage.setItem("textColor", "#ffffff");
};

export const crimsonMode = () => {
  localStorage.setItem("mode", "crimson");
  localStorage.setItem("headerStyle", "#dc143c");
  localStorage.setItem("cardColor", "#dc143c");
  localStorage.setItem("textColor", "#ffffff");
};

export const apiCall = (params) =>
  fetch(`https://restcountries.com/v2/${params}`).then((response) =>
    response.json()
  );

export const apiCallByAlphaCode = (params) =>
  fetch(`https://restcountries.com/v2/alpha?codes=${params}`).then((response) =>
    response.json()
  );

export const GlobalStyle = createGlobalStyle`
body{
  background-color:${(props) =>
    props.theme.mode === "dark" ? "#202d36" : "#EEE"};
  color:${(props) => (props.theme.mode === "dark" ? "#EEE" : "#111")};
}`;

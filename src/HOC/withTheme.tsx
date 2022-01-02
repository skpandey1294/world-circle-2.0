import React from "react";

export const withTheme = (InnerComponent: any) => {
  const theme = { mode: localStorage.getItem("mode") };

  return <InnerComponent theme={theme} />;
};

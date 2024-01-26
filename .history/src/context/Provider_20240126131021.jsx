import React from "react";
import AppContext from "./AppContext";

function Provider() {
  return (
    <AppContext.Provider>
      <Header />
      <Products />
    </AppContext.Provider>
  );
}

export default Provider;

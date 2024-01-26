import React, { useState } from "react";
import AppContext from "./AppContext";
import propTypes from "prop-types";

function Provider({ children }) {
  
  const [name, setName] = useState
  
  return (
    <AppContext.Provider>
      
    </AppContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: propTypes.any,
}.isRequired;

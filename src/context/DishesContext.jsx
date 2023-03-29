import React, { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/product-service";

export const DishesContext = createContext();
export function DishesProvider({children}) {
  const [dishesList, setDishesList] = useState([]);
  
  
  useEffect(() => {
    getAllProducts()
      .then((response) => {
        setDishesList(response);
      })
      .catch((error) => {
        console.log(error);
      });
  
  }, [])

  return (
    <DishesContext.Provider 
      value={{
        dishesList,
      }}
    >
      {children}
    </DishesContext.Provider>
  )
}
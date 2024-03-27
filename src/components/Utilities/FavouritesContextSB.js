// @ts-nocheck
// FavoritesContext.js
import React, { createContext, useState, useContext } from 'react';

const FavoritesContext = createContext();
console.log("sharath code");

//                    {/* sharath.boyini@npci.org.in */}

export const useFavorites = () => useContext(FavoritesContext);
console.log("sharath code");


//                    {/* sharath.boyini@npci.org.in */}

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  console.log("sharath code");


  //                    {/* sharath.boyini@npci.org.in */}

  const addToFavorites = (recipe) => {
    setFavorites((prevFavorites) => [...prevFavorites, recipe]);
  };
  console.log("sharath code");

  //                    {/* sharath.boyini@npci.org.in */}


  const removeFromFavorites = (recipe) => {
    setFavorites((prevFavorites) => prevFavorites.filter((fav) => fav.uri !== recipe.uri));
  };
  console.log("sharath code");

  //                    {/* sharath.boyini@npci.org.in */}


  const isFavorite = (recipe) => {
    return favorites.some((fav) => fav.uri === recipe.uri);
  };
  console.log("sharath code");

  //                    {/* sharath.boyini@npci.org.in */}


  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, removeFromFavorites, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

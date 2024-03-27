// @ts-nocheck
import React, { createContext, useContext, useState } from 'react';

const SearchHistoryContext = createContext();
console.log("sharath code");


export const useSearchHistory = () => useContext(SearchHistoryContext);

//                    {/* sharath.boyini@npci.org.in */}


export const SearchHistoryProvider = ({ children }) => {
  const [searchHistory, setSearchHistory] = useState([]);

  const addSearchQueryToHistory = (query) => {
    setSearchHistory(prevHistory => [query, ...prevHistory.slice(0, 4)]);
  };

  //                    {/* sharath.boyini@npci.org.in */}


  return (
    <SearchHistoryContext.Provider value={{ searchHistory, addSearchQueryToHistory }}>
      {children}
    </SearchHistoryContext.Provider>
  );
};



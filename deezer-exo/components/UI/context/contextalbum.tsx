import { createContext, useContext, useReducer, useState } from "react";
import React from "react";

type Action =
  | {
      type: "update_search";
      value: string;
      key: any;
    }
  | { type: "update_other_action" };
type Dispatch = (action: Action) => void;
type SearchProviderProps = { children: React.ReactNode };
type State = {
  search: string;
  localStorage?: Storage;
  dataResult: any[];
};

const searchInitial: State = {
  search: "eminem",
  localStorage: undefined,
  dataResult: [],
};

const ContextSearch = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

function searchReducer(state: State, action: Action) {
  switch (action.type) {
    case "update_search": {
      return {
        ...state,
        search: action.value,
        localStorage: localStorage.setItem("SearchWord", action.value),
      };
    }
    case "update_other_action": {
      // return {
      //   ...state,
      //   localStorage: localStorage.setItem("albumName", action.value),
      // };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

function SearchProvider({ children }: SearchProviderProps) {
  // pas compris ici pourquoi mettre any

  const [state, dispatch] = useReducer(searchReducer, searchInitial);

  return (
    <ContextSearch.Provider value={{ state, dispatch }}>
      {children}
    </ContextSearch.Provider>
  );
}

function useSearch() {
  const context = useContext(ContextSearch);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
}
export { SearchProvider, useSearch };

import React from "react";
import { useContext, useReducer } from "react";

type Action = { type: "increment" } | { type: "decrement" };
type Dispatch = (action: Action) => void;
type StateArtist = { id: number };
type InitialStateArtistType = {
  id: number;
  name: string;
  link: string;
  share: string;
  picture: string;
  picture_small: string;
  picture_medium: string;
  picture_big: string;
  picture_xl: string;
  nb_album: number;
  radio: number;
  tracklist: number;
};
const InitialStateArtist: InitialStateArtistType = {
  id: 0,
  name: "",
  link: "",
  share: "",
  picture: "",
  picture_small: "",
  picture_medium: "",
  picture_big: "",
  picture_xl: "",
  nb_album: 0,
  radio: 0,
  tracklist: 0,
};
type ProviderDeezerProps = { children: React.ReactNode };

const ContextDeezer = React.createContext<
  { state: StateArtist; dispatch: Dispatch } | undefined
>(undefined);

function countReducer(state: StateArtist, action: Action) {
  switch (action.type) {
    case "increment": {
      return { id: state.id + 1 };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function ProviderDeezer({ children }: ProviderDeezerProps) {
  const [state, dispatch] = useReducer(countReducer, InitialStateArtist);
  const value = { state, dispatch };
  return (
    <ContextDeezer.Provider value={value}>{children}</ContextDeezer.Provider>
  );
}

function useDeezer() {
  const context = useContext(ContextDeezer);
  if (context === undefined) {
    throw new Error("useDeezer must be used within a ProviderDeezer");
  }
  return context;
}

export { ProviderDeezer, useDeezer };

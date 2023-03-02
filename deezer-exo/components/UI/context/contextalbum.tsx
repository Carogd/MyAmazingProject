import { createContext, useContext, useReducer, useState } from "react";
import React from "react";

type Action =
  | {
      type: "update_search";
      value: string;
      key: any;
    }
  | { type: "update_playlist"; value: string; key: any };
type Dispatch = (action: Action) => void;
type SearchProviderProps = { children: React.ReactNode };
type State = {
  search: string;
  localStorage?: Storage;
  dataResult: any[];
  playlist: any[];
  stateHeart: boolean;
  // addMusic: (
  //   // stateHeartAdd: boolean,
  //   // nameArtist?: string | string[],
  //   // playlist?: any[]
  //   track: string | string[]
  // ) => void;
  artistName: string;
};

// const addMusic = (stateHeartAdd: boolean, nameArtist: string | string[]) => {
//   const playlist = [];
//   if (!stateHeartAdd) {
//     // playlist.splice(name);
//     // console.log("searchInitial.stateHeart", stateHeartAdd);
//     // on pousse la chanson avec le nom de l artiste dans le tableau
//   } else {
//     // const playlist = [];
//     playlist.push(nameArtist);
//     // console.log("nameArtist", nameArtist);
//     // console.log("playlist", playlist);
//     // on retire la chanson avec le nom de l artiste dans le tableau
//   }
// };

interface Playlist {
  name: string;
}

const searchInitial: State = {
  playlist: [],
  search: "",
  localStorage: undefined,
  dataResult: [],
  stateHeart: false,
  // addMusic: (track) => void,
  artistName: "",
};

const ContextSearch = createContext<
  | { dataResult: any[]; setdataResult: any; state: State; dispatch: Dispatch }
  | undefined
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
    case "update_playlist": {
      return {
        ...state,
      };
    }
    default: {
      throw new Error(`Unhandled action type: ${action}`);
    }
  }
}

function SearchProvider({ children }: SearchProviderProps) {
  const [state, dispatch] = useReducer(searchReducer, searchInitial);
  const [dataResult, setdataResult] = useState<any>(searchInitial.dataResult);
  const [playlist, setPlaylist] = useState<Playlist[]>([]);
  const [stateHeart, setHeart] = useState(false);

  const handleAddToPlaylist = (track?: any) => {
    setHeart(!stateHeart);
    // console.log("dataResult modifyHeart", dataResult);
    const newPlaylist = [...playlist, track];
    setPlaylist(newPlaylist);
    localStorage.setItem("playlist", JSON.stringify(newPlaylist));
    console.log("newPlaylist");
  };
  return (
    <ContextSearch.Provider
      value={{ dataResult, setdataResult, state, dispatch }}
    >
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

import axios from "axios";

class SearchApi {
  // ? diff entre : string | string[] ? -> chercher
  async useApiSearch(search: string | string[]) {
    let data: any[] = [];

    try {
      const response = await axios.get(
        `http://api.deezer.com/search?q=${search}`
      );
      data = response?.data || [];
    } catch (error) {
      console.log(error);
    }
    return data;
  }
  async useApiSearchArtist(artistName: string | string[]) {
    let data: any[] = [];

    try {
      const response = await axios.get(
        `http://api.deezer.com/search/artist/?q=${artistName}`
      );
      data = response?.data || [];
    } catch (error) {
      console.log(error);
    }
    return data;
  }
}

export default new SearchApi();

// const useAPI = async (search: string) => {
//   let data: any[] = [];

//   try {
//     const response = await axios.get(
//       `http://api.deezer.com/search?q=${search}`
//     );
//     data = response?.data || [];
//     // console.log("data", data);
//   } catch (error) {
//     console.log(error);
//   }
//   return data;
// };

// export default useAPI;

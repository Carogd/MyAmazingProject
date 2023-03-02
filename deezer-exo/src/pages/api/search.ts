import type { NextApiRequest, NextApiResponse } from "next";
import SearchApi from "../../../src/api/search/index";
import TrackType from "../../../utils/types/tracks";

// Si je fais pas ca en dessous, alors j'ai l'erreur suivante ---> "le type 'any[]' n'a aucune propriété en commun avec le type 'Data'.ts(2559)"
type Data = TrackType[];

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// req > recoit du client
// res > récupére du client
//////////////////////////////
// and given this URL http://www.google.com/hi/there?qs1=you&qs2=tube
// You will have: req.query
// {
//   qs1: 'you',
//   qs2: 'tube'
// }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { q: search } = req.query;
  const { q: artistName } = req.query;

  if (search) {
    const result = await SearchApi.useApiSearch(search);
    res.status(200).json(result);
  }

  if (artistName) {
    const result = await SearchApi.useApiSearchArtist(artistName);
    res.status(200).json(result);
  }
}

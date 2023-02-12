type TrackType = {
  // define the shape of the data returned by the API
  id?: number;
  readable?: boolean;
  title?: string;
  title_short?: string;
  title_version?: string;
  link?: string;
  duration?: number;
  rank?: number;
  explicit_lyrics?: boolean;
  preview?: string;
};
export default TrackType;

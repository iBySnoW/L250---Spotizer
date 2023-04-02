export interface album {
  id: number;
  title: string;
  songs: [
    {
      id: number;
      title: string;
      length: number;
      youtube: string;
    }
  ];
  albumtype: {
    id: number,
    name: string;
  };
  artist: {
    id: number;
  };
  image: string;
}

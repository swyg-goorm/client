export interface Recommendation {
  code: string;
  message: string;
  data: {
    recommendation: {
      id: number;
      user: {
        id: number;
        name: string;
      };
      hobbyType: {
        id: number;
        name: string;
        description: string;
        threeDimensionImageUrl: string;
        imageUrl: string;
      };
      hobbies: Hobby[];
      fitHobbyTypes: FitHobby[];
    };
  };
}
export interface Hobby {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}
export interface FitHobby {
  id: number;
  name: string;
  description: string;
  thireeDimensionImageUrl: string;
  imageUrl: string;
}

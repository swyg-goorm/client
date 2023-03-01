export type HobbyType = {
  id: number;
  name: string;
  recommendCount: number;
  imageUrl: string;
};

export interface HobbyDataType {
  data: {
    hobbies: HobbyType[];
  };
}

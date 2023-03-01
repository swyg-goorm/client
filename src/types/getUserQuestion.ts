export interface QuestionContentType {
  id: number;
  content: string;
  imageUrl: string;
}

export interface GetUserQuestionType {
  data: {
    test: {
      id: number;
      version: number;
      questions: {
        id: number;
        content: string;
        imageUrl: string;
        answers: QuestionContentType[];
      }[];
    };
  };
}

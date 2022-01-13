export interface IChoice {
  id: string;
  word: string;
}
export interface IQuestion {
  id: string;
  englishSentence: string;
  targetVocab: string;
  germanSentence: string;
  createdAt: Date;
  choices: IChoice[];
  correctAnswer: IChoice;
}

export interface IProps {
  correctAnswer: { id: string; word: string };
  setAnswer: (answer: string) => void;
}

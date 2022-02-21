import { ComponentRef } from "react";

export interface IChoiceProps {
  data: {
    id: string;
    word: string;
  };
  index: number;
  targetRef: ComponentRef<any>;
  setAnswer: (answer: string) => void;
}

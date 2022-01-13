import {IQuestion} from '../../screens/MCQTraining/MCQTraining.interface';

export interface IAnswerReducerState {
  selectedID: null | string;
  answerState: null | boolean;
  currentQuestion: IQuestion | null;
  currentQuestionIndex: number;
  questionsList: IQuestion[];
}

export interface IState {
  answerReducer: IAnswerReducerState;
}

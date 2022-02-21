import { IQuestion } from "../../screens/MCQTraining/MCQTraining.interface";

export class answerActions {
  static SET_SELECTED_ID = "SET_SELECTED_ID";
  static setSelectedID = (id: null | string) => {
    return {
      type: answerActions.SET_SELECTED_ID,
      id,
    };
  };

  static SET_ANSWER_STATE = "SET_ANSWER_STATE";
  static setAnswerState = (answer: null | boolean) => {
    return {
      type: answerActions.SET_ANSWER_STATE,
      answer,
    };
  };

  static RESET_DATA = "RESET_DATA";
  static resetData = () => {
    return {
      type: answerActions.RESET_DATA,
    };
  };

  static SET_QUESTIONS_LIST = "SET_QUESTIONS_LIST";
  static setQuestionList = (questionsList: IQuestion[]) => {
    return {
      type: answerActions.SET_QUESTIONS_LIST,
      questionsList,
    };
  };

  static GET_NEXT_QUESTION = "GET_NEXT_QUESTION";
  static getNextQuestion = () => {
    return {
      type: answerActions.GET_NEXT_QUESTION,
    };
  };
}

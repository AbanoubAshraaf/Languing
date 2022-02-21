import { IAnswerReducerState } from "./answer.interface";
import { answerActions } from "./answerActions";

export class answerReducer {
  static INITIAL_STATE: IAnswerReducerState = {
    selectedID: null,
    answerState: null,
    currentQuestionIndex: 0,
    questionsList: [],
    currentQuestion: null,
  };

  static reduce = (
    state = answerReducer.INITIAL_STATE,
    action: Record<string, any>
  ) => {
    switch (action.type) {
      case answerActions.SET_SELECTED_ID:
        return { ...state, selectedID: action.id };

      case answerActions.SET_ANSWER_STATE:
        return { ...state, answerState: action.answer };

      case answerActions.RESET_DATA:
        return { ...answerReducer.INITIAL_STATE };

      case answerActions.SET_QUESTIONS_LIST:
        return {
          ...state,
          questionsList: action.questionsList,
          currentQuestion: state.currentQuestion
            ? state.currentQuestion
            : action.questionsList[state.currentQuestionIndex],
        };

      case answerActions.GET_NEXT_QUESTION: {
        const nextIsExist = state.questionsList[state.currentQuestionIndex + 1];
        return {
          ...state,
          currentQuestion: nextIsExist,
          currentQuestionIndex: state.currentQuestionIndex + 1,
          selectedID: null,
          answerState: null,
        };
      }
      default:
        return state;
    }
  };
}

import React, {useMemo, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../appStyles/colors';
import {IState} from '../../redux/answer/answer.interface';
import {answerActions} from '../../redux/answer/answerActions';
import {emptyAnswer} from '../../utils/constant';
import {IProps} from './ControlButton.interface';
import {styles} from './ControlButton.styles';

export const ControlButton = ({correctAnswer, setAnswer}: IProps) => {
  const [checked, setChecked] = useState(false);
  const {selectedID, answerState} = useSelector(
    (state: IState) => state.answerReducer,
  );
  const dispatch = useDispatch();

  const [answerStateColor, answerHint] = useMemo(() => {
    if (answerState) {
      return [colors.lightThemeBackground, 'Great Job'];
    } else if (answerState === false) {
      return [colors.wrongAnswer, `Answer : ${correctAnswer.word}`];
    } else {
      return [null, null];
    }
  }, [answerState]);

  const [buttonBackgroundColor, buttonTitle] = useMemo(() => {
    if (selectedID && checked) {
      return [colors.white, 'CONTINUE'];
    } else if (selectedID && !checked) {
      return [colors.lightThemeBackground, 'CHECK ANSWER'];
    } else {
      return [colors.shadowThemeForeground, 'CONTINUE'];
    }
  }, [selectedID, checked]);

  const checkUserAnswer = () => {
   
    if (selectedID === correctAnswer.id) {
      dispatch(answerActions.setAnswerState(true));
    } else {
      dispatch(answerActions.setAnswerState(false));
    }
  };

  return (
    <View style={styles.container(answerStateColor)}>
      <Text style={styles.basicTextStyle}>{answerHint}</Text>
      <TouchableOpacity
        style={styles.buttonContainer(buttonBackgroundColor)}
        disabled={!selectedID}
        onPress={() => {
          if (checked) {
            setChecked(false);

            dispatch(answerActions.getNextQuestion());
            setAnswer(emptyAnswer);
            //will go to fetch another question
          } else {
            setChecked(true);
            checkUserAnswer();
          }
        }}>
        <Text style={styles.boldTextStyle(answerStateColor)}>
          {buttonTitle}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

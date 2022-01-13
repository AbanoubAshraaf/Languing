import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {colors} from '../../../appStyles/colors';
import {IState} from '../../../redux/answer/answer.interface';
import {answerActions} from '../../../redux/answer/answerActions';
import {IChoiceProps} from './Choice.interface';
import {styles} from './Choice.styles';

export const Choice = ({
  data: {id, word},
  index,
  targetRef,
  setAnswer,
}: IChoiceProps) => {
  const [targetXYPostion, setTargetXYPostion] = useState({x: 0, y: 0});
  const [isSelected, setIsSelected] = useState(false);
  const {x, y} = targetXYPostion;
  const choiceRef = useRef(null);
  const {selectedID, answerState} = useSelector(
    (state: IState) => state.answerReducer,
  );
  const dispatch = useDispatch();

 
  const choicePosition = useRef(new Animated.ValueXY()).current;

  const [choiceBackgroundColor, choiceWordColor] = useMemo(() => {
    if (answerState !== null && selectedID !== id) {
      return [colors.shadowThemeForeground, colors.mainThemeForeground];
    } else if (answerState && selectedID === id) {
      return [colors.lightThemeBackground, colors.mainTextColor];
    } else if (answerState === false && selectedID === id) {
      return [colors.wrongAnswer, colors.mainTextColor];
    } else {
      return [colors.white, colors.mainThemeForeground];
    }
  }, [answerState, selectedID]);

  useEffect(() => {
    setTimeout(
      () => {
        Animated.spring(choicePosition, {
          toValue: {x, y},
          duration: 100,
          useNativeDriver: true,
        }).start();
      },
      selectedID === id ? 100 : 0,
    );
  }, [x]);

  useEffect(() => {
    if (selectedID && selectedID === id) {
      setIsSelected(true);
      getTargetXY();
      setAnswer(word);
    } else if (isSelected) {
      setTargetXYPostion({x: 0, y: 0});
      setIsSelected(false);
    }
  }, [selectedID]);

  const getTargetXY = () => {
    let targetX = 0;
    let targetY = 0;

    if (choiceRef && choiceRef.current && targetRef && targetRef.current) {
      choiceRef.current.measure(
        (
          choiceW: number,
          choiceH: number,
          choicePX: number,
          choicePY: number,
          choiceFX: number,
          choiceFY: number,
        ) => {
          targetRef.current.measure(
            (
              w: number,
              h: number,
              px: number,
              py: number,
              fx: number,
              fy: number,
            ) => {
              targetX = -25 - (choiceFX - fx);
              targetY = -15 - (choiceFY - fy);
              setTargetXYPostion({x: targetX, y: targetY});
            },
          );
        },
      );
    }
  };

  return (
    <View style={styles.container(index)}>
      <Animated.View
        style={{
          transform: [
            {translateX: choicePosition.x},
            {translateY: choicePosition.y},
          ],
        }}>
        <TouchableOpacity
          ref={choiceRef}
          activeOpacity={1}
          disabled={answerState !== null}
          style={[
            styles.subContainer,
            {backgroundColor: choiceBackgroundColor},
          ]}
          onPress={() => {
            dispatch(answerActions.setSelectedID(isSelected ? null : id));
          }}>
          <Text style={{fontWeight: 'bold', color: choiceWordColor}}>
            {word}
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

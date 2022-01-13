import React, {useEffect, useRef, useState} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ControlButton} from '../../components/ControlButton';
import {Sentence} from '../../components/Sentence';
import {IState} from '../../redux/answer/answer.interface';
import {emptyAnswer} from '../../utils/constant';
import {Choice} from './Choice';
import {styles} from './MCQTraining.styles';
import firestore from '@react-native-firebase/firestore';
import {IChoice, IQuestion} from './MCQTraining.interface';
import {answerActions} from '../../redux/answer/answerActions';
import {colors} from '../../appStyles/colors';

export const MCQTraining = () => {
  const [answer, setAnswer] = useState<string>(emptyAnswer);
  const [loading, setLoading] = useState<boolean>(true);

  const dashRef = useRef(null);
  const {currentQuestion, selectedID} = useSelector(
    (state: IState) => state.answerReducer,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const questionsSubscribe = firestore()
      .collection('exercises')
      .orderBy('createdAt', 'asc')
      .onSnapshot(querySnapshot => {
        const questions: IQuestion[] = [];

        querySnapshot.forEach(documentSnapshot => {
          questions.push({
            ...documentSnapshot.data(),
          } as IQuestion);
        });
        dispatch(answerActions.setQuestionList(questions));
        loading && setLoading(false);
      });

    // Stop listening for updates when no longer required
    return () => questionsSubscribe();
  }, []);

  if (!currentQuestion && !loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.noEnough}>
          Sorry No enough challenge for now :({' '}
        </Text>
      </View>
    );
  }

  if (!currentQuestion && loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size={25} color={colors.mainThemeForeground} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.contentContainer}>
          <Text style={styles.instruction}>Fill in the missing word </Text>

          <Sentence
            sentence={currentQuestion.englishSentence}
            targetVocab={currentQuestion.targetVocab}
          />
          <Sentence sentence={currentQuestion.germanSentence} targetVocab="_">
            <View
              style={
                selectedID || answer !== emptyAnswer ? styles.hiddenDashes : {}
              }>
              <Text ref={dashRef} style={styles.boldTextStyle}>
                {answer}
              </Text>
            </View>
          </Sentence>
          <View style={styles.listContainer}>
            {currentQuestion.choices.map((item: IChoice, index: number) => {
              return (
                <Choice
                  key={item.id}
                  data={item}
                  index={index}
                  targetRef={dashRef}
                  setAnswer={setAnswer}
                />
              );
            })}
          </View>
        </View>

        <ControlButton
          correctAnswer={currentQuestion.correctAnswer}
          setAnswer={setAnswer}
        />
      </View>
    </View>
  );
};

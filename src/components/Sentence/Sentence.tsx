import React from 'react';
import {Text, View} from 'react-native';
import {ISentenceProps} from './Sentence.interface';
import {styles} from './Sentence.styles';

export const Sentence = ({sentence, targetVocab, children}: ISentenceProps) => {
  const splitedsentence = sentence.split(targetVocab);

  return (
    <View style={styles.container}>
      <Text style={styles.basicTextStyle}>{splitedsentence[0]}</Text>

      {children || (
        <Text style={[styles.basicTextStyle, styles.boldTextStyle]}>
          {targetVocab}
        </Text>
      )}
      <Text style={styles.basicTextStyle}>{splitedsentence[1]}</Text>
    </View>
  );
};

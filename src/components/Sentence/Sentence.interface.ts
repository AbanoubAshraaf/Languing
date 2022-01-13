import React from 'react';

export interface ISentenceProps {
  sentence: string;
  targetVocab: string;
  children?: React.FC<any> | any;
}

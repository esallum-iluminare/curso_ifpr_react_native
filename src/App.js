import React from 'react';
import {SafeAreaView, Text} from 'react-native';

import Comp, {Comp1, Comp2} from './components/Multi';
import Primeiro from './components/primeiro';
export default () => (
  <SafeAreaView>
    <Comp />
    <Comp1 />
    <Comp2 />
    <Primeiro />
  </SafeAreaView>
);

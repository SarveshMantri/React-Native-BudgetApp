import {View} from 'react-native';
import React from 'react';

import {Button, Divider, Text} from 'react-native-paper';
import styles from '../styles';

const NavigatorHeader = ({setOnBudgets}) => {
  return (
    <>
      <View style={styles.headercontainer}>
        <Text variant="displaySmall">Budget App</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          mode="outlined"
          style={styles.headerButton}
          onPress={() => setOnBudgets(true)}>
          Budgets
        </Button>
        <Button
          mode="outlined"
          style={styles.headerButton}
          onPress={() => setOnBudgets(false)}>
          Add New Budget
        </Button>
      </View>
      <Divider bold={true} style={{marginBottom: 15}} />
    </>
  );
};

export default NavigatorHeader;

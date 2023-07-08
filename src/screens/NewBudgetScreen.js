import {Alert, View} from 'react-native';
import React, {useState} from 'react';
import {Button, TextInput} from 'react-native-paper';
import styles from '../styles';

const NewBudgetScreen = ({setOnBudgets}) => {
  const [name, setName] = useState('');
  const [plannedAmt, setPlannedAmt] = useState('');
  const [actualAmt, setActualAmt] = useState('');

  const handleAddBudget = () => {
    if (name.trim().length === 0) {
      Alert.alert('Warning!', 'Please enter a valid name.');
      return;
    }

    if (isNaN(Number(plannedAmt)) || Number(plannedAmt) <= 0) {
      Alert.alert('Warning!', 'Please enter a valid planned amount.');
      return;
    }

    if (isNaN(Number(actualAmt)) || Number(actualAmt) <= 0) {
      Alert.alert('Warning!', 'Please enter a valid actual amount.');
      return;
    }
    setOnBudgets(true);
  };

  return (
    <View style={styles.container}>
      <TextInput
        mode="outlined"
        label="Name"
        style={styles.textInput}
        onChangeText={name => setName(name)}
        value={name}
      />
      <TextInput
        mode="outlined"
        label="Planned Amount"
        right={<TextInput.Icon icon="currency-rupee" />}
        style={styles.textInput}
        keyboardType="numeric"
        selectTextOnFocus={true}
        value={plannedAmt}
        onChangeText={plannedAmt => setPlannedAmt(plannedAmt)}
      />
      <TextInput
        mode="outlined"
        label="Actual Amount"
        right={<TextInput.Icon icon="currency-rupee" />}
        style={styles.textInput}
        keyboardType="numeric"
        selectTextOnFocus={true}
        value={actualAmt}
        onChangeText={actualAmt => setActualAmt(actualAmt)}
      />
      <Button mode="contained" onPress={handleAddBudget} style={styles.button}>
        Add Budget
      </Button>
    </View>
  );
};

export default NewBudgetScreen;
